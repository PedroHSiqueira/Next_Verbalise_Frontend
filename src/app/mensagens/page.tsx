"use client";
import Header from "@/components/header";
import { useUsuarioStore } from "@/context/usuario";
import React from "react";
import { useEffect } from "react";

export default function Mensagens() {
  const { logar } = useUsuarioStore();
  useEffect(() => {
    async function buscaUsuarios(idUsuario: string) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/conta/${idUsuario}`);
      if (response.status === 200) {
        const dados = await response.json();
        logar(dados);
      }
    }
    if (localStorage.getItem("client_key")) {
      const usuarioSalvo = localStorage.getItem("client_key") as string;
      const usuarioValor = usuarioSalvo.replace(/"/g, "");
      buscaUsuarios(usuarioValor);
    }
  }, []);
  return (
    <div>
      <header className="mt-32">
        <Header />
      </header>
      <main className="w-full h-[60vh]">
        <h1 className="flex h-full items-center justify-center text-3xl font-bold">Em Construção ⚒️</h1>
      </main>
    </div>
  );
}
