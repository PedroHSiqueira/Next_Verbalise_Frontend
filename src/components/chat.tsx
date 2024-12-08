"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import Message from "./Message";
import { pusherClient } from "@/lib/pusher";
import { sendMessage } from "@/actions/message.action";
import { UsuarioI } from "@/utils/types/usuarios";

const Conversation = ({ data }: { data: UsuarioI }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const [usuarioAtual, setUsuarioAtual] = useState<UsuarioI>();

  const onSendMessageHandler = async () => {
    await sendMessage(message);
  };

  const uniqueMessages = messages.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  useEffect(() => {
    async function getUsuarioConversa(idUsuario: string) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/conta/${idUsuario}`);
      if (response.status === 200) {
        const dados = await response.json();
        setUsuarioAtual(dados);
      }
    }
    getUsuarioConversa(data.id);

    pusherClient.subscribe("chat-app");

    pusherClient.bind("upcoming-message", (data: { message: string }) => {
      setMessages((prev) => [...prev, data.message]);
      setMessage("");
    });

    return () => pusherClient.unsubscribe("chat-app");
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="size-11/12 bg-[#FFFBF1] rounded-3xl shadow-lg flex flex-col justify-between">
        <h1 className="bg-white flex items-center gap-5 font-medium p-2 border"><img className="w-16 h-16 rounded-full" src={usuarioAtual?.foto} alt="Foto" />{usuarioAtual?.nome}</h1>
        <div className="w-full h-full overflow-y-auto p-4 flex flex-col gap-y-4">
          {!uniqueMessages.length ? (
            <div className="text-center text-gray-500 mt-3 font-bold">Sem mensages Anteriores</div>
          ) : (
            uniqueMessages.map((message, index) => (
              <Message key={index} message={message} />
            ))
          )}
        </div>

        <div className="flex items-center gap-x-2 bg-[#E7E3E3] border h-[60px] ">
          <Input
            placeholder="Escreva aqui"
            value={message}
            className="w-full flex-1 bg-transparent h-full  border-none rounded-none"
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSendMessageHandler()}
          />
          <Button
            onClick={onSendMessageHandler}
            className="rounded-none h-full "
          >
            <Send size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
