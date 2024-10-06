"use client";
import Header from "@/components/header";

export default function Home() {
    return (
        <div>
            <header className="mt-32">
                <Header />
            </header>
            <main>
                <section className='flex p-10 justify-evenly w-full'>
                    <div className='flex flex-col gap-10 items-center mt-5'>
                        <h1 className='text-center font-bold text-2xl'> Porque escolher a Verbalize?</h1>
                        <p className='max-w-4xl text-base font-sans font-normal md:text-lg lg:text-xl'>   Com a Verbalize, você não só aprende um novo idioma, mas também ensina o seu, trocando experiências e enriquecendo suas habilidades em conversas reais. Aqui estão algumas das funcionalidades e benefícios da nossa plataforma: <br /><br />
                            <span className="text-black font-bold"> Troca Cultural Direta: </span> Conecte-se com falantes nativos e aprenda a língua de uma maneira autêntica, enquanto compartilha o conhecimento do seu próprio idioma. <br /><br />
                            <span className="text-black font-bold"> Ambiente Interativo: </span> Nosso sistema de chat facilita conversas fluentes e naturais, ajudando você a aprimorar suas habilidades de comunicação em uma nova língua. <br /><br />
                            <span className="text-black font-bold"> Aprendizado Bidirecional:</span> Aprenda enquanto ensina. A troca mútua de conhecimentos é uma forma prática e imersiva de dominar novas línguas. <br /><br />
                            <span className="text-black font-bold"> Recursos de Apoio: </span> Oferecemos dicas e sugestões de tópicos para ajudar você a guiar suas conversas e maximizar o aprendizado mútuo.
                            Comunidade Global: Junte-se a uma comunidade diversificada de pessoas interessadas em aprender e compartilhar, tornando o aprendizado de idiomas uma experiência social e colaborativa. <br />
                        </p>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mt-12 ">
                        </div>
                    </div>
                </section> </main> </div>
    )
}