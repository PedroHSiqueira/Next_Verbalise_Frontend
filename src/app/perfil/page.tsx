"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { useUsuarioStore } from "@/context/usuario";
import { useEffect, useState } from "react";
import { IdiomaUsuarioI } from "@/utils/types/idiomaUsuario";
import ItemLanguage from "@/components/itemLanguage";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import "react-responsive-modal/styles.css";
import Cookies from "js-cookie";
import Select from "react-select";

type Inputs = {
  foto: string;
  nascimento: string;
  nacionalidade: string;
  descricao: string;
  genero: string;
  linguaMaterna: number;
  linguasInteresse: object[];
};

const linguasInteresseDisponivel = [
  { id: 1, value: "Português", label: "Português" },
  { id: 2, value: "Inglês", label: "Inglês" },
  { id: 3, value: "Japonês", label: "Japonês" },
  { id: 4, value: "Mandarim", label: "Mandarim" },
  { id: 5, value: "Alemão", label: "Alemão" },
  { id: 6, value: "Espanhol", label: "Espanhol" },
  { id: 7, value: "Francês", label: "Francês" },
  { id: 8, value: "Coreano", label: "Coreano" },
  { id: 9, value: "Tagalog", label: "Tagalog" },
  { id: 10, value: "Russo", label: "Russo" },
  { id: 11, value: "Indonésio", label: "Indonésio" },
];

