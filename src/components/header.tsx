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
          <img src="/Logo_preta.png" className="h-12" />
          <span className=" font-jetbrains p-0 pr-2  elf-center text-xl font-semibold whitespace-nowrap text-white">
            Verbalize
          </span>
        </a>
        {usuario.id ? (
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky">
            <ul className="flex items-center justify-center flex-row gap-36  font-medium ">
              <li>
                <Link href="#" className="flex items-center justify-center flex-col py-2 px-3 text-white text-lg rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                <svg className="w-14 h-14 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                </svg>
                  Comunidades
                </Link>
              </li>
              <li>
                <a href="#" className=" flex items-center justify-center flex-col py-2 px-3 text-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                <svg className="w-12 h-14 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                  <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                </svg>
                  Mensagens
                </a>
              </li>
              <li>
                <Link href="#" className="flex items-center mt-2 justify-center flex-col py-2 px-3 text-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <img src={usuario.foto} className=' rounded-full w-14 h-12' />
                  Perfil
                </Link>
              </li>
              <li>
                <span onClick={sairCliente} className="cursor-pointer transition delay-150 duration-300 ease-in-out flex items-center justify-center m-0 text-white bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-9 py-4 text-center ">
                  Sair
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
              <Link href={'/login'} type="button" className="transition delay-150 duration-300 ease-in-out text-white bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-8 py-2 text-center ">
                Login
              </Link>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 gap-36  font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                  <Link href="#" className="block py-2 px-3 text-white text-xl font-bold bg-blue-700 md:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:text-white" aria-current="page">
                    Porque escolher nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3 text-white text-xl font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                    Tornar-se um Cliente
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3 text-white text-xl font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
                    Sobre-nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3 text-white text-xl font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >
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
