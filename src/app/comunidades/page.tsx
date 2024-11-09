'use client';
import Comunidades from '@/components/BannerComunidade';
import ItemUsuario from '@/components/cardUsuario';
import Header from '@/components/header';
import { useUsuarioStore } from '@/context/usuario';
import { UsuarioI } from '@/utils/types/usuarios';
import { useEffect, useState } from 'react';

export default function Home() {

  const [usuarios, setUsuarios] = useState<UsuarioI[]>([]);
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

    async function getUsuarios() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios`);
      if (response.status == 200) {
        const dados = await response.json();
        console.log(dados);

        setUsuarios(dados);
      }
    }
    getUsuarios();
  }, []);
  let listaUsuarios = usuarios.map((usuario) => <ItemUsuario key={usuario.id} data={usuario} />);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Comunidades />
        </section>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-6'>
        {listaUsuarios}
        </section>
      </main>
    </div>
  );
}
