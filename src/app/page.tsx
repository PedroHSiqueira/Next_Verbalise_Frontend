"use client"
import Image from 'next/image';
import Header from '../components/header';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUsuarioStore } from '@/context/usuario';

export default function Home() {
  // {Não remover}
  // const {logar} = useUsuarioStore();
  // useEffect(() => {
  //   async function buscaUsuarios(idUsuario: string) {
  //     console.log(idUsuario);
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/${idUsuario}`);
  //     if (response.status === 200) {
  //       const dados = await response.json();
  //       logar(dados);
  //     }
  //   }
  //   if (localStorage.getItem('client_key')){
  //     const usuarioSalvo = localStorage.getItem('client_key') as string;
  //     console.log(usuarioSalvo);
  //     buscaUsuarios(usuarioSalvo);
  //   }
  // });
  return (
    <div>
      <header className="mt-32">
        <Header />
      </header>
    </div>
  );
}
