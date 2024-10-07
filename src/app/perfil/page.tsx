'use client';
import Header from '@/components/header';
import { HiUserCircle } from 'react-icons/hi';
import { useUsuarioStore } from '@/context/usuario';
import Link from 'next/link';
import { useEffect } from 'react';
import { BiTrophy } from 'react-icons/bi';
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { GrTask } from "react-icons/gr";

export default function Perfil() {
  const { usuario, logar } = useUsuarioStore();
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
  });
  return (
    <div>
      <header className="mt-32">
        <Header />
      </header>
      <main className="mx-20">
        <section className="flex mb-14 flex-col md:flex-row lg:gap-10 lg:mb-10">
          <img src={usuario.foto} className='rounded-full max-w-60 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' />
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
                <h2 className="text-center">
                  {usuario.idade as number}
                </h2>
                <h2>Idade</h2>
              </div>
              <div>
                <h2 className='text-center'>{usuario.genero}</h2>
                <h2>Genero</h2>
              </div>
              <div>
                <h2 className='text-center'>{usuario.nacionalidade}</h2>
                <h2>Nacionalidade</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen mb-10">
          <h2 className='text-xl font-bold mb-2'>Sobre mim</h2>
          <div className="bg-gray-200 p-10 w-3/5 rounded-3xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <p className="">
              {usuario.descricao || "Adicione uma descrição sobre você ..."}
            </p>
          </div>
        </section>
        <section className='mb-14'>
          <h2 className='flex items-center mb-2 gap-2 text-xl font-bold'>
            Destaques <BiTrophy size={26} color='#b38000' />
          </h2>
          <div className="flex flex-col gap-10 md:flex-row">
            <div>
              <h2 className='flex items-center gap-2 my-2'>Tempo de Uso <FaRegClock size={18} /></h2>
              <h2 className="text-center p-2 rounded-3xl border-2 border-[#b38000]">{(usuario.tempoDeUso as number) || 0} Horas</h2>
            </div>
            <div>
              <h2 className='flex items-center gap-2 my-2' >Mensagens Trocadas <MdOutlineMessage size={18} /></h2>
              <h2 className='text-center p-2 rounded-3xl border-2 border-[#b38000]'>{usuario.mensagensTotais as number || 0} Mensagens</h2>
            </div>
            <div>
              <h2 className='flex items-center gap-2 my-2'>Sessões Concluidas <GrTask size={18} /></h2>
              <h2 className='text-center p-2 rounded-3xl border-2 border-[#b38000]'>{usuario.sessoesTotais as number || 0} Sessões Concluidas </h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
