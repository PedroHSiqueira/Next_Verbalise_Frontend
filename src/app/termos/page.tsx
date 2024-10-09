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
                        <h1 className="text-center font-bold text-2xl"> Termos de Uso – Verbalize
                        </h1>
                        <p className="max-w-4xl text-base font-sans font-normal md:text-lg ">
                            {' '} <span className="text-black font-bold">

                                1. Aceitação dos Termos:</span> <br />
                            Ao se registrar na Verbalize e utilizar nossos serviços, você concorda com estes Termos de Uso. Caso não concorde com estes termos, por favor, não utilize a plataforma. <br />
                            {' '} <span className="text-black font-bold"> 2. Registro e Conta de Usuário</span> {' '}<br />
                            Para utilizar a Verbalize, é necessário criar uma conta fornecendo informações válidas. Você é responsável por manter a confidencialidade de suas credenciais e por todas as atividades que ocorram em sua conta. <br />
                            {' '} <span className="text-black font-bold">
                                3. Uso da Plataforma:</span><br />
                            A Verbalize é uma plataforma de troca de idiomas. O usuário se compromete a utilizar o serviço de maneira ética e respeitosa, interagindo com outros usuários conforme as diretrizes de conduta estabelecidas. <br />
                            {' '} <span className="text-black font-bold">
                                4. Conduta do Usuário </span><br />
                            Você concorda em não:

                            Utilizar a plataforma para atividades ilícitas, abusivas ou ofensivas.
                            Publicar conteúdo impróprio, como material violento, sexual, ou que promova discriminação.
                            Compartilhar informações pessoais de outros usuários sem consentimento. <br />
                            {' '} <span className="text-black font-bold">
                                5. Planos de Assinatura </span> <br />
                            A Verbalize oferece diferentes planos de assinatura. Os detalhes e benefícios de cada plano estão disponíveis na página de preços. Ao aderir a um plano pago, o usuário concorda em pagar as taxas conforme descrito. <br />
                            {' '} <span className="text-black font-bold">
                            6. Pagamentos e Cancelamentos</span><br />
                            Os pagamentos são recorrentes e serão cobrados automaticamente até que o usuário cancele a assinatura. Cancelamentos podem ser feitos a qualquer momento, mas não há reembolso para o mês já pago. <br />
                            {' '} <span className="text-black font-bold">
                            7. Alterações nos Termos </span><br />
                            A Verbalize pode alterar estes Termos de Uso a qualquer momento. Mudanças significativas serão comunicadas aos usuários. O uso contínuo da plataforma após as alterações implica aceitação dos novos termos. <br />
                            {' '} <span className="text-black font-bold">
                            8. Limitação de Responsabilidade</span><br />
                            A Verbalize não se responsabiliza por interações entre usuários fora da plataforma ou por eventuais danos diretos ou indiretos decorrentes do uso dos nossos serviços. <br />
                            {' '} <span className="text-black font-bold">
                            9. Privacidade </span><br />
                            Ao utilizar a Verbalize, você concorda com nossa Política de Privacidade, que descreve como coletamos e usamos suas informações. <br />
                            {' '} <span className="text-black font-bold">
                            10. Encerramento de Conta </span><br />
                            A Verbalize reserva-se o direito de encerrar contas que violem estes Termos de Uso, sem necessidade de aviso prévio. <br />
                            {' '} <span className="text-black font-bold">
                            11. Disposições Finais </span> <br />
                            Estes Termos de Uso constituem o acordo completo entre o usuário e a Verbalize em relação ao uso da plataforma. Caso alguma cláusula seja considerada inválida, as demais continuarão em pleno vigor.



                            Fornecemos ferramentas e dicas para ajudar você a conduzir suas
                            conversas, além de fornecer recursos que incentivam a fluência.
                            Nossa Visão Queremos ser o ponto de encontro global para pessoas
                            que desejam aprender novas línguas enquanto compartilham sua
                            própria, promovendo o intercâmbio cultural e linguístico de
                            maneira direta e significativa.
                        </p>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mt-12 "></div>
                    </div>
                </section>{' '}
            </main>{' '}
        </div>
    );
}
