'use client';
import Header from '../components/header';
import Banner from '@/components/banner';
import Image from 'next/image';
import Subscriptions from '@/components/subscriptions';
import { useEffect } from 'react';
import { useUsuarioStore } from '@/context/usuario';


export default function Home() {
  const { logar } = useUsuarioStore();
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
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Banner />
        </section>
      <section className='flex p-10 justify-evenly w-full  '>
        <div className='flex flex-col gap-10 items-center lg:pl-16 lg:pt-20 lg:pr-10'>
          <h1 className='text-center font-bold text-3xl'> Explore Novos Horizontes <br/> Linguísticos</h1>
          <p className='max-w-96 text-xl font-sans font-normal xl:text-2xl'>Bem-vindo à Verbalize, uma plataforma única onde falantes de diferentes línguas se conectam para ensinar e aprender uns com os outros. </p>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
          </div>
        </div>
        <Image src="/landingPage/computador.png" alt='Computador' width={672} height={632} className='hidden w-2/4 rounded-3xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] lg:block xl:w-2/5' />
      </section>
      <section className='p-10'>
        <h1 className='text-center font-bold text-3xl pb-5'>Alguns Idiomas Que Você Pode <span className='text-red-500 font-bold '>Aprender</span> </h1>
        <br />
        <div className='flex justify-around py-7'>
          <div className='grid grid-cols-2 gap-10 lg:grid-cols-3 '>
            <div className='bg-[#f1dfdf] flex flex-col items-center justify-center max-w-36 rounded-3xl py-2 px-4 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <Image alt='bandeiras'width={95} height={55} className='w-28 px-6 pb-2' src="/Bandeiras/china.png" />
              <p className='text-center font-black text-xl'>Mandarim</p>
            </div>
            <div className='bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <Image alt='bandeiras'width={95} height={55} className='w-28 px-6 pb-2' src="/Bandeiras/tagalog.png" />
              <p className='text-center font-black text-xl'>Tagalog</p>
            </div>
            <div className='bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <Image alt='bandeiras'width={95} height={55} className='w-28 px-6 pb-2' src="/Bandeiras/arabic.png" />
              <p className='text-center font-black text-xl'>Árabe</p>
            </div>
            <div className='bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <Image alt='bandeiras'width={95} height={55} className='w-28 px-6 pb-2' src="/Bandeiras/germany.png" />
              <p className='text-center font-black text-xl'>Alemão</p>
            </div>
            <div className='bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <Image alt='bandeiras'width={95} height={55} className='w-28 px-6 pb-2' src="/Bandeiras/thailand.png" />
              <p className='text-center font-black text-xl'>Tailandês</p>
            </div>
            <div className='bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-3 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out'>
              <Image alt='bandeiras'width={95} height={55} className='w-28 px-6 pb-2' src="/Bandeiras/japan.png" />
              <p className='text-center font-black text-xl'>Japonês</p>
            </div>
          </div>
          <Image className='hidden w-2/5 max-h-96 rounded-[2.1rem] border-8 border-[#716C6D] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] lg:block lg:w-2/6 lg:mr-20' src="/landingPage/globo.jpg" alt='Paises' width={380} height={280}/>
        </div>
      </section>
      <section className='p-10 mb-52'>
      <h1 className='text-center text-3xl font-bold mb-10'>Pronto para Começar? <span className='text-red-500 font-bold '>Inscreva-se Hoje!</span> </h1>
      <div className='flex items-center justify-around'>
      <Image alt='criança' width={377} height={226} className='hidden w-2/6 max-h-96 rounded-[2.1rem] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] lg:block' src="/landingPage/menina.png" />
        <div className='flex items-center'>
          <p className='max-w-lg text-xl font-sans font-normal xl:mr-28 xl:text-2xl xl:max-w-xl'>Descubra o poder das conversas reais e faça parte de uma comunidade global de aprendizado. Com a Verbalize, você pode aprender um novo idioma de maneira autêntica, enquanto ensina sua própria língua. É simples, interativo e eficaz.
          </p>
        </div>
      </div>
      </section>
      <Subscriptions />
      </main>
    </div>
  );
}