export default function Perfil() {
  const { usuario, logar } = useUsuarioStore();
  const { register, handleSubmit } = useForm<Inputs>();
  const { toast } = useToast();
  const [linguas, setLinguas] = useState<IdiomaUsuarioI[]>([]);
  const [open, setOpen] = useState(false);
  const [linguasInteresse, setLinguasInteresse] = useState([]);
  const [dataNascimento, setDataNascimento] = useState("");

  const onOpenModal = () => {
    setDataNascimento(usuario.nascimento);
    setOpen(true);

    const formattedDate = usuario.nascimento ? new Date(usuario.nascimento).toISOString().split('T')[0] : '';
    setDataNascimento(formattedDate);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const handleChanges = (linguasInteresse: any) => {
    if (linguasInteresse.length > 5) {
      toast({
        variant: "destructive",
        title: "Limite de Linguas Atingido",
        description: "Você só pode selecionar até 5 linguas de interesse",
      });
      return;
    } else if (linguasInteresse.length == 0) {
      toast({
        variant: "destructive",
        title: "Nenhuma Lingua Selecionada",
        description: "Você deve selecionar ao menos uma lingua de interesse",
      });
      return;
    } else {
      setLinguasInteresse(linguasInteresse);
    }
  };
  const descricaoUsuario = Cookies.get("descricao");

  let genero: string;

  if (usuario.genero == "HOMEM") {
    genero = "H";
  } else if (usuario.genero == "MULHER") {
    genero = "M";
  } else {
    genero = "---";
  }

  async function atualizaPerfil(data: Inputs) {
    console.log(data);
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/mudainformacoes/${usuario.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foto: data.foto as string,
        nascimento: (data.nascimento + "T00:00:00+00:00") as string,
        nacionalidade: data.nacionalidade as string,
        descricao: data.descricao || ("..." as string),
        genero: data.genero as string,
        linguaMaternaId: Number(data.linguaMaterna),
        linguasInteresse: linguasInteresse,
      }),
    });
    if (response.status === 200) {
      const dados = await response.json();
      Cookies.set("descricao", dados.descricao);
      onCloseModal();
      toast({
        variant: "default",
        title: "Perfil Atualizado",
        description: "Recarregue a página para ver as mudanças",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Algo deu errado",
        description: "Verifique suas Informações e tente novamente",
      });
    }
  }

  useEffect(() => {
    if (localStorage.getItem("client_key")) {
      const usuarioSalvo = localStorage.getItem("client_key") as string;
      const usuarioValor = usuarioSalvo.replace(/"/g, "");
      buscaUsuarios(usuarioValor);
      getLinguas(usuarioValor);
    }

    async function buscaUsuarios(idUsuario: string) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/conta/${idUsuario}`);
      if (response.status === 200) {
        const dados = await response.json();
        logar(dados);
        setDataNascimento(dados.nascimento);
      }
    }
    async function getLinguas(idUsuario: string) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/idiomasUsuarios/${idUsuario}`);
      if (response.status == 200) {
        const dados = await response.json();
        setLinguas(dados);
      }
    }
  }, []);

  let listaLinguas = linguas.map((lingua) => <ItemLanguage key={lingua.id} data={lingua} />);

  function calculaIdade(dataNascimento: string) {
    const dataAtual = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    const mes = dataAtual.getMonth() - dataNasc.getMonth();
    if (mes < 0 || (mes === 0 && dataAtual.getDate() < dataNasc.getDate())) {
      idade -= 1;
    }
    return idade;
  }

  let lingua;
  if (usuario.linguaMaternaId == 1) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3 className="">Português</h3>
        <span className="fi fi-br"></span>
      </div>
    );
  } else if (usuario.linguaMaternaId == 2) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Inglês</h3>
        <span className="fi fi-us"></span>
      </div>
    );
  } else if (usuario.linguaMaternaId == 3) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Japonês</h3>
        <span className="fi fi-jp border-black"></span>
      </div>
    );
  } else if (usuario.linguaMaternaId == 4) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Mandarim</h3>
        <span className="fi fi-cn"></span>
      </div>
    );
  } else if (usuario.linguaMaternaId == 5) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Alemão</h3>
        <span className="fi fi-de"></span>
      </div>
    );
  } else if (usuario.linguaMaternaId == 6) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Espanhol</h3>
        <span className="fi fi-es"></span>
      </div>
    );
  } else if (usuario.linguaMaternaId == 7) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Francês</h3>
        <span className="fi fi-fr"></span>
      </div>
    );
  } else if (usuario.linguaMaternaId == 8) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Coreano</h3>
        <span className="fi fi-kr border-black"></span>
      </div>
    );
  } else if (usuario.linguaMaternaId == 9) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Tagalog</h3>
        <span className="fi fi-ph "></span>
      </div>
    );
  } else if (usuario.linguaMaternaId == 10) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Russo</h3>
        <span className="fi fi-ru"></span>
      </div>
    );
  } else if (usuario.linguaMaternaId == 11) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Indonésio</h3>
        <span className="fi fi-id "></span>
      </div>
    );
  }


  const idadeConvertida = Math.abs(calculaIdade(usuario.nascimento));
  return (
    <div>
      <header className="mt-32">
        <Header />
      </header>
      <main className="mx-20">
        <section className="flex mb-14 gap-10 flex-col  md:flex-row lg:gap-10 lg:mb-10">
          <Image alt="avatar icon" width={215} height={215} src={usuario.foto} className="rounded-full max-w-60 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" />
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex items-center gap-20 md:gap-4">
              <h1 className="text-2xl font-bold">{usuario.nome}</h1>
              <Link href={"#"} onClick={onOpenModal} className="hover:scale-110 px-2 py-1 transition delay-150 duration-300 ease-in-out text-[#b38000] font-bold p-2 rounded-3xl border-[3px] border-[#b38000] hover:bg-[#B38000] hover:text-white focus:ring-4 focus:outline-none text-xl text-center ">
                Editar
              </Link>
            </div>
            <div className="flex text-center text-sm gap-10 md:text-base  lg:text-start">
              <div>
                <h2 className="text-center font-semibold">{idadeConvertida}</h2>
                <h2>Idade</h2>
              </div>
              <div>
                <h2 className="text-center font-semibold">{genero}</h2>
                <h2>Gênero</h2>
              </div>
              <div>
                <h2 className="text-center font-semibold">{usuario.nacionalidade}</h2>
                <h2>Nacionalidade</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mb-10">
          <h2 className="text-xl font-bold mb-2">Sobre mim</h2>
          <textarea readOnly className="bg-white text-wrap w-full p-10 rounded-3xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            {descricaoUsuario || "Aguardando dados"}
          </textarea>
        </section>
        <section className="mb-14">
          <h2 className="flex items-center mb-2 gap-2 text-xl font-bold">Destaques</h2>
          <div className="flex flex-col gap-10 md:flex-row">
            <div>
              <h2 className="flex items-center gap-2 my-2">Tempo de Uso</h2>
              <h2 className="text-center p-2 rounded-3xl border-2 border-[#b38000]">{usuario.tempoDeUso as number} Horas</h2>
            </div>
            <div>
              <h2 className="flex items-center gap-2 my-2">Mensagens Trocadas</h2>
              <h2 className="text-center p-2 rounded-3xl border-2 border-[#b38000]">{usuario.mensagensTotais as number} Mensagens</h2>
            </div>
            <div>
              <h2 className="flex items-center gap-2 my-2">Sessões Concluidas</h2>
              <h2 className="text-center p-2 rounded-3xl border-2 border-[#b38000]">{usuario.sessoesTotais as number} Sessões Concluidas </h2>
            </div>
          </div>
        </section>
        <section className="mb-14">
          <h2 className="flex items-center mb-2 gap-2 text-xl font-bold">Linguas Nativa</h2>
          <div className="flex flex-col gap-10 md:flex-row">
            <div>
              <h2 className="bg-white text-center p-4 rounded-3xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex items-center justify-center min-w-[150px]">{lingua || "Aguardando"}</h2>
            </div>
          </div>
        </section>
        {linguas.length > 0 && (
          <section className="mb-14">
            <h2 className="flex items-center mb-2 gap-2 text-xl font-bold">Linguas De interesse</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-10">{listaLinguas}</div>
          </section>
        )}
      </main>
      <Modal open={open} onClose={onCloseModal} closeOnOverlayClick>
        <h2 className="bg-[#693f94] text-white rounded-md p-3 mt-10">Atualizar Campos Do Perfil de Usuário</h2>
        <form className="max-w-sm mx-auto mt-5" onSubmit={handleSubmit(atualizaPerfil)}>
          <div className="mb-5">
            <label htmlFor="foto" className="form-label">
              URL da Foto:
            </label>
            <input
              type="text"
              defaultValue={usuario.foto}
              className="bg-gray-50 min-w-[180px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="foto"
              {...register("foto")}
            />
          </div>
          <div className="flex gap-5 mb-5">
            <div className="w-full">
              <label htmlFor="burthday" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Data de Nascimento
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  id="date"
                  value={dataNascimento}
                  type="date"
                  className="bg-gray-50 min-w-[180px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Selecione sua data de nascimento"
                  {...register("nascimento")}
                  required
                  onChange={(e) => setDataNascimento(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Gênero
              </label>
              <select
                id="gender"
                defaultValue={usuario.genero}
                className="bg-gray-50 min-w-[180px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                {...register("genero")}
              >
                <option value={"HOMEM"}>Homem</option>
                <option value={"MULHER"}>Mulher</option>
                <option value={"NAO_INFORMADO"}>Não Informar</option>
              </select>
            </div>
          </div>
          <div className="flex gap-5 mb-5">
            <div className="w-full">
              <label htmlFor="Nacionality" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nacionalidade
              </label>
              <select
                id="Nacionality"
                defaultValue={usuario.nacionalidade}
                className="bg-gray-50 min-w-[180px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                {...register("nacionalidade")}
                required
              >
                <option>Alemão</option>
                <option>Brasileiro</option>
                <option>Britanico</option>
                <option>Canadense</option>
                <option>Chinês</option>
                <option>Coreano</option>
                <option>Espanhol</option>
                <option>Estadunidense</option>
                <option>Filipino (Pinoy)</option>
                <option>Francês</option>
                <option>Indonésio</option>
                <option>Japonês</option>
                <option>Russo</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="Native" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Lingua Nativa
              </label>
              <select
                id="native"
                defaultValue={usuario.linguaMaternaId as number}
                className="bg-gray-50 border min-w-[180px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                {...register("linguaMaterna")}
                required
              >
                <option value={5}>Alemão</option>
                <option value={2}>Inglês</option>
                <option value={11}>Indonésio</option>
                <option value={6}>Espanhol</option>
                <option value={7}>Francês</option>
                <option value={1}>Português</option>
                <option value={10}>Russo</option>
                <option value={9}>Tagalog</option>
                <option value={4}>Mandarim</option>
                <option value={3}>Japonês</option>
                <option value={8}>Coreano</option>
              </select>
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="languages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Linguas de Interesse
            </label>
            <Select
              isMulti
              id="languages"
              placeholder="Selecione..."
              options={linguasInteresseDisponivel}
              onChange={handleChanges}
              required
            />
          </div>
          <div className="max-w-sm mx-auto mb-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Descrição
            </label>
            <textarea
              id="message"
              maxLength={255}
              defaultValue={descricaoUsuario}
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Mudar Descrição do Perfil . . ."
              {...register("descricao")}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer transition delay-150 duration-300 ease-in-out shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] m-0 text-white bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-4 py-2 text-center"
          >
            Atualizar Informações
          </button>
        </form>
      </Modal>
    </div>
  );
}