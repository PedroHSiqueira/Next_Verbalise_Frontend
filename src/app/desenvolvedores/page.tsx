'use client';
import Header from '@/components/header';
import Link from 'next/link';
import { useUsuarioStore } from '@/context/usuario';
import { useEffect } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Home() {
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
  },[]);
  return (
    <div>
      <header className="mt-52">
        <Header />
      </header>
      <main className="mb-32">
        <div className={`bg-[#625173] grid-10 rounded-3xl pb-20 ${poppins.className} shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:mx-20 xl:mx-25 `}>
          <h1 className="text-center text-white text-4xl font-bold pt-5">
            Desenvolvedores
          </h1>
          <div className="grid grid-cols-1 text-start text-white max-w rounded-3xl m-10 gap-14 md:grid-cols-2 xl:grid-cols-3 xl:mx-20 ">
            <div className="bg-zinc-900 p-10 rounded-3xl flex flex-col items-center justify-center gap-5 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <h2 className="text-xl font-bold text-center">Pedro Lima</h2>
              <img
                src="./Desenvolvedores/2.jpg"
                className=" flex flex-col w-32  rounded-3xl lg:w-40"
              />
              <Link href="https://www.linkedin.com/in/upedrolima/" target='_blank' className="text-xl font-bold text-center  ">
                Lider Front-End
              </Link>
            </div>
            <div className="bg-zinc-900 p-10 rounded-3xl flex flex-col items-center gap-5 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <h2 className="text-xl font-bold text-center">Vitor Macedo</h2>
              <img
                src="./Desenvolvedores/1.jpg"
                className=" flex items-center w-32 rounded-3xl lg:w-40"
              />
              <Link href="https://www.linkedin.com/in/vitormacedoo/" target='_blank' className="text-xl font-bold text-center">P.O</Link>
            </div>
            <div className="bg-zinc-900 p-10 rounded-3xl flex flex-col items-center gap-5 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <h2 className="text-xl font-bold text-center">Pedro Siqueira</h2>
              <img
                src="./Desenvolvedores/5.jpg"
                className=" flex items-center w-32 rounded-3xl lg:w-40"
              />
              <Link href="https://www.linkedin.com/in/phasiqueira/" target='_blank' className="text-xl font-bold text-center  ">
                Lider Back-end
              </Link>
            </div>

            <div className="bg-zinc-900 p-10 rounded-3xl flex flex-col items-center gap-5 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <h2 className="text-xl font-bold text-center">Vicenzo Goulart</h2>
              <img
                src="./Desenvolvedores/3.jpg"
                className=" flex items-center w-32 rounded-3xl lg:w-40"
              />
              <Link href="https://www.linkedin.com/in/@vicenzo-goulart/" target='_blank' className="text-xl font-bold text-center  ">Back-End</Link>
            </div>

            <div className="bg-zinc-900 p-10 pl-10 rounded-3xl flex flex-col items-center gap-5 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <h2 className="text-xl font-bold text-center">Marcelo Lemes</h2>
              <img
                src="./Desenvolvedores/4.jpg"
                className=" flex items-center w-32 rounded-3xl lg:w-40"
              />
              <Link href="https://www.linkedin.com/in/marcelonuneslemes/" target='_blank' className="text-xl font-bold text-center  ">Front-End</Link>
            </div>
            <div className="bg-zinc-900 p-10 rounded-3xl flex flex-col items-center gap-5 hover:scale-105 transition delay-150 duration-150 ease-in-out shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <h2 className="text-xl font-bold text-center">Bruna Ribeiro</h2>
              <img
                src="./Desenvolvedores/6.jpg"
                className=" flex items-center w-32 rounded-3xl lg:w-40"
              />
              <Link href="https://www.linkedin.com/in/brunagoncalvesribeiro/" target='_blank' className="text-xl font-bold text-center  ">
                Professora do Curso
              </Link>
            </div>
          </div>
        </div>{' '}
      </main>{' '}
    </div>
  );
}
