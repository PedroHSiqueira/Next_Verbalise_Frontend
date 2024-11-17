"use client";
import Comunidades from "@/components/BannerComunidade";
import ItemUsuario from "@/components/ItemUsuario";
import Header from "@/components/header";
import { useUsuarioStore } from "@/context/usuario";
import { UsuarioI } from "@/utils/types/usuarios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [usuarios, setUsuarios] = useState<UsuarioI[]>([]);
  const { usuario } = useUsuarioStore();
  const router = useRouter();
  useEffect(() => {
    if (!usuario) {
      router.push("/login");
      return;
    }

    if (usuario.idiomasInterresse.length === 0 || !usuario.linguaMaternaId || !usuario.descricao || !usuario.nascimento) {
      router.push("/perfil");
      return;
    }

    async function getUsuarios() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios`);
      if (response.status == 200) {
        const dados = await response.json();
        const filteredDados = dados.filter((usuario: UsuarioI) => usuario.linguaMaternaId && usuario.idiomasInterresse.length > 0);
        setUsuarios(filteredDados);
      }
    }
    getUsuarios();
  }, []);

  let listaUsuarios = usuarios.filter((usuarioItem) => usuarioItem.id !== usuario?.id).map((usuarioItem) => <ItemUsuario key={usuarioItem.id} data={usuarioItem} />);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Comunidades />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-6">{listaUsuarios}</section>
      </main>
    </div>
  );
}
