"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { useUsuarioStore } from "@/context/usuario";
import { useEffect, useState } from "react";
import { IdiomaUsuarioI } from "@/utils/types/idiomaUsuario";
import ItemLanguage from "@/components/itemLanguage";
import { useToast } from "@/hooks/use-toast";
import "react-responsive-modal/styles.css";
import { useParams } from "next/navigation";
import { UsuarioI } from "@/utils/types/usuarios";

export default function Perfil() {
  const { toast } = useToast();
  const { usuario } = useUsuarioStore();
  const [linguas, setLinguas] = useState<IdiomaUsuarioI[]>([]);
  const [dataNascimento, setDataNascimento] = useState("");
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<UsuarioI | null>(null);
  const params = useParams();

  const usuarioId = Array.isArray(params.usuario_id) ? params.usuario_id[0] : params.usuario_id;

  useEffect(() => {
    if (usuarioId) {
      getDadosUsuario(usuarioId);
      getLinguasUsuario(usuarioId);
    }
  }, [usuarioId]);

  async function getDadosUsuario(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/conta/${id}`);
    if (response.ok) {
      const dados = await response.json();
      setUsuarioSelecionado(dados);
      console.log(dados.linguaMaternaId);
      setDataNascimento(dados.nascimento);
    } else {
      toast({ title: "Erro ao carregar o perfil do usuário" });
    }
  }

  async function getLinguasUsuario(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/idiomasUsuarios/${id}`);
    if (response.ok) {
      const dados = await response.json();
      setLinguas(dados);
    }
  }

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

  if (!usuarioSelecionado) return <p>Carregando...</p>;

  const idade = calculaIdade(dataNascimento);
  const listaLinguas = linguas.map((lingua) => <ItemLanguage key={lingua.id} data={lingua} />);

  let lingua;
  if (usuario.linguaMaternaId == 1) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3 className="">Português</h3>
        <span className="fi fi-br"></span>
      </div>
    );
  } else if (usuarioSelecionado.linguaMaternaId == 2) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Inglês</h3>
        <span className="fi fi-us"></span>
      </div>
    );
  } else if (usuarioSelecionado.linguaMaternaId == 3) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Japonês</h3>
        <span className="fi fi-jp border-black"></span>
      </div>
    );
  } else if (usuarioSelecionado.linguaMaternaId == 4) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Mandarim</h3>
        <span className="fi fi-cn"></span>
      </div>
    );
  } else if (usuarioSelecionado.linguaMaternaId == 5) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Alemão</h3>
        <span className="fi fi-de"></span>
      </div>
    );
  } else if (usuarioSelecionado.linguaMaternaId == 6) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Espanhol</h3>
        <span className="fi fi-es"></span>
      </div>
    );
  } else if (usuarioSelecionado.linguaMaternaId == 7) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Francês</h3>
        <span className="fi fi-fr"></span>
      </div>
    );
  } else if (usuarioSelecionado.linguaMaternaId == 8) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Coreano</h3>
        <span className="fi fi-kr border-black"></span>
      </div>
    );
  } else if (usuarioSelecionado.linguaMaternaId == 9) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Tagalog</h3>
        <span className="fi fi-ph "></span>
      </div>
    );
  } else if (usuarioSelecionado.linguaMaternaId == 10) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Russo</h3>
        <span className="fi fi-ru"></span>
      </div>
    );
  } else if (usuarioSelecionado.linguaMaternaId == 11) {
    lingua = (
      <div className="flex items-center justify-center gap-3">
        <h3>Indonésio</h3>
        <span className="fi fi-id "></span>
      </div>
    );
  }

  return (
    <div>
      <header className="mt-32">
        <Header />
      </header>
      <main className="mx-20">
        <section className="flex mb-14 gap-10 flex-col  md:flex-row lg:gap-10 lg:mb-10">
          <Image
            alt="avatar icon"
            width={215}
            height={215}
            src={usuarioSelecionado.foto}
            className="rounded-full max-w-60 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          />
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex items-center gap-20 md:gap-4">
              <h1 className="text-2xl font-bold">{usuarioSelecionado.nome}</h1>
            </div>
            <div className="flex text-center text-sm gap-10 md:text-base  lg:text-start">
              <div>
                <h2 className="text-center font-semibold">{idade}</h2>
                <h2>Idade</h2>
              </div>
              <div>
                <h2 className="text-center font-semibold">{usuarioSelecionado.genero}</h2>
                <h2>Gênero</h2>
              </div>
              <div>
                <h2 className="text-center font-semibold">{usuarioSelecionado.nacionalidade}</h2>
                <h2>Nacionalidade</h2>
              </div>
            </div>
            <Link
              href={"#"}
              className="hover:scale-110 px-2 py-1 transition delay-150 duration-300 ease-in-out text-[#b38000] font-bold p-2 rounded-3xl border-[3px] border-[#b38000] hover:bg-[#B38000] hover:text-white focus:ring-4 focus:outline-none text-xl text-center"
            >
              Iniciar uma Conversa
            </Link>
          </div>
        </section>
        <section className="w-full mb-10">
          <h2 className="text-xl font-bold mb-2">Sobre mim</h2>
          <textarea
            readOnly
            className="bg-white text-wrap w-full p-10 rounded-3xl shadow-[rgba(50,50,93,0.25)0px_6px_12px-2px,rgba(0,0,0,0.3)_0px_3px_7px-3px]"
          >
            {usuarioSelecionado.descricao || "Aguardando dados"}
          </textarea>
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
            <h2 className="flex items-center mb-2 gap-2 text-xl font-bold">Línguas de Interesse</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-10">
              {listaLinguas}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}