import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resolução CNSP 382/2020',
  description: 'Como a corretora é remunerada e como pedir o detalhe da comissão.',
};

export default function Pagina() {
  return (
    <>
      <section className="secao--curta">
          <div className="env">
            <nav className="migalhas" aria-label="Trilha de navegação">
              <ol><li><a href="/">Início</a></li><li><a href="/a-mx">A MX</a></li>
                  <li aria-current="page">Resolução CNSP 382/2020</li></ol>
            </nav>
            <div className="pilha g12" style={{ paddingTop: '.4rem' }}>
              <span className="olho">Transparência regulatória</span>
              <h1>Resolução CNSP 382/2020</h1>
              <p className="lide medida">Prezado cliente, agradecemos por ter escolhido nossa corretora de seguros para a cotação do seu seguro. Esta página explica como a MX é remunerada — e como você pode pedir o detalhe da comissão da sua apólice.</p>
            </div>
          </div>
        </section>
      
        <section className="secao--curta">
          <div className="env pilha g16">
            <div className="grade grade--3">
              <div className="oferta" style={{ minHeight: 'auto' }}>
                <span className="olho">1 · Sobre o que incide</span>
                <h3 style={{ maxWidth: 'none' }}>Percentual sobre o prêmio líquido</h3>
                <p>O percentual remuneratório recebido por esta corretora pela prestação dos nossos serviços securitários é calculado sobre o valor do prêmio comercial — o prêmio líquido — do seguro cobrado pela seguradora.</p>
              </div>
              <div className="oferta" style={{ minHeight: 'auto' }}>
                <span className="olho">2 · Quem desconta e repassa</span>
                <h3 style={{ maxWidth: 'none' }}>A seguradora, e consta na proposta</h3>
                <p>O percentual destinado à corretora, a título remuneratório previsto em contrato, é objeto de desconto pela própria seguradora, com posterior repasse à corretora — e consta previamente na proposta de seguro.</p>
              </div>
              <div className="oferta" style={{ minHeight: 'auto' }}>
                <span className="olho">3 · Por que o valor exato só vem depois</span>
                <h3 style={{ maxWidth: 'none' }}>Impostos, encargos e parcelamento</h3>
                <p>Considerados os descontos legais (impostos e demais encargos) e contratuais (abatimentos e estornos de comissão), somados à proporção do número de prestações contratadas para pagamento do prêmio, torna-se inviável definir de primeira mão a parte remuneratória destinada à corretora.</p>
              </div>
            </div>
          </div>
        </section>
      
        <section className="secao cinza">
          <div className="env">
            <div className="grade grade--2" style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'center' }}>
              <div className="pilha g16">
                <span className="olho">Seu direito</span>
                <h2>Você pode pedir o percentual de comissão da sua apólice</h2>
                <p>Para total transparência dos custos da apólice e dos descontos legais, colocamos à disposição a apólice e demais esclarecimentos sobre o percentual de comissão cobrado pela prestação dos nossos serviços, nos termos do <b>artigo 4º, § 1º, inciso IV, da Resolução CNSP nº 382/2020</b>.</p>
                <p>Basta solicitar pelo formulário ao lado, por e-mail ou pelo WhatsApp. Respondemos no próximo dia útil.</p>
                <div className="dados">
                  <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-mail" /></svg><span><span className="dados__rot">E-mail</span><a href="mailto:mxseguros@mxseguros.com.br">mxseguros@mxseguros.com.br</a></span></p>
                  <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-zap" /></svg><span><span className="dados__rot">WhatsApp</span><a href="https://wa.me/551938638150" className="num">(19) 3863-8150</a></span></p>
                </div>
              </div>
              <div className="form-caixa form-caixa--branca">
                <form className="pilha g12" id="form-cnsp" noValidate={true}>
                  <label className="campo"><span>Número da apólice ou da proposta</span><input name="apolice" placeholder="Se não tiver em mãos, deixe em branco" /></label>
                  <div className="campos-2">
                    <label className="campo"><span>Nome</span><input name="nome" required={true} autoComplete="name" /></label>
                    <label className="campo"><span>WhatsApp</span><input name="fone" type="tel" inputMode="tel" required={true} autoComplete="tel" /></label>
                  </div>
                  <label className="campo"><span>E-mail</span><input name="email" type="email" autoComplete="email" /></label>
                  <label className="consent"><input type="checkbox" required={true} /><span>Autorizo a MX a entrar em contato sobre esta solicitação. <a href="/politica-de-privacidade">Política de Privacidade</a>.</span></label>
                  <button className="btn btn--azul btn--largo" type="submit">Solicitar o detalhe da comissão</button>
                  <div className="saida" id="saida-cnsp" role="status">
                    <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true" style={{ flex: '0 0 auto', marginTop: '3px' }}><use href="#i-escudo" /></svg>
                    <span>Protótipo — nada é enviado.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      
        <section className="secao--curta">
          <div className="env">
            <p className="nota">MX Corretora de Seguros · CNPJ 45.154.654/0001-08.</p>
          </div>
        </section>
    </>
  );
}
