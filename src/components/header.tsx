'use client';
import Link from 'next/link';
import { useUsuarioStore } from '@/context/usuario';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { usuario, deslogar } = useUsuarioStore();
  const router = useRouter();
  function sairCliente() {
    deslogar();
    if (localStorage.getItem('client_key')) {
      localStorage.removeItem('client_key');
    }
    router.push('/login');
  }

  return (
    <nav className="font-sans bg-gradient-to-r bg-[#625173] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] fixed w-screen z-20 top-0">
      <div className="w-screen flex flex-wrap items-center justify-between px-10 p-4">
        <a href="#" className="flex justify-center items-center flex-col space-x-3 rtl:space-x-reverse">
          <img src="/Logo_preta.png" className="h-14" alt="Flowbite Logo" />
          <span className=" font-jetbrains p-0 pr-2  elf-center text-2xl font-semibold whitespace-nowrap text-white">
            Verbalize
          </span>
        </a>
        {usuario.id ? (
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 gap-36  font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <Link href="#" className="flex items-center justify-center flex-col  py-2 px-3 text-white text-xl rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                <img src="./navbar/comunidade.png" className='w-16 h-14' />
                  Comunidades
                </Link>
              </li>
              <li>
                <a href="#" className=" flex items-center justify-center flex-col py-2 px-3 text-white text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                <img src="./navbar/mensagens.png" className='w-16 h-14' />
                  Mensagens
                </a>
              </li>
              <li>
                <Link href="#" className="flex items-center justify-center flex-col py-2 px-3 text-white text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <img src={usuario.foto} className=' rounded-full w-16 h-14' />
                  Perfil
                </Link>
              </li>
              <li>
                <span onClick={sairCliente} className="cursor-pointer flex items-center justify-center text-white text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Sair
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
              <Link href={'/login'} type="button" className="text-white bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-8 py-2 text-center ">
                Login
              </Link>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 gap-36  font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                  <Link href="#" className="block py-2 px-3 text-white text-xl font-bold bg-blue-700 rounded md:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:text-white" aria-current="page">
                    Porque escolher nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3 text-white text-xl rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                    Tornar-se um Cliente
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3 text-white text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                    Sobre-nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3 text-white text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                    Registre-se
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
