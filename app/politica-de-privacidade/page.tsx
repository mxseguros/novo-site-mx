import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { CNPJ } from '@/content/empresa';
import { ReverCookies } from '@/components/Analitico';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Quais dados a MX coleta, para quê, com quem compartilha e quais são os seus direitos.',
};

const EMAIL_TITULAR = 'rodrigo@mxseguros.com.br';
const FONE_TITULAR = { numero: '(19) 98112-7038', link: 'tel:+5519981127038' };

function Secao({ n, titulo, id, aberta, children }: {
  n: number;
  titulo: string;
  id?: string;
  aberta?: boolean;
  children: ReactNode;
}) {
  return (
    <details className="acord" id={id} open={aberta}>
      <summary>
        {n} · {titulo}
        <span className="mais">
          <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><use href="#i-mais" /></svg>
        </span>
      </summary>
      <div className="acord__corpo">{children}</div>
    </details>
  );
}

const Canal = () => (
  <>
    <a href={`mailto:${EMAIL_TITULAR}`}>{EMAIL_TITULAR}</a> ou{' '}
    <a href={FONE_TITULAR.link} className="num">{FONE_TITULAR.numero}</a>
  </>
);

/**
 * Política de Privacidade. Reescrita em 11/11/2026 a partir da versão de
 * 25/03/2021, para descrever o que o site novo faz: formulário enviado por
 * e-mail à equipe, GA4 só com consentimento. Passa pelo jurídico antes da
 * virada de DNS — e muda junto com qualquer novo destino do lead ou nova tag.
 */
