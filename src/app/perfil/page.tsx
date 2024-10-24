'use client';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import { useUsuarioStore } from '@/context/usuario';
import { useEffect, useState } from 'react';
import { IdiomaUsuarioI } from '@/utils/types/idiomaUsuario';
import ItemLanguage from '@/components/itemLanguage';

export default function Perfil() {
  const { usuario, logar } = useUsuarioStore();
  const [linguas, setLinguas] = useState<IdiomaUsuarioI[]>([]);
  let genero;

  if (usuario.genero == 'HOMEM') {
    genero = 'H';
  } else if (usuario.genero == 'MULHER') {
    genero = 'M';
  } else {
    genero = 'NAO_INFORMADO';
  }

  useEffect(() => {
    async function buscaUsuarios(idUsuario: string) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/usuarios/${idUsuario}`,
      );
      if (response.status === 200) {
        const dados = await response.json();
        logar(dados);
      }
    }
    if (localStorage.getItem('client_key')) {
      const usuarioSalvo = localStorage.getItem('client_key') as string;
      const usuarioValor = usuarioSalvo.replace(/"/g, '');
      buscaUsuarios(usuarioValor);
    }

    async function getLinguas() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/idiomasUsuarios/${usuario.id}`,
      );
      if (response.status == 200) {
        const dados = await response.json();
        setLinguas(dados);
      }
    }
    getLinguas();
  }, []);

  const listaLinguas = linguas.map((lingua) => (
    <ItemLanguage key={lingua.id} data={lingua} />
  ));

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
  if (usuario.linguaMaternaId == 2) {
    lingua = 'Inglês - US';
  } else if (usuario.linguaMaternaId == 1) {
    lingua = 'Português - BR';
  } else {
    lingua = 'Aguardando dados';
  }

const idadeConvertida = Math.abs(calculaIdade(usuario.nascimento));
  return (
    <div>
      <header className="mt-32">
        <Header />
      </header>
      <main className="mx-20">
        <section className="flex mb-14 flex-col md:flex-row lg:gap-10 lg:mb-10">
          <Image
            alt="avatar icon"
            width={215}
            height={215}
            src={usuario.foto}
            className="rounded-full max-w-60 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          />
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex items-center gap-10">
              <h1 className="text-2xl font-bold">{usuario.nome}</h1>
              <Link
                href={'#'}
                type="button"
                className="hover:scale-110 px-2 py-1 transition delay-150 duration-300 ease-in-out text-black font-bold p-2 rounded-3xl border-2 border-[#b38000] hover:bg-[#B38000] focus:ring-4 focus:outline-none text-xl text-center "
              >
                Editar
              </Link>
            </div>
            <div className="flex text-center flex-col text-sm gap-10 md:text-base lg:flex-row lg:text-start">
              <div>
                <h2 className="text-center font-semibold">
                  {idadeConvertida}
                </h2>
                <h2>Idade</h2>
              </div>
              <div>
                <h2 className="text-center font-semibold">{genero}</h2>
                <h2>Gênero</h2>
              </div>
              <div>
                <h2 className="text-center font-semibold">
                  {usuario.nacionalidade}
                </h2>
                <h2>Nacionalidade</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen mb-10">
          <h2 className="text-xl font-bold mb-2">Sobre mim</h2>
          <div className="bg-white p-10 w-3/5 rounded-3xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <p className="">
              {usuario.descricao || 'Adicione uma descrição sobre você ...'}
            </p>
          </div>
        </section>
        <section className="mb-14">
          <h2 className="flex items-center mb-2 gap-2 text-xl font-bold">
            Destaques
          </h2>
          <div className="flex flex-col gap-10 md:flex-row">
            <div>
              <h2 className="flex items-center gap-2 my-2">Tempo de Uso</h2>
              <h2 className="text-center p-2 rounded-3xl border-2 border-[#b38000]">
                {(usuario.tempoDeUso as number) || 0} Horas
              </h2>
            </div>
            <div>
              <h2 className="flex items-center gap-2 my-2">
                Mensagens Trocadas
              </h2>
              <h2 className="text-center p-2 rounded-3xl border-2 border-[#b38000]">
                {(usuario.mensagensTotais as number) || 0} Mensagens
              </h2>
            </div>
            <div>
              <h2 className="flex items-center gap-2 my-2">
                Sessões Concluidas
              </h2>
              <h2 className="text-center p-2 rounded-3xl border-2 border-[#b38000]">
                {(usuario.sessoesTotais as number) || 0} Sessões Concluidas{' '}
              </h2>
            </div>
          </div>
        </section>
        <section className="mb-14">
          <h2 className="flex items-center mb-2 gap-2 text-xl font-bold">
            Linguas Fluentes
          </h2>
          <div className="flex flex-col gap-10 md:flex-row">
            <div>
              <h2 className="bg-white text-center p-4 rounded-3xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                {(lingua as string) || 'Aguardando'}
              </h2>
            </div>
          </div>
        </section>
        {linguas.length > 0 && (
          <section className="mb-14">
            <h2 className="flex items-center mb-2 gap-2 text-xl font-bold">
              Linguas De interesse
            </h2>
            <div className="flex flex-col gap-10 md:flex-row">
              {listaLinguas}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
