'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useUsuarioStore } from '@/context/usuario';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@radix-ui/react-toast';
import { Checkbox } from "@/components/ui/checkbox"

type Inputs = {
  email: string;
  senha: string;
  continuarConectado: boolean;
};

export default function login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { usuario, logar } = useUsuarioStore();
  const { toast } = useToast();
  const router = useRouter();

  async function verificaLogin(data: Inputs) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/usuarios/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email, senha: data.senha }),
      },
    );
    console.log(response);
    if (response.status === 200) {
      const dados = await response.json();
      logar(dados);

      if (data.continuarConectado) {
        localStorage.setItem('client_key', JSON.stringify(dados.id));
      } else {
        if (localStorage.getItem('client_key')) {
          localStorage.removeItem('client_key');
        }
      }

      router.push('/');

      toast({
        variant: 'success',
        title: 'Login efetuado com sucesso',
        description: `Seja bem-vindo a Verbalize!`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Algo deu errado',
        description: 'Verifique suas credenciais e tente novamente',
        action: <ToastAction altText="Repetir">Repetir</ToastAction>,
      });
    }
  }

  return (
    <div className="flex justify-center items-center flex-col gap-5 bg-[#0B0F18] w-screen h-screen">
      <Link href={'/'} className="flex flex-col items-center justify-center">
        <img src="./logo_branca.png" alt="Logo" />
        <span className="p-0 pr-2 text-[#B38000]  elf-center text-2xl font-semibold whitespace-nowrap">
          Verbalize
        </span>
      </Link>
      <form className="w-2/6" onSubmit={handleSubmit(verificaLogin)}>
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-sm font-medium text-white"
        >
          Seu Email:
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="email"
            className=" border text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
            {...register('email')}
          />
        </div>
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-sm font-medium text-white"
        >
          Sua Senha:
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-6 h-6 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
              />
            </svg>
          </div>
          <input
            type="password"
            className=" border text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
            {...register('senha')}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <Checkbox
              id="remember"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-3 focus:ring-blue-300 "
              {...register('continuarConectado')}
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-300"
          >
            Lembrar-se De Mim
          </label>
        </div>
        <button
          type="submit"
          className=" text-black bg-[#B38000] font-bold hover:bg-[#947321] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Entrar
        </button>
        <div className="flex justify-between pt-5">
          <a href="/" className="text-white font-semibold">
            Registrar-se
          </a>
          <a href="/" className="text-white font-semibold">
            Esqueceu sua senha?
          </a>
        </div>
      </form>
    </div>
  );
}
