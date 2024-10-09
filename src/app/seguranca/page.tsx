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
                        <h1 className="text-center font-bold text-2xl"> Dicas de Segurança – Verbalize
                        </h1>
                        <p className="max-w-4xl text-base font-sans font-normal md:text-lg ">
                            {' '} <span className="text-black font-bold">
                                1. Proteja Suas Informações Pessoais </span><br />
                            Evite compartilhar dados sensíveis, como endereço, número de telefone ou informações financeiras, com outros usuários.
                            Mantenha suas credenciais de login seguras e não as compartilhe com ninguém. <br />
                            {' '} <span className="text-black font-bold">
                                2. Desconfie de Comportamentos Suspeitos </span><br />
                            Se algum usuário parecer insistente em obter suas informações pessoais ou financeiras, encerre a conversa imediatamente.
                            Denuncie qualquer comportamento inadequado ou suspeito diretamente na plataforma para que nossa equipe possa agir. <br />
                            {' '} <span className="text-black font-bold">
                                3. Use Senhas Fortes <br /></span>
                            Crie senhas seguras e exclusivas para sua conta na Verbalize. Utilize uma combinação de letras, números e símbolos.
                            Troque sua senha regularmente para garantir mais segurança. <br />
                            {' '} <span className="text-black font-bold">
                                4. Cuidado com Links e Arquivos <br /> </span>
                            Não clique em links desconhecidos ou suspeitos enviados por outros usuários.
                            Seja cauteloso ao baixar arquivos. A Verbalize recomenda a troca de materiais de estudo em formatos seguros e conhecidos. <br />
                            {' '} <span className="text-black font-bold">
                                5. Limite o Compartilhamento de Redes Sociais</span>
                            Evite adicionar usuários da Verbalize em suas redes sociais pessoais até que tenha confiança no relacionamento.
                            Lembre-se de que sua privacidade é importante, e as redes sociais podem revelar mais informações sobre você do que o necessário. <br />
                            {' '} <span className="text-black font-bold">
                                6. Denuncie Abusos <br /></span>
                            Utilize a função de denúncia na plataforma para relatar comportamentos inapropriados, como assédio, bullying ou qualquer outro abuso.
                            Todas as denúncias serão analisadas com confidencialidade para garantir a segurança de todos. <br />
                            {' '} <span className="text-black font-bold">
                                7. Agende Sessões com Cautela <br /> </span>
                            Quando agendar sessões de troca de idiomas, escolha horários que se encaixem com sua rotina de forma segura.
                            Desconfie de solicitações de encontros fora da plataforma sem motivo claro. <br />
                            {' '} <span className="text-black font-bold">
                                8. Ative Verificação em Duas Etapas <br /></span>
                            Sempre que possível, habilite a autenticação de dois fatores (2FA) para adicionar uma camada extra de segurança à sua conta. <br />
                            {' '} <span className="text-black font-bold">
                                9. Fique Atento a Phishing <br /> </span>
                            A Verbalize nunca solicitará sua senha ou informações pessoais por e-mail. Desconfie de qualquer comunicação que solicite esses dados. <br />
                            {' '} <span className="text-black font-bold">
                                10. Relatório de Erros de Segurança </span> <br />
                            Se identificar uma vulnerabilidade ou problema de segurança, reporte imediatamente à nossa equipe de suporte para que possamos corrigir o problema rapidamente.
                        </p>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mt-12 "></div>
                    </div>
                </section>{' '}
            </main>{' '}
        </div>
    );
}
