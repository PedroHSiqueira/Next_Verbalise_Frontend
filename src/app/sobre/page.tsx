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
            <h1 className="text-center font-bold text-2xl"> Quem somos?</h1>
            <p className="max-w-4xl text-base font-sans font-normal md:text-lg lg:text-xl">
              {' '}
              A Verbalize é uma plataforma de aprendizado de idiomas inovadora,
              projetada para conectar falantes nativos de diferentes línguas com
              pessoas interessadas em aprender. Nossa abordagem é simples: você
              ensina sua língua enquanto aprende outra, em um ambiente
              interativo e colaborativo. Ao invés de aulas tradicionais, criamos
              um espaço para conversas autênticas, ajudando você a aprender de
              maneira prática e imersiva. Nossa Missão Facilitar o aprendizado
              de idiomas por meio de conexões genuínas entre pessoas que desejam
              ensinar sua própria língua enquanto aprendem outra. Acreditamos
              que a melhor maneira de aprender um idioma é por meio de conversas
              reais, com falantes nativos que possam compartilhar sua cultura e
              seu conhecimento de forma natural e eficaz. <br />{' '}
              <span className="text-black font-bold"> O Que Fazemos: </span>
              <br /> <br />
              <span className="text-black font-bold">
                {' '}
                Conectamos Pessoas:
              </span>{' '}
              Permita que você encontre parceiros de troca de idiomas que
              compartilham seus interesses, criando uma comunidade global de
              aprendizado. <br /> <br />
              <span className="text-black font-bold">
                {' '}
                Promovemos Conversas Reais:{' '}
              </span>{' '}
              A plataforma oferece um espaço para bate-papo onde os usuários
              podem conversar em tempo real, trocando conhecimentos e aprendendo
              uns com os outros. <br /> <br />
              <span className="text-black font-bold">
                {' '}
                Apoio ao Progresso:{' '}
              </span>
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
