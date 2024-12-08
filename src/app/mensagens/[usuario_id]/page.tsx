"use client";
import Conversation from "@/components/chat";
import Header from "@/components/header";
import { useUsuarioStore } from "@/context/usuario";
import { UsuarioI } from "@/utils/types/usuarios";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Mensagens() {
  const { logar } = useUsuarioStore();
  const [usuarioConvesa, setUsuarioConversa] = useState<UsuarioI>();
  const params = useParams();

  const usuarioId = Array.isArray(params.usuario_id) ? params.usuario_id[0] : params.usuario_id;

  useEffect(() => {
    async function fetchData() {
      async function buscaUsuarios(idUsuario: string) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/conta/${idUsuario}`);
        if (response.status === 200) {
          const dados = await response.json();
          logar(dados);
        }
      }

      async function getUsuarioConversa(idUsuario: string) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/conta/${idUsuario}`);
        if (response.status === 200) {
          const dados = await response.json();
          setUsuarioConversa(dados);
        }
      }

      await getUsuarioConversa(usuarioId);

      if (localStorage.getItem("client_key")) {
        const usuarioSalvo = localStorage.getItem("client_key") as string;
        const usuarioValor = usuarioSalvo.replace(/"/g, "");
        await buscaUsuarios(usuarioValor);
      }
    }

    fetchData();
  }, [usuarioId, logar]);

  return (
    <div>
      <header className="mt-32">
        <Header />
      </header>
      <main className="w-full h-[60vh]">
        {usuarioConvesa && <Conversation key={usuarioConvesa.id} data={usuarioConvesa}/>}
      </main>
    </div>
  );
}
