import Link from 'next/link';
import { LEMA, WHATSAPP } from '@/content/empresa';
import { pilar } from '@/content/pilares';

/**
 * Herói da home: uma promessa só, de saúde empresarial para PME.
 *
 * Foi um carrossel de três mensagens até o diagnóstico de 30/10/2026: quem via
 * só a primeira nunca via as outras. Consórcio e seguro empresarial entram como
 * entradas fixas na home, logo abaixo da faixa de números. Não voltar a girar.
 */
export default function Hero() {
  return (
    <section className="hero hero--unico" aria-label="Destaque da MX">
      <article className="hero__slide hero__slide--faixa">
        <div
          className="hero__arte"
          style={{ backgroundImage: 'var(--f-ph-vida-em-grupo)', backgroundPosition: '62% center' }}
          aria-hidden="true"
        />
        <div className="hero__moldura" aria-hidden="true" />
        <div className="hero__conteudo">
          <div className="env">
            <div className="hero__caixa">
              <span className="hero__olho">{LEMA}</span>
              <h1>O plano de saúde da sua empresa, comparado antes de assinar e revisto todo ano</h1>
              <p>
                Para pequenas e médias empresas de Itapira, Águas de Lindóia e região. A MX compara
                operadoras, rede credenciada e reajuste, e volta a conversar com você antes de cada
                renovação.
              </p>
              <div className="hero__acoes">
                <Link className="btn btn--branco" href="#cotar">
                  {pilar('saude').chamada}
                </Link>
                <a className="btn btn--zap" href={WHATSAPP.link}>
                  <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
                    <use href="#i-zap" />
                  </svg>{' '}
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
