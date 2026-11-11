'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PRODUTOS, type Slug } from '@/content/produtos';
import { pilar as dadosPilar, type PilarId } from '@/content/pilares';
import { WHATSAPP } from '@/content/empresa';
import Campo from '@/components/Campo';
import { Mel, Saida, useEnvio } from '@/components/Envio';
import { mascaraTelefone, validaTelefone, validaNome } from '@/lib/mascaras';

/**
 * Formulário de cotação, o mesmo em todo o site: nome, WhatsApp e cidade.
 * Quem atende é um consultor de vendas, que levanta o resto na conversa —
 * decisão do cliente em 11/11/2026, no lugar dos campos por pilar.
 *
 * O assunto não aparece na tela, mas vai no lead: o produto da página, o pilar
 * da página de pilar ou, na home, "Cotação pelo site".
 */
export default function FormPilar({ pilar, produto }: { pilar?: PilarId; produto?: Slug }) {
  const { estado, enviar } = useEnvio('cotacao', WHATSAPP.link);
  const [tentou, setTentou] = useState(false);
  const [erros, setErros] = useState<Record<string, string | null>>({});

  const anota = (nome: string, erro: string | null) =>
    setErros((e) => (e[nome] === erro ? e : { ...e, [nome]: erro }));
  const temErro = Object.values(erros).some(Boolean);

  const assunto = produto
    ? PRODUTOS[produto].nome
    : pilar
      ? dadosPilar(pilar).rotuloMenu
      : 'Cotação pelo site';
  const botao = pilar && !produto ? dadosPilar(pilar).botao : 'Quero minha cotação';

  return (
    <form
      className="pilha g12"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setTentou(true);
        // reportValidity aponta o campo que falta, inclusive o consentimento
        if (temErro || !e.currentTarget.reportValidity() || estado.fase === 'enviando') return;
        enviar(e.currentTarget, assunto);
      }}
    >
      <Mel />

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
        {botao}
      </button>

      <Saida
        estado={estado}
        padrao="Seus dados vão para a corretora, não para uma lista de disparo."
        depois="Um consultor da MX fala com você pelo WhatsApp ou por telefone."
      />
    </form>
  );
}
