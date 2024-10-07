import Link from "next/link";

export default function Footer() {
    return (


        <footer className="bg-zinc-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 ">
                        <a href="#" className="items-center flex flex-col">
                            <img src="./logos/logo_branca.png" className="h-16 " alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Verbalize</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Recursos</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href={"/desenvolvedores"} className="hover:underline">Desenvolvedores</Link>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Termos de Uso</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contatos</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">Cadastre-se</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Segurança</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacidade</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline"> Planos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Verbalize™</a>. Todos os termos reservados.
                    </span>
                </div>
            </div>
        </footer>

    )
}