export default function Pagina() {
  return (
    <>
      <section className="secao--curta">
        <div className="env">
          <nav className="migalhas" aria-label="Trilha de navegação">
            <ol>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/a-mx">A MX</Link></li>
              <li aria-current="page">Política de Privacidade</li>
            </ol>
          </nav>
          <div className="pilha g12" style={{ paddingTop: '.4rem' }}>
            <span className="olho">LGPD</span>
            <h1>Política de Privacidade</h1>
            <p className="lide medida">
              Esta política explica quais dados pessoais a MX Corretora de Seguros coleta, por que
              coleta, com quem compartilha e o que você pode pedir a qualquer momento. Ela segue a Lei
              Geral de Proteção de Dados (Lei 13.709/2018) e vale para o site e para o atendimento.
            </p>
          </div>
        </div>
      </section>

      <section className="secao--curta">
        <div className="env">
          <div className="grade grade--3">
            <div className="oferta" style={{ minHeight: 'auto' }}>
              <span className="olho">Controlador</span>
              <h3 style={{ maxWidth: 'none' }}>Rodrigo Natale Formigari — Corretor de Seguros</h3>
              <p>Responde pelas decisões sobre o tratamento dos seus dados na MX Corretora de Seguros, CNPJ {CNPJ}.</p>
            </div>
            <div className="oferta" style={{ minHeight: 'auto' }}>
              <span className="olho">Canal do titular</span>
              <h3 style={{ maxWidth: 'none' }}>Para exercer seus direitos</h3>
              <div className="dados">
                <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-mail" /></svg><span><a href={`mailto:${EMAIL_TITULAR}`}>{EMAIL_TITULAR}</a></span></p>
                <p className="dados__item"><svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-fone" /></svg><span><a href={FONE_TITULAR.link} className="num">{FONE_TITULAR.numero}</a></span></p>
              </div>
            </div>
            <div className="oferta" style={{ minHeight: 'auto' }}>
              <span className="olho">Última atualização</span>
              <h3 style={{ maxWidth: 'none' }}>11 de novembro de 2026</h3>
              <p>Esta versão substitui a de 25 de março de 2021 e descreve o site atual.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="env pilha g20">
          <div className="pilha g8">
            <span className="olho">O que está nesta política</span>
            <h2>Seção por seção, em linguagem direta</h2>
          </div>
          <div>
            <Secao n={1} titulo="Quais dados pessoais são coletados" aberta>
              <p>No site, só o que você digita nos formulários de cotação, contato ou pedido de comissão:</p>
              <ul className="checklist">
                <li>Nome, telefone ou WhatsApp, e-mail e cidade</li>
                <li>As informações do pedido, como empresa, número de vidas e idades, vencimento do contrato atual, ramo de atividade ou o bem que você quer proteger</li>
              </ul>
              <p>Na cotação e na contratação, a MX coleta o que a seguradora, a operadora ou a administradora exige na proposta:</p>
              <ul className="checklist">
                <li>CPF ou CNPJ, endereço e dados do bem ou da empresa</li>
                <li>Histórico de crédito, quando o produto exige análise</li>
                <li>Informações de saúde, nos produtos de vida, saúde e odontológico</li>
              </ul>
              <p>Ao navegar, a hospedagem registra dados técnicos como endereço IP e navegador, por segurança. Dados de uso do site só são medidos se você aceitar os cookies de medição (seção 7).</p>
              <p className="nota">Informação de saúde é dado sensível na LGPD. A MX só a coleta quando a proposta exige e só a usa para cotar, contratar e acompanhar aquele produto.</p>
            </Secao>

            <Secao n={2} titulo="Para que os dados são usados">
              <ul className="lista-v">
                <li>Responder ao seu pedido e preparar a cotação — a pedido seu, antes do contrato</li>
                <li>Emitir e administrar a apólice, a renovação e o endosso — para cumprir o contrato</li>
                <li>Acompanhar sinistros com a seguradora</li>
                <li>Cumprir obrigações legais e regulatórias da corretora, inclusive as de prevenção à lavagem de dinheiro</li>
                <li>Prevenir fraude e proteger o site</li>
                <li>Avisar sobre renovação e oferecer produtos ligados ao que você já tem — você pode pedir para não receber mais</li>
                <li>Medir o uso do site, só com o seu consentimento</li>
              </ul>
            </Secao>

            <Secao n={3} titulo="Com quem os dados são compartilhados">
              <p>A MX é corretora: para cotar e contratar, os dados vão para as seguradoras, operadoras ou administradoras consultadas. Além delas, o compartilhamento acontece com:</p>
              <ul className="lista-v">
                <li>Órgãos reguladores e autoridades, quando a lei exige</li>
                <li>Prestadores de serviço que apoiam a operação, como hospedagem do site, envio de e-mail e, se você aceitar, medição de audiência</li>
                <li>Empresas do mesmo grupo, para as mesmas finalidades</li>
              </ul>
              <p>A MX não vende dados e não os cede para lista de disparo. Alguns prestadores guardam dados fora do Brasil; quando isso acontece, a transferência segue as garantias previstas na LGPD.</p>
            </Secao>

            <Secao n={4} titulo="Por quanto tempo os dados ficam guardados">
              <p>Pelo tempo necessário para a finalidade de cada um. Dados de apólice e de sinistro ficam pelo prazo que a lei e a regulação de seguros exigem. Pedidos feitos pelo site que não viram contratação ficam guardados enquanto a cotação é acompanhada e depois são eliminados, a não ser que você peça para continuar recebendo contato.</p>
            </Secao>

            <Secao n={5} titulo="Como os dados são protegidos">
              <p>O site usa conexão criptografada (HTTPS), e o acesso aos dados fica restrito a quem trabalha no seu atendimento. Se acontecer um incidente de segurança que possa trazer risco a você, a MX comunica você e a Autoridade Nacional de Proteção de Dados.</p>
            </Secao>

            <Secao n={6} titulo="Seus direitos como titular">
              <ul className="lista-v">
                <li>Confirmar se a MX trata dados seus e acessar esses dados</li>
                <li>Corrigir dado incompleto, inexato ou desatualizado</li>
                <li>Pedir anonimização, bloqueio ou eliminação de dado desnecessário ou tratado em desacordo com a lei</li>
                <li>Pedir a portabilidade dos dados a outro fornecedor</li>
                <li>Saber com quem os dados foram compartilhados</li>
                <li>Revogar o consentimento e pedir a eliminação dos dados tratados com base nele</li>
                <li>Opor-se a um tratamento e pedir para não receber mais ofertas</li>
              </ul>
              <p>Para exercer qualquer um deles, fale com o controlador: <Canal />. Se a resposta não resolver, você pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).</p>
            </Secao>

            <Secao n={7} titulo="Cookies e navegação no site" id="cookies">
              <p>O site não usa cookies de publicidade. Para entender quais páginas ajudam e quais confundem, ele pode medir a audiência com o Google Analytics, que grava os cookies <code>_ga</code> e <code>_ga_*</code> por até dois anos. Esses cookies só são ativados se você aceitar no aviso que aparece na primeira visita; recusar não muda nada no uso do site.</p>
              <p>A sua escolha fica guardada no próprio navegador, e você pode mudá-la quando quiser.</p>
              <div><ReverCookies /></div>
            </Secao>

            <Secao n={8} titulo="Mudanças nesta política">
              <p>Quando a forma de tratar dados mudar, esta página muda junto, com a data de atualização no topo. Mudança relevante é avisada no próprio site.</p>
            </Secao>
          </div>
        </div>
      </section>

      <section className="secao--curta cinza">
        <div className="env">
          <div className="oferta oferta--faixa" style={{ minHeight: 'auto' }}>
            <h3>Dúvida sobre seus dados?</h3>
            <p>Fale direto com o responsável pelo tratamento. Não precisa abrir chamado nem preencher formulário.</p>
            <div className="acoes" style={{ marginTop: '.8rem' }}>
              <a className="btn btn--azul" href={`mailto:${EMAIL_TITULAR}`}>Escrever para o controlador</a>
              <a className="btn btn--linha num" href={FONE_TITULAR.link}><svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><use href="#i-fone" /></svg> {FONE_TITULAR.numero}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
