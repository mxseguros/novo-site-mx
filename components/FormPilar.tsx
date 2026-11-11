'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PRODUTOS, porGrupo, type Slug } from '@/content/produtos';
import { PILARES, pilar as dadosPilar, pilarDoProduto, type PilarId } from '@/content/pilares';
import { WHATSAPP } from '@/content/empresa';
import Campo from '@/components/Campo';
import { Mel, Saida, useEnvio } from '@/components/Envio';
import {
  mascaraTelefone, mascaraMesAno, mascaraIdades,
  validaTelefone, validaNome, validaMesAno,
} from '@/lib/mascaras';

/**
 * Formulário de cotação, qualificado por pilar.
 *
 * Cada pilar pede o que o consultor precisa para a primeira conversa. O dado
 * mais valioso é o mês de vencimento do plano de saúde: é com ele que a MX
 * programa o contato, de 90 a 120 dias antes.
 *
 * Três usos:
 *   sem props fixas   — home, com abas para escolher o assunto
 *   fixo              — página de pilar, sem abas
 *   produto           — página de produto: o pilar sai do produto, e os campos
 *                       do pilar ficam opcionais para não barrar quem chegou
 *                       por um caso específico (saúde também atende família)
 *
 * Previdência fica em Linhas financeiras, mas não tem carta nem grupo: usa os
 * campos gerais. O envio vai ao /api/lead; se não chegar, o formulário oferece
 * o WhatsApp com a mensagem pronta, em vez de fingir que enviou.
 */

const MESES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const OBJETIVO_DO_PRODUTO: Partial<Record<Slug, string>> = {
  'consorcio-de-imoveis': 'Imóvel',
  'consorcio-de-automoveis': 'Automóvel ou moto',
  'consorcio-de-servicos': 'Serviços',
};

const JA_TEM_SEGURADO = ['Prédio e conteúdo', 'Frota', 'Responsabilidade civil', 'Carga',
  'Riscos cibernéticos', 'Nada ainda'];

