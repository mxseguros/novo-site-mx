import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Quais dados a MX coleta, para quê, e quais são os seus direitos.',
};

export default function Pagina() {
  return (
    <>
      <section className="secao--curta">
          <div className="env">
            <nav className="migalhas" aria-label="Trilha de navegação">
              <ol><li><a href="/">Início</a></li><li><a href="/a-mx">A MX</a></li>
                  <li aria-current="page">Política de Privacidade</li></ol>
            </nav>
            <div className="pilha g12" style={{ paddingTop: '.4rem' }}>
              <span className="olho">LGPD</span>
              <h1>Política de Privacidade</h1>
              <p className="lide medida">Esta política explica quais dados pessoais a MX coleta, por que coleta, com quem compartilha e o que você pode exigir a qualquer momento. Ela segue a Lei Geral de Proteção de Dados e a legislação brasileira.</p>
            </div>
          </div>
        </section>
      
        <section className="secao--curta">
          <div className="env">
            <div className="grade grade--3">
              <div className="oferta" style={{ minHeight: 'auto' }}>
                <span className="olho">Controlador</span>
                <h3 style={{ maxWidth: 'none' }}>Rodrigo Natale Formigari — Corretor de Seguros</h3>
                <p>É quem responde pelas decisões sobre o tratamento dos seus dados.</p>
              </div>
              <div className="oferta" style={{ minHeight: 'auto' }}>
                <span className="olho">Canal do titular</span>
                <h3 style={{ maxWidth: 'none' }}>Para exercer seus direitos</h3>
                <div className="dados">
                  <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-mail" /></svg><span><a href="mailto:rodrigo@mxseguros.com.br">rodrigo@mxseguros.com.br</a></span></p>
                  <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-fone" /></svg><span><a href="tel:+5519981127038" className="num">(19) 98112-7038</a></span></p>
                </div>
              </div>
              <div className="oferta oferta--socorro" style={{ minHeight: 'auto' }}>
                <span className="olho">Última atualização</span>
                <h3 style={{ maxWidth: 'none' }}>25 de março de 2021</h3>
                <p>O texto está desatualizado em relação à operação de hoje. A revisão jurídica é item da Fase 3, antes de qualquer publicação.</p>
              </div>
            </div>
          </div>
        </section>
      
        <section className="secao">
          <div className="env pilha g20">
            <div className="pilha g8">
              <span className="olho">O que está nesta política</span>
              <h2>Em resumo, e depois em detalhe</h2>
              <p className="lide medida">Abaixo, cada seção da política em linguagem direta. O texto jurídico completo é migrado sem corte na Fase 3 e fica logo em seguida de cada resumo.</p>
            </div>
            <div>
              <details className="acord" open={true}><summary>1 · Quais dados pessoais são coletados<span className="mais"><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><use href="#i-mais" /></svg></span></summary>
                <div className="acord__corpo">
                  <p>Para cotar e emitir um seguro, a MX coleta os dados que a seguradora exige na proposta:</p>
                  <ul className="checklist">
                    <li>Nome, endereço, CPF ou CNPJ</li>
                    <li>E-mail e telefone</li>
                    <li>Endereço de IP e dados de navegação no site</li>
                    <li>Histórico de crédito, quando o produto exige análise</li>
                    <li>Informações de saúde, nos produtos de vida, saúde e odontológico</li>
                  </ul>
                  <p className="nota">Dado de saúde é dado sensível na LGPD e exige base legal e cuidado próprios. É um dos pontos que a revisão da Fase 3 precisa detalhar.</p>
                </div></details>
              <details className="acord"><summary>2 · Para que os dados são usados<span className="mais"><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><use href="#i-mais" /></svg></span></summary>
                <div className="acord__corpo">
                  <ul className="lista-v">
                    <li>Cotar seguros junto às seguradoras parceiras</li>
                    <li>Emitir e administrar a apólice</li>
                    <li>Atender e acompanhar sinistros</li>
                    <li>Comunicar novidades e renovações</li>
                    <li>Prevenir fraude</li>
                    <li>Pesquisa de mercado e melhoria do atendimento</li>
                  </ul>
                </div></details>
              <details className="acord"><summary>3 · Com quem os dados são compartilhados<span className="mais"><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><use href="#i-mais" /></svg></span></summary>
                <div className="acord__corpo">
                  <p>A MX é corretora: para cotar, os dados vão para as seguradoras. Além delas, o compartilhamento acontece com:</p>
                  <ul className="lista-v">
                    <li>Órgãos reguladores e autoridades, quando a lei exige</li>
                    <li>Prestadores de serviço que apoiam a operação</li>
                    <li>Empresas do mesmo grupo</li>
                    <li>Terceiros, nas hipóteses previstas em lei</li>
                  </ul>
                </div></details>
              <details className="acord"><summary>4 · Seus direitos como titular<span className="mais"><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><use href="#i-mais" /></svg></span></summary>
                <div className="acord__corpo">
                  <ul className="lista-v">
                    <li>Confirmar a existência de tratamento e acessar seus dados</li>
                    <li>Corrigir dado incompleto, inexato ou desatualizado</li>
                    <li>Solicitar a exclusão dos dados tratados com base no consentimento</li>
                    <li>Pedir a portabilidade a outro fornecedor</li>
                    <li>Revogar o consentimento a qualquer momento</li>
                  </ul>
                  <p>Para exercer qualquer um deles, escreva para <a href="mailto:rodrigo@mxseguros.com.br">rodrigo@mxseguros.com.br</a> ou fale no <a href="tel:+5519981127038" className="num">(19) 98112-7038</a>.</p>
                </div></details>
              <details className="acord"><summary>5 · Cookies e navegação no site<span className="mais"><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><use href="#i-mais" /></svg></span></summary>
                <div className="acord__corpo">
                  <p>O site usa cookies para funcionar, medir audiência e apoiar campanhas. Você pode recusar os que não são essenciais no aviso que aparece na primeira visita e alterar a escolha depois. <span className="token">«COOKIES»</span> — a lista de cookies e finalidades é fechada na Fase 4, junto com a instalação do GA4 e do Meta Pixel.</p>
                </div></details>
            </div>
          </div>
        </section>
      
        <section className="secao--curta cinza">
          <div className="env">
            <div className="oferta oferta--faixa" style={{ minHeight: 'auto' }}>
              <h3>Dúvida sobre seus dados?</h3>
              <p>Fale direto com o responsável pelo tratamento. Não precisa abrir chamado nem preencher formulário.</p>
              <div className="acoes" style={{ marginTop: '.8rem' }}>
                <a className="btn btn--azul" href="mailto:rodrigo@mxseguros.com.br">Escrever para o encarregado</a>
                <a className="btn btn--linha num" href="tel:+5519981127038"><svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><use href="#i-fone" /></svg> (19) 98112-7038</a>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
