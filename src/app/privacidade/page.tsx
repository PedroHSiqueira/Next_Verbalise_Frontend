'use client';
import Header from '@/components/header';

export default function Home() {
    return (
        <div>
            <header className="mt-32">
                <Header />
            </header>
            <main>
                <section className="flex p-10 justify-evenly w-full">
                    <div className="flex flex-col gap-10 items-center mt-5">
                        <h1 className="text-center font-bold text-2xl"> Políticas de Privacidade – Verbalize
                        </h1>
                        <p className="max-w-4xl text-base font-sans font-normal md:text-lg ">
                            {' '} 
                                A Verbalize valoriza a privacidade de seus usuários e se compromete a proteger todas as informações pessoais compartilhadas em nossa plataforma. Nós coletamos apenas os dados necessários para oferecer uma experiência de uso otimizada, como seu nome, e-mail, idiomas que deseja aprender e ensinar, além de suas preferências dentro da plataforma. Essas informações são usadas para personalizar sua experiência, recomendar parceiros de idioma e melhorar nossos serviços. <br />
                                Seus dados nunca serão vendidos, alugados ou compartilhados com terceiros sem seu consentimento explícito, a menos que seja exigido por lei. Nós armazenamos suas informações de forma segura, utilizando criptografia e outras práticas de proteção para garantir que estejam protegidas contra acessos não autorizados. <br /> <br />
                                Em relação ao histórico de conversas, ele é mantido apenas para facilitar consultas futuras e melhorar o fluxo das suas interações. Você pode, a qualquer momento, solicitar a exclusão de suas conversas ou outras informações pessoais armazenadas pela Verbalize. Vale lembrar que, ao enviar materiais ou mensagens a outros usuários, esses também podem ter acesso ao conteúdo de forma independente. <br /> <br />
                                Nós respeitamos o direito dos nossos usuários à privacidade, e você pode revisar e alterar suas informações pessoais diretamente em seu perfil. A qualquer momento, se desejar, você pode optar por encerrar sua conta, e todos os seus dados serão excluídos permanentemente de nossos servidores. <br /> <br />
                                É importante que você saiba que usamos cookies e outras tecnologias de rastreamento para entender melhor como os usuários interagem com a plataforma. Esses dados nos ajudam a otimizar a experiência de navegação, garantindo que o site funcione da melhor maneira possível. No entanto, você pode ajustar as configurações de cookies em seu navegador, caso prefira limitar esse rastreamento. <br /> <br />
                                Se houver quaisquer alterações nas nossas políticas de privacidade, notificaremos você com antecedência para que tenha ciência das mudanças e possa revisar as novas práticas. A Verbalize está sempre comprometida em garantir a transparência no uso de suas informações e em proteger a confidencialidade de seus dados. <br /> <br />
                                Se tiver qualquer dúvida ou preocupação sobre como suas informações estão sendo tratadas, nossa equipe de suporte está à disposição para esclarecimentos. Seu direito à privacidade é uma das nossas maiores prioridades.
                        </p>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mt-12 "></div>
                    </div>
                </section>{' '}
            </main>{' '}
        </div>
    );
}
