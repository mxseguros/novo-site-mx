import Link from 'next/link';
import type { Metadata } from 'next';
import { SLUGS } from '@/content/produtos';
import { WHATSAPP } from '@/content/empresa';
import Especialistas from '@/components/Especialistas';
import Unidades from '@/components/Unidades';

export const metadata: Metadata = {
  title: 'A MX',
  description: 'Corretora em Itapira e Águas de Lindóia desde 2002. Quem atende você tem nome, endereço e acompanha a renovação e o sinistro.',
};

export default function Pagina() {
  return (
    <>
      <section className="hero">
          <div className="hero__trilho">
            <article className="hero__slide" style={{ backgroundImage: 'var(--f-predio-mx)', backgroundPosition: '58% 46%', minHeight: 'clamp(300px,34cqi,382px)' }}>
              <div className="hero__conteudo"><div className="env">
                <nav className="migalhas migalhas--neg" aria-label="Trilha de navegação">
                  <ol><li><Link href="/">Início</Link></li>
                      <li aria-current="page">A MX</li></ol>
                </nav>
                <div className="hero__caixa">
                  <h1>Uma corretora com endereço e nome de quem atende</h1>
                  <p>Desde 2002, em Itapira e Águas de Lindóia. A MX cuida das pessoas, do patrimônio e do crescimento de empresas e famílias da região.</p>
                </div>
              </div></div>
            </article>
          </div>
        </section>

        <section className="numeros">
          <div className="env">
            <div className="numeros__grade">
              <div className="numeros__item"><span className="numeros__n num">24</span><span className="numeros__t">anos de mercado</span><span className="numeros__d">Atuando em seguros desde 2002</span></div>
              <div className="numeros__item"><span className="numeros__n num">+40</span><span className="numeros__t">seguradoras parceiras</span><span className="numeros__d">A seguradora certa para cada risco</span></div>
              <div className="numeros__item"><span className="numeros__n num">2</span><span className="numeros__t">escritórios de porta aberta</span><span className="numeros__d">Itapira e Águas de Lindóia</span></div>
            </div>
          </div>
        </section>

        <section className="secao">
          <div className="env">
            <div className="grade grade--2" style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'start' }}>
              <div className="pilha g16">
                <span className="olho">O que a MX faz</span>
                <h2>Corretora: do seu lado, não do lado da seguradora</h2>
                <p>A MX não assume riscos nem administra planos. O trabalho é entender o que precisa ser protegido, levar o risco às seguradoras que operam aquele ramo e explicar a diferença entre as propostas antes de você assinar.</p>
                <p>Depois da assinatura, a MX continua no contrato: endossos, renovação e, principalmente, o sinistro. É nessa hora que fica claro por que vale ter uma corretora com endereço.</p>
                <div className="acoes" style={{ marginTop: '.4rem' }}>
                  <Link className="btn btn--azul" href="/#cotar">Fazer cotação</Link>
                  <a className="btn btn--zap num" href={WHATSAPP.link}><svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true"><use href="#i-zap" /></svg> {WHATSAPP.numero}</a>
                </div>
              </div>
              <div className="pilha g16">
                <span className="olho">Como trabalhamos</span>
                <div className="passos" style={{ gridTemplateColumns: '1fr' }}>
                  <div className="passo"><h4>Entender antes de oferecer</h4><p>Primeiro o que você precisa proteger, depois o produto.</p></div>
                  <div className="passo"><h4>Cotar onde faz sentido</h4><p>Nas seguradoras que operam o ramo, com a mesma informação para todas.</p></div>
                  <div className="passo"><h4>Explicar a diferença</h4><p>Coberturas, limites e franquias, item por item.</p></div>
                  <div className="passo"><h4>Ficar junto</h4><p>Na renovação e no dia do sinistro.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="secao cinza">
          <div className="env pilha g24">
            <div className="pilha g8">
              <span className="olho">As pessoas</span>
              <h2>Quem lidera cada área</h2>
            </div>
            <Especialistas />
          </div>
        </section>

        <section className="secao" id="unidades-amx">
          <div className="env pilha g20">
            <div className="pilha g8">
              <span className="olho">Unidades</span>
              <h2>Duas portas abertas, de segunda a sexta</h2>
            </div>
            <Unidades />
          </div>
        </section>

        <section className="secao--curta cinza">
          <div className="env">
            <div className="grade grade--3">
              <Link className="card" href="/seguros"><span className="card__icone"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-escudo" /></svg></span><h4>Os {SLUGS.length} seguros e soluções da MX</h4><p>Saúde, consórcio, empresa e família.</p><span className="seta">Ver todos <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></Link>
              <Link className="card" href="/cnsp-382-2020"><span className="card__icone"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-imprimir" /></svg></span><h4>Resolução CNSP 382/2020</h4><p>Como a corretora é remunerada, e como pedir o detalhe.</p><span className="seta">Ler <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></Link>
              <Link className="card" href="/politica-de-privacidade"><span className="card__icone"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-escudo" /></svg></span><h4>Política de Privacidade</h4><p>Quais dados a MX coleta, para quê e quais são os seus direitos.</p><span className="seta">Ler <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></Link>
            </div>
          </div>
        </section>
    </>
  );
}
