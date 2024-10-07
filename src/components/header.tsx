'use client';
import Link from 'next/link';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { useUsuarioStore } from '@/context/usuario';
import { useRouter } from 'next/navigation';
import { HiAnnotation } from 'react-icons/hi';
import { HiUserGroup } from 'react-icons/hi';
import { HiUserCircle } from 'react-icons/hi';
import { HiGlobeAmericas } from 'react-icons/hi2';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const { usuario, deslogar } = useUsuarioStore();
  const router = useRouter();
  function sairCliente() {
    deslogar();
    if (localStorage.getItem('client_key')) {
      localStorage.removeItem('client_key');
    }
    router.push('/');
    window.location.reload();
  }

  return (
    <nav className="font-sans bg-gradient-to-r bg-[#625173] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] fixed w-screen z-20 top-0">
      <div className="w-screen flex items-center justify-between px-2 p-4 lg:px-6 xl:px-10">
        <a
          href="/"
          className="flex justify-center items-center flex-col space-x-3 rtl:space-x-reverse"
        >
          <img src="/logos/Logo_preta.png" className="h-12" />
          <span className=" font-jetbrains p-0 pr-2  elf-center text-xl font-semibold whitespace-nowrap text-white">
            Verbalize
          </span>
        </a>
        {usuario.id ? (
          <div
            className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex items-center justify-center flex-row gap-36  font-medium ">
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-center flex-col font-bold py-2 px-3 text-white text-lg rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <HiUserGroup size={38} />
                  Comunidades
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center justify-center flex-col font-bold py-2 px-3 text-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <HiAnnotation size={38} />
                  Mensagens
                </a>
              </li>
              <li>
                <Link
                  href="/perfil"
                  className="flex items-center mt-2 justify-center flex-col font-bold py-2 px-3 text-white text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <HiUserCircle size={38} />
                  Perfil
                </Link>
              </li>
              <li>
                <span
                  onClick={sairCliente}
                  className="cursor-pointer transition delay-150 duration-300 ease-in-out shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex items-center justify-center m-0 text-white bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-9 py-4 text-center "
                >
                  Sair
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div
              className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex justify-around p-4 px-6 mt-0 gap-36 font-medium">
                <li>
                  <Link
                    href="/informacoes"
                    className="hidden py-2 px-3 text-white text-xs font-bold bg-blue-700 md:bg-transparent md:hover:text-[#B38000]  md:p-0 xl:block lg:text-sm xl:text-base 2xl:text-lg"
                    aria-current="page"
                  >
                    Porque escolher nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#planos"
                    className="block py-2 px-3 text-white text-xs font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000] lg:text-sm xl:text-base 2xl:text-lg"
                  >
                    Tornar-se um Cliente
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    className="block py-2 px-3 text-white text-xs font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000] lg:text-sm xl:text-base 2xl:text-lg"
                  >
                    Sobre-nós
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center mr-5 md:order-2 space-x-4">
              <Link
                href={'/registro'}
                className="transition delay-150 duration-300 ease-in-out text-white bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-3 py-2 text-center "
              >
                Registro
              </Link>
              <Link
                href={'/login'}
                type="button"
                className="transition delay-150 duration-300 ease-in-out text-white bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-3 py-2 text-center "
              >
                Login
              </Link>
              {/* <DropdownMenu> sem funcionar ainda, Só para Fins de Estética */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <HiGlobeAmericas size={38} className="text-white" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Idiomas</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-2">
                    <span className="fi fi-br" /> Português
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <span className="fi fi-us" /> Inglês
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <span className="fi fi-es" />
                    Espanhol
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
