'use client';

import { useState } from 'react';
import { WHATSAPP_SINISTRO } from '@/content/empresa';

/**
 * Telefones da assistência, abertos na tela. A tabela vem pronta do servidor,
 * então funciona em conexão ruim mesmo antes de a busca carregar.
 *
 * O link de discagem sai do número exibido, nunca é digitado à parte: foi assim
 * que o da Allianz ficou com um dígito a menos. Seguradora sem número confirmado
 * fica sem número — telefone errado de emergência é pior que telefone ausente.
 */

type Linha = { numero: string; antes?: string; depois?: string };

const SEGURADORAS: { nome: string; linhas: Linha[] }[] = [
  { nome: 'Allianz Seguros', linhas: [{ numero: '0800 0130 700' }] },
  { nome: 'Azul Seguros', linhas: [{ numero: '4004 3700', depois: '(grandes centros)' }, { numero: '0800 703 0203' }] },
  { nome: 'Bradesco Seguros', linhas: [{ numero: '4004 2757', depois: '(grandes centros)' }, { numero: '0800 701 2757' }] },
  { nome: 'Chubb Seguros', linhas: [] },
  { nome: 'HDI Seguros', linhas: [{ numero: '3003 5390', depois: '(grandes centros)' }, { numero: '0800 434 4340' }] },
  { nome: 'Itaú Seguros', linhas: [{ numero: '3003 1010', depois: '(regiões metropolitanas)' }, { numero: '0800 720 1010' }] },
  { nome: 'Mapfre', linhas: [{ numero: '4004 0101', depois: '(regiões metropolitanas)' }, { numero: '0800 775 4545' }] },
  { nome: 'MSIG · Mitsui Sumitomo', linhas: [{ numero: '0800 707 7883' }, { antes: 'Central e sinistros', numero: '0300 772 6744' }] },
  { nome: 'Norden', linhas: [] },
  { nome: 'Porto Seguro', linhas: [{ numero: '0800 727 0800' }] },
  { nome: 'Sompo Seguros', linhas: [{ numero: '0800 016 2727' }, { antes: 'Central Brasil', numero: '0800 771 9119' }] },
  { nome: 'SulAmérica', linhas: [] },
  { nome: 'Tokio Marine', linhas: [{ numero: '0800 318 6546', depois: '(auto e residencial)' }, { antes: 'Vidros', numero: '0800 707 8005' }] },
  { nome: 'Yelum Seguradora', linhas: [{ numero: '4004 5423', depois: '(regiões metropolitanas)' }, { numero: '0800 701 4120' }] },
  { nome: 'Zurich Seguros', linhas: [{ numero: '0800 729 1400' }, { antes: 'Sinistro', numero: '0800 777 2746' }, { antes: 'Central', numero: '4000 1246' }] },
];

/** "Sulamerica" e "sulamérica" têm de achar a mesma linha. */
const normaliza = (t: string) =>
  t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

export default function TabelaAssistencia() {
  const [busca, setBusca] = useState('');
  const visiveis = SEGURADORAS.filter((s) => normaliza(s.nome).includes(normaliza(busca)));

  return (
    <>
      <label className="campo-busca" style={{ maxWidth: '24rem' }}>
        <span className="oculto">Buscar seguradora</span>
        <svg viewBox="0 0 20 20" aria-hidden="true"><use href="#i-lupa" /></svg>
        <input
          type="search"
          id="busca-seguradora"
          placeholder="Buscar seguradora — ex.: Tokio"
          autoComplete="off"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </label>
      <div className="rolagem" style={{ background: '#fff', border: '1px solid var(--linha)', borderRadius: 'var(--raio-card)' }}>
        <table className="assist" id="tab-assist">
          <thead><tr><th scope="col">Seguradora</th><th scope="col">Assistência 24h e sinistros</th></tr></thead>
          <tbody>
            {visiveis.map((s) => (
              <tr key={s.nome}>
                <td>{s.nome}</td>
                <td className="num">
                  {s.linhas.length === 0 && (
                    <>
                      Telefone na sua apólice, ou chame a MX:{' '}
                      <a href={WHATSAPP_SINISTRO.link}>{WHATSAPP_SINISTRO.numero}</a>
                    </>
                  )}
                  {s.linhas.map((l, i) => (
                    <span key={l.numero}>
                      {i > 0 && ' · '}
                      {l.antes && `${l.antes} `}
                      <a href={`tel:${l.numero.replace(/\D/g, '')}`}>{l.numero}</a>
                      {l.depois && ` ${l.depois}`}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="nota">Telefones conferidos em 21/08/2026. Em caso de dúvida, vale o número impresso na sua apólice.</p>
      {visiveis.length === 0 && (
        <p className="painel__vazio" role="status">
          Não achamos essa seguradora na lista. Chame a MX no WhatsApp de sinistro que a gente localiza o número da sua apólice.
        </p>
      )}
    </>
  );
}
