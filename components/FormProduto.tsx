'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PRODUTOS, GRUPOS, porGrupo, type Slug } from '@/content/produtos';

/**
 * Formulário da página de produto. O que ele pede muda com o template:
 *
 *   T2 técnico   — empresa e vencimento da apólice atual. Aqui o formulário
 *                  não fecha venda: evita que a pessoa repita a história.
 *   T4 benefício — vidas e idades, sem os quais não existe cotação de plano.
 *   T1 massa     — cidade, e o corretor liga.
 *
 * O seletor já vem no produto da página e lista os 27 do produtos.ts.
 * Sem destino ainda: o /api/lead é o M1 do plano de go-live.
 */
export default function FormProduto({ slug }: { slug: Slug }) {
  const p = PRODUTOS[slug];
  const [enviado, setEnviado] = useState(false);

  const conteudo =
    p.template === 2
      ? {
          titulo: 'Falar com um especialista',
          lide:
            'Aqui o formulário não fecha a venda — ele evita que você repita a história. Um corretor liga com a cotação já comparada.',
          lista: [
            'Atendimento com quem cuida dessa carteira',
            'Comparação entre as seguradoras parceiras',
            'Aviso de vencimento antes da renovação',
          ],
          botao: 'Quero falar com um corretor',
        }
      : p.template === 4
        ? {
            titulo: 'Sem número de vidas e idade, não existe cotação',
            lide:
              'Preço de plano é calculado por faixa etária. Estes dois campos são o que transforma um pedido em uma proposta de verdade.',
            lista: [
              'Comparação entre operadoras e redes',
              'Explicação da regra de reajuste por faixa etária',
              'Apoio na contratação e na renovação',
            ],
            botao: 'Quero minha cotação',
          }
        : {
            titulo: `Cotar ${p.nome.toLowerCase()}`,
            lide:
              'Sem custo, sem compromisso e sem repassar seus dados. Um corretor responde no horário comercial.',
            lista: [
              'Comparamos até dez seguradoras com o mesmo risco',
              'Explicamos franquia e cobertura antes de você decidir',
              'A MX guarda a data da renovação e avisa você',
            ],
            botao: 'Quero minha cotação',
          };

  return (
    <section className="secao" id="cotar-produto">
      <div className="env">
        <div
          className="grade grade--2"
          style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'center' }}
        >
          <div className="pilha g16">
            <span className="olho">Cotação</span>
            <h2>{conteudo.titulo}</h2>
            <p className="lide">{conteudo.lide}</p>
            <ul className="lista-v">
              {conteudo.lista.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          <div className="form-caixa">
            <form
              className="pilha g12"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                setEnviado(true);
              }}
            >
              <label className="campo">
                <span>Produto</span>
                <select name="produto" defaultValue={slug}>
                  {GRUPOS.map((g) => (
                    <optgroup label={g} key={g}>
                      {porGrupo(g).map((s) => (
                        <option value={s} key={s}>
                          {PRODUTOS[s].rotuloMenu}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </label>

              <div className="campos-2">
                <label className="campo">
                  <span>Nome</span>
                  <input name="nome" required autoComplete="name" />
                </label>
                <label className="campo">
                  <span>WhatsApp</span>
                  <input
                    name="fone"
                    type="tel"
                    inputMode="tel"
                    placeholder="(19) 99999-9999"
                    required
                    autoComplete="tel"
                  />
                </label>
              </div>

              {p.template === 2 && (
                <div className="campos-2">
                  <label className="campo">
                    <span>Empresa</span>
                    <input name="org" />
                  </label>
                  <label className="campo">
                    <span>Vencimento da apólice atual</span>
                    <input name="venc" placeholder="mês/ano" />
                  </label>
                </div>
              )}

              {p.template === 4 && (
                <div className="campos-2">
                  <label className="campo">
                    <span>Quantas vidas</span>
                    <input
                      name="vidas"
                      type="number"
                      min={1}
                      inputMode="numeric"
                      placeholder="Ex.: 3"
                    />
                  </label>
                  <label className="campo">
                    <span>Idades</span>
                    <input name="idades" placeholder="Ex.: 38, 35, 6" />
                  </label>
                </div>
              )}

              {p.template === 1 && (
                <label className="campo">
                  <span>Cidade</span>
                  <input
                    name="cidade"
                    placeholder="Itapira, Águas de Lindóia, Mogi Guaçu…"
                  />
                </label>
              )}

              <label className="consent">
                <input type="checkbox" required />
                <span>
                  Autorizo a MX a entrar em contato sobre esta cotação.{' '}
                  <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
                </span>
              </label>

              <button className="btn btn--azul btn--largo" type="submit">
                {conteudo.botao}
              </button>

              <div className="saida" role="status">
                <svg
                  viewBox="0 0 20 20"
                  width="17"
                  height="17"
                  aria-hidden="true"
                  style={{ flex: '0 0 auto', marginTop: '3px' }}
                >
                  <use href="#i-escudo" />
                </svg>
                <span>
                  {enviado
                    ? 'O envio ainda não está ligado. Enquanto isso, chame a MX no WhatsApp — (19) 97138-6794.'
                    : 'Seus dados vão para a corretora, não para uma lista de disparo.'}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
