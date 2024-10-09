import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Banner() {
  return (
    <div className={`bg-[#693f94] p-28 pt-32 pb-20 ${poppins.className} flex justify-around flex-col shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] lg:flex-row items-center `}>
      <Image alt="dell" width={672} height={630} src="/LandingPage/dell.png" className="hidden w-2/5 lg:block" />
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
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full"
              src="./Bandeiras/arabic.png"
            />
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center md:w-[14%] lg:w-[8%] lg:gap-2 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full"
              src="./Bandeiras/france.png"
            />
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center md:w-[14%] lg:w-[8%] lg:gap-2 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full"
              src="./Bandeiras/tagalog.png"
            />
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center md:w-[14%] lg:w-[8%] lg:gap-2 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full"
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
          className="ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full mt-10 px-12 py-4 transition delay-150 duration-300 text-white font-bold bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none text-base text-center "
        >
          Começar
        </Link>
      </section>
    </div>
  );
}
