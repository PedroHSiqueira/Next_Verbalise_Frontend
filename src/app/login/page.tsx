export default function login() {
    return (
        <div className="flex justify-center items-center flex-col gap-5 bg-[#0B0F18] w-screen h-screen">
                <figure>
                    <img src="./logo.png" alt="Logo" />
                </figure>
                <form className="w-2/6">
                    <div className="mb-5 w">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Sua senha</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-300">Lembre-me</label>
                    </div>
                    <button type="submit" className=" text-white bg-[#B38000] font-bold hover:bg-[#947321] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full px-5 py-2.5 text-center">Entrar</button>
                    <div className="flex justify-between pt-5">
                        <a href="#">Registrar-se</a>
                        <a href="#" >Esqueceu sua senha?</a>
                    </div>
                </form>
            </div>
    )
}