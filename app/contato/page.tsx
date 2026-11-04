import Link from 'next/link';
import type { Metadata } from 'next';
import Unidades from '@/components/Unidades';

export const metadata: Metadata = {
  title: 'Contato e unidades',
  description: 'Dois números de WhatsApp, cada um com um assunto. Itapira e Águas de Lindóia.',
};

export default function Pagina() {
  return (
    <>
      <section className="secao--curta">
          <div className="env">
            <nav className="migalhas" aria-label="Trilha de navegação">
              <ol><li><Link href="/">Início</Link></li><li aria-current="page">Contato</li></ol>
            </nav>
            <div className="pilha g12" style={{ paddingTop: '.4rem' }}>
              <h1>Fale com a MX</h1>
              <p className="lide medida">Dois números de WhatsApp, cada um com um assunto. Escolha pelo motivo do contato, não pelo número.</p>
            </div>
          </div>
        </section>
      
        <section className="secao--curta">
          <div className="env pilha g16">
            <div className="grade grade--3">
              <div className="oferta">
                <span className="olho">Para tudo, menos sinistro</span>
                <h3>WhatsApp da MX</h3>
                <p>Cotação, apólice, boleto, segunda via, dúvida de cobertura. Segunda a sexta, das 08:00 às 18:00.</p>
                <a className="btn btn--zap btn--peq num" href="https://wa.me/551938638150" style={{ marginTop: 'auto' }}><svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><use href="#i-zap" /></svg> (19) 3863-8150</a>
              </div>
              <div className="oferta oferta--socorro">
                <span className="olho">Exclusivo de sinistro</span>
                <h3>WhatsApp de sinistro</h3>
                <p>Só sinistro entra aqui. Por isso não fica preso em conversa de venda quando você mais precisa. A assistência 24h sai pela seguradora — os telefones estão na página de sinistro.</p>
                <a className="btn btn--socorro btn--peq num" href="https://wa.me/5519982036147" style={{ marginTop: 'auto' }}>(19) 98203-6147</a>
              </div>
            </div>
          </div>
        </section>
      
        <section className="secao">
          <div className="env">
            <div className="grade grade--2" style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'start' }}>
              <div className="pilha g16">
                <span className="olho">Escreva para a gente</span>
                <h2>Prefere por escrito?</h2>
                <p className="lide">Respondemos no próximo dia útil. Para urgência, use o WhatsApp de sinistro.</p>
                <div className="dados">
                  <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-mail" /></svg><span><span className="dados__rot">E-mail</span><a href="mailto:mxseguros@mxseguros.com.br">mxseguros@mxseguros.com.br</a></span></p>
                  <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-relogio" /></svg><span><span className="dados__rot">Atendimento</span>Segunda a sexta, 08:00 às 18:00</span></p>
                  <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-instagram" /></svg><span><span className="dados__rot">Instagram</span><a href="https://www.instagram.com/mxseguros_/">@mxseguros_</a></span></p>
                </div>
              </div>
              <div className="form-caixa">
                <form className="pilha g12" id="form-contato" noValidate={true}>
                  <label className="campo"><span>Assunto</span>
                    <select name="assunto">
                      <option value="">Selecione</option>
                      <option>Quero uma cotação</option>
                      <option>Dúvida sobre apólice ou boleto</option>
                      <option>Sinistro</option>
                      <option>Trabalhe conosco</option>
                      <option>Outro assunto</option>
                    </select></label>
                  <div className="campos-2">
                    <label className="campo"><span>Nome</span><input name="nome" required={true} autoComplete="name" /></label>
                    <label className="campo"><span>Telefone</span><input name="fone" type="tel" inputMode="tel" required={true} autoComplete="tel" /></label>
                  </div>
                  <label className="campo"><span>E-mail</span><input name="email" type="email" autoComplete="email" /></label>
                  <label className="campo"><span>Mensagem</span><textarea name="msg" rows={4}></textarea></label>
                  <label className="consent"><input type="checkbox" required={true} /><span>Autorizo o contato da MX. <a href="/politica-de-privacidade">Política de Privacidade</a>.</span></label>
                  <button className="btn btn--azul btn--largo" type="submit">Enviar mensagem</button>
                  <div className="saida" id="saida-contato" role="status">
                    <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true" style={{ flex: '0 0 auto', marginTop: '3px' }}><use href="#i-escudo" /></svg>
                    <span>Protótipo — nada é enviado.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      
        <section className="secao cinza">
          <div className="env pilha g20">
            <div className="pilha g8">
              <span className="olho">Unidades</span>
              <h2>Onde a MX fica</h2>
            </div>
            <Unidades />
          </div>
        </section>
    </>
  );
}
