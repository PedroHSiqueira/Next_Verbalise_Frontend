import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
export default function Banner() {
  return (
    <div className="bg-[#625173] p-28 pt-36 pb-20 font-poppins flex justify-around flex-col lg:flex-row items-center ">
      <img src="/LandingPage/dell.png" className="hidden w-2/5 lg:block" />
      <section className="p-10 flex flex-col items-center ">
        <h1 className="text-center font-bold text-3xl pb-5 text-white">
          Intercambio Linguístico
        </h1>
        <h1 className="text-center font-semibold text-1xl pb-5 text-white">
          Aprenda um idioma conversando com falantes nativos e estudantes do
          mundo todo!
        </h1>
        <br />
        <div className="flex justify-evenly gap-2 lg:justify-center">
          <div className="flex flex-col w-1/2 items-center justify-center md:w-[14%] lg:w-[8%] lg:gap-2 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out"
              src="./Bandeiras/brazil.png"
            />
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center md:w-[14%] lg:w-[8%] lg:gap-2 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out"
              src="./Bandeiras/france.png"
            />
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center md:w-[14%] lg:w-[8%] lg:gap-2 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out"
              src="./Bandeiras/tagalog.png"
            />
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center md:w-[14%] lg:w-[8%] lg:gap-2 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out"
              src="./Bandeiras/japan.png"
            />
          </div>

          <div className="flex flex-col w-1/2 max-w-16 items-center justify-center md:w-[14%] lg:w-[8%] lg:gap-2 ">
            <FaPlus className="text-white text-3xl" />
          </div>
        </div>
        <Link
          href={'/#planos'}
          type="button"
          className="ease-in-out mt-10 px-12 py-4 transition delay-150 duration-300 text-white font-bold bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none rounded-3xl text-base text-center "
        >
          Começar
        </Link>
      </section>
    </div>
  );
}