function Selecao({ rotulo, nome, opcoes, required, inicial = '' }: {
  rotulo: string;
  nome: string;
  opcoes: string[];
  required?: boolean;
  inicial?: string;
}) {
  return (
    <label className="campo">
      <span>{rotulo}</span>
      <select name={nome} required={required} defaultValue={inicial}>
        <option value="">Selecione</option>
        {opcoes.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

/** Previdência é a exceção do pilar: conversa, não simulação. */
const camposDoProduto = (slug: Slug): PilarId =>
  slug === 'previdencia' ? 'voce' : pilarDoProduto(slug).id;

export default function FormPilar({ pilar = 'saude', fixo = false, produto }: {
  pilar?: PilarId;
  fixo?: boolean;
  produto?: Slug;
}) {
  const [atual, setAtual] = useState<PilarId>(produto ? camposDoProduto(produto) : pilar);
  const { estado, enviar, reinicia } = useEnvio('cotacao', WHATSAPP.link);
  const [tentou, setTentou] = useState(false);
  const [erros, setErros] = useState<Record<string, string | null>>({});

  const anota = (nome: string, erro: string | null) =>
    setErros((e) => (e[nome] === erro ? e : { ...e, [nome]: erro }));
  const temErro = Object.values(erros).some(Boolean);

  // Na página de produto, só o essencial trava o envio.
  const exigido = !produto;
  const mostraAbas = !fixo && !produto;
  const opcoesDeProduto = porGrupo(produto ? PRODUTOS[produto].grupo : 'Para você');

  return (
    <div className="form-pilar">
      {mostraAbas && (
        <div className="tabs" role="tablist" aria-label="Assunto da cotação">
          {PILARES.map((p) => (
            <button
              key={p.id}
              type="button"
              className="tab"
              role="tab"
              aria-selected={atual === p.id}
              onClick={() => {
                setAtual(p.id);
                reinicia();
              }}
            >
              {p.rotuloMenu}
            </button>
          ))}
        </div>
      )}

      <form
        className="pilha g12"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          setTentou(true);
          // reportValidity aponta o campo que falta, inclusive o consentimento
          if (temErro || !e.currentTarget.reportValidity() || estado.fase === 'enviando') return;
          enviar(e.currentTarget, produto ? PRODUTOS[produto].nome : dadosPilar(atual).rotuloMenu);
        }}
      >
        <Mel />
        {atual !== 'voce' && produto && <input type="hidden" name="produto" value={produto} />}

        {atual === 'saude' && (
          <>
            <Campo rotulo="Empresa" nome="empresa" required={exigido} autoComplete="organization" />
            <div className="campos-2">
              <Selecao
                rotulo="Quantas vidas"
                nome="vidas"
                required
                opcoes={[...(produto ? ['Só eu ou minha família'] : []), '2 a 9', '10 a 29', '30 a 99', '100 ou mais']}
              />
              <Campo rotulo="Operadora atual" nome="operadora" placeholder="Ou: não temos plano" />
            </div>
            {produto && (
              <Campo
                rotulo="Idades"
                nome="idades"
                inputMode="numeric"
                placeholder="Ex.: 38, 35, 6"
                dica="Separe por vírgula."
                mascara={mascaraIdades}
              />
            )}
            <Selecao
              rotulo="Mês de vencimento do contrato atual"
              nome="vencimento"
              required={exigido}
              opcoes={[...MESES, 'Não sei', 'Ainda não temos plano']}
            />
            <span className="campo__dica">
              Com essa data, a MX programa a conversa para antes da renovação.
            </span>
          </>
        )}

        {atual === 'financeiras' && (
          <>
            <Selecao
              rotulo="O que você quer comprar"
              nome="objetivo"
              required
              inicial={produto ? OBJETIVO_DO_PRODUTO[produto] : undefined}
              opcoes={['Imóvel', 'Automóvel ou moto', 'Serviços', 'Ainda não sei']}
            />
            <div className="campos-2">
              <Selecao
                rotulo="Valor da carta de crédito"
                nome="valor"
                required
                opcoes={['Até R$ 100 mil', 'R$ 100 mil a R$ 300 mil', 'R$ 300 mil a R$ 1 milhão', 'Acima de R$ 1 milhão']}
              />
              <Selecao
                rotulo="Prazo desejado"
                nome="prazo"
                opcoes={['Até 60 meses', '61 a 120 meses', 'Mais de 120 meses', 'Sem preferência']}
              />
            </div>
            <span className="campo__dica">
              O consultor monta a simulação com as administradoras parceiras. Consórcio não tem data
              garantida de contemplação.
            </span>
          </>
        )}

        {atual === 'empresarial' && (
          <>
            <div className="campos-2">
              <Campo
                rotulo="Ramo de atividade"
                nome="ramo"
                required={exigido}
                placeholder="Ex.: pousada, loja, indústria"
              />
              <Selecao
                rotulo="Porte"
                nome="porte"
                required={exigido}
                opcoes={['Até 9 funcionários', '10 a 49', '50 a 99', '100 ou mais']}
              />
            </div>
            <fieldset className="checks">
              <legend>O que a empresa já tem segurado</legend>
              {JA_TEM_SEGURADO.map((c) => (
                <label className="check" key={c}>
                  <input type="checkbox" name="tem" value={c} /> {c}
                </label>
              ))}
            </fieldset>
            {produto && (
              <Campo
                rotulo="Vencimento da apólice atual"
                nome="venc"
                inputMode="numeric"
                placeholder="03/2027"
                dica="Mês e ano, como 03/2027."
                mascara={mascaraMesAno}
                valida={validaMesAno}
                mostrarErro={tentou}
                aoValidar={anota}
              />
            )}
          </>
        )}

        {atual === 'voce' && (
          <label className="campo">
            <span>O que você quer proteger?</span>
            <select name="produto" required defaultValue={produto ?? ''}>
              <option value="">Selecione o seguro</option>
              {opcoesDeProduto.map((s) => (
                <option value={s} key={s}>
                  {PRODUTOS[s].rotuloMenu}
                </option>
              ))}
              <option value="nao-sei">Não sei — me ajuda a escolher</option>
            </select>
          </label>
        )}

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

        <Campo rotulo="Cidade" nome="cidade" placeholder="Itapira, Águas de Lindóia, Mogi Guaçu…" />

        <label className="consent">
          <input type="checkbox" required />
          <span>
            Autorizo a MX a entrar em contato sobre este pedido.{' '}
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
          </span>
        </label>

        <button className="btn btn--azul btn--largo" type="submit" disabled={estado.fase === 'enviando'}>
          {dadosPilar(atual).botao}
        </button>

        <Saida
          estado={estado}
          padrao="Seus dados vão para a corretora, não para uma lista de disparo."
          depois="Um consultor da MX fala com você pelo WhatsApp ou por telefone."
        />
      </form>
    </div>
  );
}
