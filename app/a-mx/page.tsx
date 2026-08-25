import Link from 'next/link';
import type { Metadata } from 'next';
import MapaUnidade from '@/components/MapaUnidade';

export const metadata: Metadata = {
  title: 'A MX',
  description: 'Corretora de seguros em Itapira e Águas de Lindóia desde 2002.',
};

export default function Pagina() {
  return (
    <>
      <section className="hero">
          <div className="hero__trilho">
            <article className="hero__slide" style={{ backgroundImage: 'var(--f-predio-mx)', backgroundPosition: '58% 46%', minHeight: 'clamp(300px,34cqi,382px)' }}>
              <div className="hero__conteudo"><div className="env">
                <nav className="migalhas" aria-label="Trilha de navegação" style={{ color: 'rgba(255,255,255,.72)' }}>
                  <ol><li><a href="/" style={{ color: 'rgba(255,255,255,.72)' }}>Início</a></li>
                      <li aria-current="page" style={{ color: '#fff' }}>A MX</li></ol>
                </nav>
                <div className="hero__caixa">
                  <h1>Uma história com propósito</h1>
                  <p>Formada por consultores experientes e preparados, atuando no mercado de seguros desde 2002 com eficiência, inovação e preços competitivos, a MX Seguros é uma das principais empresas do ramo de seguro na região.</p>
                  <div className="chip-lista">
                    <span className="chip chip--neg">Desde 2002</span>
                    <span className="chip chip--neg">Itapira e Águas de Lindóia</span>
                    <span className="chip chip--neg">Mais de 40 seguradoras parceiras</span>
                  </div>
                </div>
              </div></div>
            </article>
          </div>
        </section>
      
        <section className="numeros">
          <div className="env">
            <div className="numeros__grade">
              <div className="numeros__item"><span className="numeros__n num">24</span><span className="numeros__t">anos de mercado</span><span className="numeros__d">Atuando em seguros desde 2002</span></div>
              <div className="numeros__item"><span className="numeros__n num">+40</span><span className="numeros__t">seguradoras parceiras</span><span className="numeros__d">Uma cotação, dezenas de propostas comparadas</span></div>
              <div className="numeros__item"><span className="numeros__n num">2</span><span className="numeros__t">escritórios de porta aberta</span><span className="numeros__d">Itapira e Águas de Lindóia</span></div>
            </div>
          </div>
        </section>
      
        <section className="secao">
          <div className="env">
            <div className="grade grade--2" style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'center' }}>
              <div className="pilha g16">
                <span className="olho">O que a MX faz</span>
                <h2>Identificar a necessidade antes de apresentar o produto</h2>
                <p>A especialidade da casa é entender o que cada cliente precisa proteger e apresentar o produto adequado — não o mais fácil de vender. O compromisso é com atendimento rápido, justo e eficiente, promovendo assistência e suporte totalmente diferenciados.</p>
                <p>Isso vale desde a contratação até o acompanhamento da qualidade do seu seguro: endossos, sinistros e ajustes de cobertura ao longo da vigência.</p>
                <div className="acoes" style={{ marginTop: '.4rem' }}>
                  <a className="btn btn--azul" href="/#cotar">Fazer cotação</a>
                  <a className="btn btn--zap num" href="https://wa.me/551938638150"><svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true"><use href="#i-zap" /></svg> (19) 3863-8150</a>
                </div>
              </div>
              <div className="foto-larga" style={{ backgroundImage: 'var(--f-foto-equipe)', minHeight: '300px' }} role="img" aria-label="Consultores da MX em atendimento"></div>
            </div>
          </div>
        </section>
      
        <section className="secao cinza">
          <div className="env pilha g24">
            <div className="pilha g8">
              <span className="olho">Missão, visão e valores</span>
              <h2>O que orienta a decisão quando ninguém está olhando</h2>
            </div>
            <div className="grade grade--2">
              <div className="oferta oferta--faixa" style={{ minHeight: 'auto' }}>
                <span className="olho">Nossa missão</span>
                <h3>Através da excelência no atendimento, levar segurança e tranquilidade aos nossos clientes.</h3>
              </div>
              <div className="oferta oferta--faixa" style={{ minHeight: 'auto' }}>
                <span className="olho">Nossa visão</span>
                <h3>Ser referência no mercado de seguros, em constante evolução em tecnologia e inovação.</h3>
                <p>Sendo destaque a confiança que leva aos clientes de diversos setores.</p>
              </div>
            </div>
            <div className="pilha g12">
              <span className="olho">Nossos valores</span>
              <div className="chip-lista">
                <span className="chip">Ética</span><span className="chip">Pontualidade</span><span className="chip">Transparência</span>
                <span className="chip">Integridade</span><span className="chip">Comprometimento</span>
              </div>
            </div>
          </div>
        </section>
      
        <section className="secao" id="unidades-amx">
          <div className="env pilha g20">
            <div className="pilha g8">
              <span className="olho">Unidades</span>
              <h2>Matriz em Itapira, filial em Águas de Lindóia</h2>
            </div>
            <div className="grade grade--2">
              <div className="unidade">
                <MapaUnidade endereco="Av. Rio Branco, 221 - Centro, Itapira - SP, 13970-070" descricao="Mapa da matriz da MX em Itapira" />
                <div className="unidade__corpo">
                  <span className="selo">Matriz</span>
                  <h3>Itapira / SP</h3>
                  <div className="dados">
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-pin" /></svg><span>Avenida Rio Branco, 221 — Centro<br />Itapira/SP · CEP 13970-070</span></p>
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-relogio" /></svg><span>Segunda a sexta, 08:00 às 18:00</span></p>
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-zap" /></svg><span><span className="dados__rot">WhatsApp · cotação, apólice, boleto e dúvidas</span><a href="https://wa.me/551938638150" className="num">(19) 3863-8150</a></span></p>
                  </div>
                  <a className="seta" href="https://www.google.com/maps/dir/?api=1&amp;destination=Av.%20Rio%20Branco%2C%20221%20-%20Centro%2C%20Itapira%20-%20SP%2C%2013970-070" target="_blank" rel="noopener">Como chegar a Itapira <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></a>
                </div>
              </div>
              <div className="unidade">
                <MapaUnidade endereco="Rua Argentina, 15 - Águas de Lindóia - SP" descricao="Mapa da filial da MX em Águas de Lindóia" />
                <div className="unidade__corpo">
                  <span className="selo">Filial</span>
                  <h3>Águas de Lindóia / SP</h3>
                  <div className="dados">
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-pin" /></svg><span>Rua Argentina, 15 — Salas 2 e 3 — Centro<br />Águas de Lindóia/SP · CEP <span className="token">«CEP-FILIAL»</span></span></p>
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-relogio" /></svg><span>Segunda a sexta, 08:00 às 18:00</span></p>
                    <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-zap" /></svg><span><span className="dados__rot">WhatsApp · cotação, apólice, boleto e dúvidas</span><a href="https://wa.me/551938638150" className="num">(19) 3863-8150</a></span></p>
                  </div>
                  <a className="seta" href="https://www.google.com/maps/dir/?api=1&amp;destination=Rua%20Argentina%2C%2015%20-%20%C3%81guas%20de%20Lind%C3%B3ia%20-%20SP" target="_blank" rel="noopener">Como chegar a Águas de Lindóia <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section className="secao--curta cinza">
          <div className="env">
            <div className="grade grade--3">
              <a className="card" href="/seguros"><span className="card__icone"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-escudo" /></svg></span><h4>Os 27 seguros que a MX cota</h4><p>Individual, empresarial, saúde e previdência.</p><span className="seta">Ver todos <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
              <a className="card" href="/cnsp-382-2020"><span className="card__icone"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-imprimir" /></svg></span><h4>Resolução CNSP 382/2020</h4><p>Como a corretora é remunerada, e como pedir o detalhe.</p><span className="seta">Ler <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
              <a className="card" href="/politica-de-privacidade"><span className="card__icone"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-escudo" /></svg></span><h4>Política de Privacidade</h4><p>Quais dados a MX coleta, para quê e quais são os seus direitos.</p><span className="seta">Ler <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
            </div>
          </div>
        </section>
    </>
  );
}
