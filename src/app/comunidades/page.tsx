'use client';
import Comunidades from '@/components/BannerComunidade';
import Header from '@/components/header';
import { useUsuarioStore } from '@/context/usuario';
import { useEffect } from 'react';

export default function Home() {
  const { logar } = useUsuarioStore();
  useEffect(() => {
    async function buscaUsuarios(idUsuario: string) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/usuarios/conta/${idUsuario}`,
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
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Comunidades />
        </section>
        <section>
          {/* <div className="mb-6">
          <button className="px-4 py-2 bg-yellow-200 text-gray-700 rounded">
            Filtrar
          </button>
        </div> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 p-10 gap-6">
            <div className="border rounded-lg max-w-[506px] max-h-[266px] p-4 shadow bg-[#f3efe5]">
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src="./Bandeiras/Brazil.png"
                  alt="Foto"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">
                    Nome Usuario <span className="text-gray-500">00</span>
                  </h2>
                  <p className="text-sm">Nacionalidade: Indefinido</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus porta, metus quis vehicula venenatis
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2">Fala:</span>
                  <img
                    className="w-8 h-8"
                    src="./Bandeiras/france.png"
                    alt="França"
                  />
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Aprende:</span>
                  <img
                    className="w-8 h-8"
                    src="./Bandeiras/brazil.png"
                    alt="Brasil"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
