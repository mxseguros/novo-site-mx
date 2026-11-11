'use client';

import Link from 'next/link';
import { useState } from 'react';
import { WHATSAPP, WHATSAPP_SINISTRO } from '@/content/empresa';
import Campo from '@/components/Campo';
import { Mel, Saida, useEnvio } from '@/components/Envio';
import { mascaraTelefone, validaNome, validaTelefone } from '@/lib/mascaras';

/**
 * Os dois formulários curtos do site: contato e pedido do percentual de
 * comissão (CNSP 382/2020). Mesmo envio do formulário de cotação.
 */

function useValidacao() {
  const [tentou, setTentou] = useState(false);
  const [erros, setErros] = useState<Record<string, string | null>>({});
  const anota = (nome: string, erro: string | null) =>
    setErros((e) => (e[nome] === erro ? e : { ...e, [nome]: erro }));
  return { tentou, setTentou, anota, temErro: Object.values(erros).some(Boolean) };
}

function NomeEFone({ tentou, anota, rotuloFone }: {
  tentou: boolean;
  anota: (nome: string, erro: string | null) => void;
  rotuloFone: string;
}) {
  return (
    <div className="campos-2">
      <Campo rotulo="Nome" nome="nome" required autoComplete="name" valida={validaNome} mostrarErro={tentou} aoValidar={anota} />
      <Campo
        rotulo={rotuloFone}
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
  );
}

const ASSUNTOS = ['Quero uma cotação', 'Dúvida sobre apólice ou boleto', 'Sinistro', 'Trabalhe conosco', 'Outro assunto'];

export function FormContato() {
  const v = useValidacao();
  const [assunto, setAssunto] = useState('');
  // sinistro tem o próprio WhatsApp: a mensagem de reserva vai para ele
  const zap = assunto === 'Sinistro' ? WHATSAPP_SINISTRO : WHATSAPP;
  const { estado, enviar } = useEnvio('contato', zap.link);

  return (
    <form
      className="pilha g12"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        v.setTentou(true);
        if (v.temErro || !e.currentTarget.reportValidity() || estado.fase === 'enviando') return;
        enviar(e.currentTarget, assunto || 'Contato pelo site');
      }}
    >
      <Mel />
      <label className="campo">
        <span>Assunto</span>
        <select name="assunto" required value={assunto} onChange={(e) => setAssunto(e.target.value)}>
          <option value="">Selecione</option>
          {ASSUNTOS.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </label>
      {assunto === 'Sinistro' && (
        <p className="campo__dica">
          Para guincho, chaveiro ou socorro agora, ligue para a assistência 24 horas da sua seguradora —{' '}
          <Link href="/sinistro">veja os telefones</Link>.
        </p>
      )}
      <NomeEFone tentou={v.tentou} anota={v.anota} rotuloFone="Telefone ou WhatsApp" />
      <label className="campo">
        <span>E-mail</span>
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label className="campo">
        <span>Mensagem</span>
        <textarea name="msg" rows={4} maxLength={2000} />
      </label>
      <label className="consent">
        <input type="checkbox" required />
        <span>
          Autorizo o contato da MX. <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
        </span>
      </label>
      <button className="btn btn--azul btn--largo" type="submit" disabled={estado.fase === 'enviando'}>
        Enviar mensagem
      </button>
      <Saida
        estado={estado}
        padrao="Seus dados vão para a corretora, não para uma lista de disparo."
        depois="A MX responde no próximo dia útil."
      />
    </form>
  );
}

export function FormCnsp() {
  const v = useValidacao();
  const { estado, enviar } = useEnvio('cnsp', WHATSAPP.link);

  return (
    <form
      className="pilha g12"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        v.setTentou(true);
        if (v.temErro || !e.currentTarget.reportValidity() || estado.fase === 'enviando') return;
        enviar(e.currentTarget, 'Percentual de comissão da apólice');
      }}
    >
      <Mel />
      <label className="campo">
        <span>Número da apólice ou da proposta</span>
        <input name="apolice" placeholder="Se não tiver em mãos, deixe em branco" />
      </label>
      <NomeEFone tentou={v.tentou} anota={v.anota} rotuloFone="WhatsApp" />
      <label className="campo">
        <span>E-mail</span>
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label className="consent">
        <input type="checkbox" required />
        <span>
          Autorizo a MX a entrar em contato sobre esta solicitação.{' '}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
        </span>
      </label>
      <button className="btn btn--azul btn--largo" type="submit" disabled={estado.fase === 'enviando'}>
        Solicitar o detalhe da comissão
      </button>
      <Saida
        estado={estado}
        padrao="O pedido vai direto para a corretora."
        depois="A MX responde no próximo dia útil."
      />
    </form>
  );
}
