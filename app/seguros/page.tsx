import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Todos os seguros',
  description: 'Os 27 seguros que a MX cota, agrupados por quem é o cliente.',
};

export default function Pagina() {
  return (
    <>
      <section className="secao--curta">
          <div className="env">
            <nav className="migalhas" aria-label="Trilha de navegação">
              <ol><li><a href="/">Início</a></li><li aria-current="page">Seguros</li></ol>
            </nav>
            <div className="pilha g16" style={{ paddingTop: '.4rem' }}>
              <span className="olho">Todos os produtos</span>
              <h1>Os 27 seguros que a MX cota</h1>
              <p className="lide medida">Cada um deles é cotado em mais de 40 seguradoras parceiras. Se o que você procura não estiver aqui, fale com a gente mesmo assim — cotamos ramos que não estão nesta lista.</p>
              <label className="campo-busca" style={{ maxWidth: '26rem' }}>
                <span className="oculto">Buscar seguro pelo nome</span>
                <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-lupa" /></svg>
                <input type="search" id="busca-indice" placeholder="Buscar — ex.: condomínio, moto, viagem" autoComplete="off" />
              </label>
            </div>
          </div>
        </section>
      
        <section className="secao--curta" id="indice-lista">
          <div className="env pilha g32">
      
            <div className="pilha g16" data-bloco={true}>
              <h2>Para você</h2>
              <div className="grade grade--3">
                <a className="card ix" href="/seguros/automovel"><h4>Automóvel</h4><p>Colisão, roubo, danos a terceiros e assistência 24 horas.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/moto"><h4>Moto</h4><p>Cobertura para a moto e para quem depende dela no trabalho.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/caminhao"><h4>Caminhão</h4><p>Para o caminhoneiro autônomo, com assistência na estrada.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/residencial"><h4>Residencial</h4><p>Incêndio, roubo, danos elétricos e vendaval, com chaveiro e encanador.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/vida-individual"><h4>Vida Individual</h4><p>Proteção financeira para quem depende de você.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/acidentes-pessoais"><h4>Acidentes Pessoais</h4><p>Indenização por morte ou invalidez decorrente de acidente.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/viagem"><h4>Viagem</h4><p>Assistência médica, bagagem e cancelamento, dentro e fora do país.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/bike"><h4>Bike</h4><p>Roubo, furto qualificado e danos à bicicleta, dentro e fora de casa.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/equipamentos-portateis"><h4>Equipamentos Portáteis</h4><p>Celular, notebook e câmera contra roubo e quebra acidental.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/festas-e-eventos"><h4>Festas e Eventos</h4><p>Responsabilidade civil e danos ao espaço contratado.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/fianca-locaticia"><h4>Fiança Locatícia</h4><p>Alternativa ao fiador e à caução na hora de alugar.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/pets"><h4>Seguro para Pets</h4><p>Consultas, exames e cirurgias do seu animal.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
              </div>
            </div>
      
            <div className="pilha g16" data-bloco={true}>
              <h2>Para sua empresa</h2>
              <div className="grade grade--3">
                <a className="card ix" href="/seguros/empresarial"><h4>Empresarial</h4><p>Patrimônio, lucros cessantes e responsabilidade civil do seu CNPJ.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/condominio"><h4>Condomínio</h4><p>A cobertura que a lei exige, mais responsabilidade civil do síndico.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/frota"><h4>Frota</h4><p>Todos os veículos da empresa em uma apólice só.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/transportes"><h4>Transportes</h4><p>RCTR-C, RC-DC e RC-V para transportadora e para quem embarca carga.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/agronegocios"><h4>Agronegócios</h4><p>Lavoura, penhor rural e o que o banco exige no financiamento.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/maquinas-agricolas"><h4>Máquinas Agrícolas</h4><p>Colheitadeira, trator e implementos, no campo e no transporte.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/vida-em-grupo"><h4>Vida em Grupo</h4><p>Benefício para o time, com adesão simples e custo por vida.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/estagiario"><h4>Estagiário</h4><p>O seguro de acidentes pessoais que a Lei do Estágio exige.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/garantia"><h4>Garantia</h4><p>A garantia que o edital ou o contrato pede, sem imobilizar caixa.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/riscos-de-engenharia"><h4>Riscos de Engenharia</h4><p>Obra e montagem cobertas do canteiro até a entrega.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/riscos-ciberneticos"><h4>Riscos Cibernéticos</h4><p>Ataque, vazamento de dados e parada de sistema.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/grandes-riscos"><h4>Grandes Riscos</h4><p>Apólice negociada cláusula a cláusula para operação industrial.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
              </div>
            </div>
      
            <div className="pilha g16" data-bloco={true}>
              <h2>Saúde e previdência</h2>
              <div className="grade grade--3">
                <a className="card ix" href="/seguros/saude"><h4>Saúde</h4><p>Individual, familiar, por empresa ou por adesão a entidade de classe.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/odontologico"><h4>Odontológico</h4><p>Plano dental com rede credenciada, individual ou pela empresa.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
                <a className="card ix" href="/seguros/previdencia"><h4>Previdência</h4><p>PGBL e VGBL para planejar o longo prazo com orientação de corretor.</p><span className="seta">Ver <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-seta" /></svg></span></a>
              </div>
            </div>
      
            <p className="contador" id="indice-conta" aria-live="polite"></p>
            <p className="painel__vazio" id="indice-vazia" role="status">Nenhum seguro com esse nome nesta lista. Chame a MX no WhatsApp — trabalhamos com mais de 40 seguradoras e cotamos ramos que não estão aqui.</p>
          </div>
        </section>
      
        <section className="secao--curta cinza">
          <div className="env">
            <div className="oferta oferta--azul oferta--faixa" style={{ minHeight: 'auto' }}>
              <span className="olho" style={{ color: 'var(--sage)' }}>Não achou?</span>
              <h3 style={{ maxWidth: 'none' }}>A lista não é a fronteira do que a MX cota</h3>
              <p>Trabalhamos com mais de 40 seguradoras e acessamos ramos que não estão nesta página. Descreva o que você precisa proteger que a gente responde com o caminho.</p>
              <div className="acoes" style={{ marginTop: '.8rem' }}>
                <a className="btn btn--zap" href="https://wa.me/551938638150">Falar com um corretor</a>
                <a className="btn btn--linha-neg" href="/contato">Ver todos os canais</a>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
