'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PRODUTOS, GRUPOS, porGrupo } from '@/content/produtos';
import Campo from '@/components/Campo';
import { mascaraTelefone, validaTelefone, validaNome } from '@/lib/mascaras';

/**
 * Formulário único de cotação. Substitui os quatro formulários duplicados do
 * site antigo (problema P10 do diagnóstico).
 *
 * O seletor é montado a partir do produtos.ts, então nunca sai de sincronia
 * com o catálogo. Ainda não há destino: o envio depende do /api/lead, que é
 * o M1 do plano de go-live. Até lá o botão avisa em vez de fingir que enviou.
 */
export default function FormCotacao() {
  const [enviado, setEnviado] = useState(false);
  const [tentou, setTentou] = useState(false);
  const [erros, setErros] = useState<Record<string, string | null>>({});

  const anota = (nome: string, erro: string | null) =>
    setErros((e) => (e[nome] === erro ? e : { ...e, [nome]: erro }));

  const temErro = Object.values(erros).some(Boolean);

  return (
    <section className="secao cinza" id="cotar">
      <div className="env">
        <div
          className="grade grade--2"
          style={{ gap: 'clamp(1.5rem,4cqi,3rem)', alignItems: 'start' }}
        >
          <div className="pilha g16">
            <span className="olho">Cotação</span>
            <h2>Uma cotação, dez seguradoras comparadas</h2>
            <p className="lide">
              Você preenche uma vez. A MX manda o mesmo risco para as parceiras, compara
              as propostas item por item e explica a diferença antes de você escolher.
            </p>
            <ul className="lista-v">
              <li>Sem custo e sem compromisso — a corretagem já está no preço da apólice</li>
              <li>Resposta em horário comercial, por WhatsApp ou telefone</li>
              <li>Quem atende é corretor, não robô de triagem</li>
            </ul>
          </div>

          <div className="card">
            <form
              className="pilha g12"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                setTentou(true);
                const form = e.currentTarget;
                // o navegador cuida do obrigatório; as máscaras cuidam do formato
                if (temErro || !form.checkValidity()) return;
                setEnviado(true);
              }}
            >
              <label className="campo">
                <span>O que você quer proteger?</span>
                <select name="produto" required defaultValue="">
                  <option value="">Selecione o produto</option>
                  {GRUPOS.map((g) => (
                    <optgroup label={g} key={g}>
                      {porGrupo(g).map((slug) => (
                        <option value={slug} key={slug}>
                          {PRODUTOS[slug].rotuloMenu}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="">Não sei — me ajuda a escolher</option>
                </select>
              </label>

              <div className="campos-2">
                <Campo
                  rotulo="Nome"
                  nome="nome"
                  required
                  autoComplete="name"
                  valida={validaNome}
                  mostrarErro={tentou}
                  aoValidar={anota}
                />
                <Campo
                  rotulo="WhatsApp"
                  nome="fone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="(19) 98765-4321"
                  required
                  autoComplete="tel"
                  mascara={mascaraTelefone}
                  valida={validaTelefone}
                  mostrarErro={tentou}
                  aoValidar={anota}
                />
              </div>

              <Campo
                rotulo="Cidade"
                nome="cidade"
                placeholder="Itapira, Águas de Lindóia, Mogi Guaçu…"
              />

              <label className="consent">
                <input type="checkbox" required />
                <span>
                  Autorizo a MX a entrar em contato sobre esta cotação.{' '}
                  <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
                </span>
              </label>

              <button className="btn btn--azul btn--largo" type="submit">
                Quero minha cotação
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
