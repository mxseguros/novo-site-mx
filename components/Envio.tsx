'use client';

import { useState } from 'react';
import { rastrear } from '@/lib/rastrear';
import type { RespostaDeLead, TipoDeLead } from '@/lib/leads/tipos';

/**
 * O que todo formulário do site faz ao enviar: manda ao /api/lead e, se o envio
 * falhar ou ainda não estiver ligado, oferece o WhatsApp com a mensagem já
 * escrita. Nenhum formulário finge que enviou.
 */

type Estado =
  | { fase: 'parado' }
  | { fase: 'enviando' }
  | { fase: 'enviado'; protocolo: string }
  | { fase: 'falhou'; erro: string; whatsapp: string };

type Linha = [rotulo: string, valor: string];

/** Lê os campos preenchidos com o rótulo que a pessoa viu na tela. */
function lerCampos(form: HTMLFormElement, fora: string[]): Linha[] {
  const valores = new Map<string, string[]>();
  for (const el of Array.from(form.elements)) {
    if (
      !(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) ||
      !el.name ||
      fora.includes(el.name) ||
      (el instanceof HTMLInputElement && (el.type === 'hidden' || (el.type === 'checkbox' && !el.checked)))
    ) {
      continue;
    }
    const valor =
      el instanceof HTMLSelectElement ? (el.value ? el.selectedOptions[0].text : '') : el.value.trim();
    if (!valor) continue;
    const rotulo =
      el.closest('fieldset')?.querySelector('legend')?.textContent?.trim() ??
      el.closest('label')?.querySelector('span')?.textContent?.trim() ??
      el.name;
    valores.set(rotulo, [...(valores.get(rotulo) ?? []), valor]);
  }
  return [...valores].map(([rotulo, v]) => [rotulo, v.join(', ')]);
}

const valorDe = (form: HTMLFormElement, nome: string) => {
  const el = form.elements.namedItem(nome);
  return el instanceof HTMLInputElement ? el.value.trim() : '';
};

export function useEnvio(tipo: TipoDeLead, whatsappLink: string) {
  const [estado, setEstado] = useState<Estado>({ fase: 'parado' });

  async function enviar(form: HTMLFormElement, assunto: string) {
    const nome = valorDe(form, 'nome');
    const fone = valorDe(form, 'fone');
    // o assunto já vai à parte
    const campos = lerCampos(form, ['nome', 'fone', 'site', 'assunto']);

    const mensagem = [
      `Olá! Sou ${nome} e preenchi o formulário do site.`,
      `Assunto: ${assunto}`,
      ...campos.map(([r, v]) => `${r}: ${v}`),
      `WhatsApp: ${fone}`,
    ].join('\n');
    const whatsapp = `${whatsappLink}?text=${encodeURIComponent(mensagem)}`;

    setEstado({ fase: 'enviando' });
    let resposta: RespostaDeLead;
    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tipo,
          assunto,
          nome,
          fone,
          campos,
          pagina: location.pathname,
          consentimento: true,
          site: valorDe(form, 'site'),
        }),
      });
      resposta = await r.json();
    } catch {
      resposta = { ok: false, erro: 'Sem conexão com o site agora.' };
    }

    if (resposta.ok && resposta.protocolo) {
      rastrear('envio_formulario', { tipo, assunto });
      setEstado({ fase: 'enviado', protocolo: resposta.protocolo });
    } else {
      rastrear('envio_formulario_falhou', { tipo, assunto });
      setEstado({ fase: 'falhou', erro: resposta.erro ?? 'O envio não funcionou.', whatsapp });
    }
  }

  return { estado, enviar, reinicia: () => setEstado({ fase: 'parado' }) };
}

/** Campo invisível. Gente não vê nem preenche; robô de formulário preenche. */
export function Mel() {
  return (
    <label className="mel" aria-hidden="true">
      Site
      <input name="site" tabIndex={-1} autoComplete="off" />
    </label>
  );
}

/** Linha de status embaixo do botão. */
export function Saida({ estado, padrao, depois }: { estado: Estado; padrao: string; depois: string }) {
  const falhou = estado.fase === 'falhou';
  return (
    <div className={'saida' + (falhou ? ' saida--alerta' : '')} role="status" data-visivel="1">
      <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true" className="saida__icone">
        <use href={falhou ? '#i-zap' : '#i-escudo'} />
      </svg>
      <span className="pilha g8">
        {estado.fase === 'parado' && padrao}
        {estado.fase === 'enviando' && 'Enviando…'}
        {estado.fase === 'enviado' && (
          <>
            <b>Recebido. Protocolo {estado.protocolo}.</b> {depois}
          </>
        )}
        {falhou && (
          <>
            <span>
              {estado.erro} Seus dados não se perderam: mande a mesma mensagem pelo WhatsApp, já
              escrita.
            </span>
            <a className="btn btn--zap btn--peq" href={estado.whatsapp} target="_blank" rel="noopener">
              <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                <use href="#i-zap" />
              </svg>{' '}
              Enviar pelo WhatsApp
            </a>
          </>
        )}
      </span>
    </div>
  );
}
