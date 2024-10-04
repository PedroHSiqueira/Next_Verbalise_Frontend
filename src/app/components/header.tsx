import Link from "next/link";

export default function Header() {

    return (
      <nav className="bg-gradient-to-r from-[#8a4c76] via-[#562174] to-[#9c4d83] fixed w-screen z-20 top-0 start-0 ">
        <div className="w-screen flex flex-wrap items-center justify-between px-10 p-4">
          <a href="#" className="flex justify-center items-center flex-col space-x-3 rtl:space-x-reverse">
            <img src="/Logo.png" className="h-14" alt="Flowbite Logo" />
            <span className="p-0 pr-2  elf-center text-2xl font-semibold whitespace-nowrap dark:text-white">Verbalize</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <Link href={"/login"} type="button" className="text-white bg-black hover:bg-[#B38000] focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm px-8 py-2 text-center ">Login</Link>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 gap-12 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white text-xl font-bold bg-blue-700 rounded md:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:text-white" aria-current="page">Porque escolher nós</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 text-xl rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tornar-se um Cliente</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre-nós</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000]  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Registre-se</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  