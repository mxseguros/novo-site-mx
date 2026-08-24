'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * Vitrine da home: seis a nove produtos que concentram a maior parte das
 * cotações, em abas por público. Os outros 27 ficam na busca do mega-menu
 * e no índice — colocar todos aqui era o que empurrava o resto da página
 * para baixo no site antigo.
 *
 * Os cards não têm hover: caixa não reage ao mouse neste projeto.
 */

type Cat = 'voce' | 'empresa' | 'outros';

const ABAS: { id: Cat; rotulo: string }[] = [
  { id: 'voce', rotulo: 'Para você' },
  { id: 'empresa', rotulo: 'Para sua empresa' },
  { id: 'outros', rotulo: 'Saúde e previdência' },
];

const CARDS = [
  { slug: 'automovel', cat: 'voce', foto: '--f-card-auto', icone: 'i-etiqueta',
    chip: 'Cotação em até 10 seguradoras',
    titulo: 'Seguro de Automóvel',
    texto: 'Colisão, roubo, terceiros e assistência 24h — com carro reserva e vidros, se você quiser.' },
  { slug: 'vida-individual', cat: 'voce', foto: '--f-cd-vida-individual', icone: 'i-escudo',
    chip: 'Sem exame na maioria dos planos',
    titulo: 'Seguro de Vida',
    texto: 'Proteção para quem depende de você, individual ou em grupo pela empresa.' },
  { slug: 'residencial', cat: 'voce', foto: '--f-card-condominio', icone: 'i-casa',
    chip: 'Assistência 24h inclusa',
    titulo: 'Seguro Residencial',
    texto: 'Incêndio, roubo, danos elétricos e vendaval, com chaveiro e encanador de plantão.' },
  { slug: 'empresarial', cat: 'empresa', foto: '--f-card-empresa', icone: 'i-escudo',
    chip: 'Para micro e pequena empresa',
    titulo: 'Seguro Empresarial',
    texto: 'Patrimônio, lucros cessantes e responsabilidade civil para o seu CNPJ.' },
  { slug: 'condominio', cat: 'empresa', foto: '--f-card-condominio', icone: 'i-predio',
    chip: 'Cobertura exigida por lei',
    titulo: 'Seguro de Condomínio',
    texto: 'Cobertura obrigatória, responsabilidade civil do síndico e equipamentos.' },
  { slug: 'transportes', cat: 'empresa', foto: '--f-cd-transportes', icone: 'i-caminhao',
    chip: 'RCTR-C · RC-DC · RC-V',
    titulo: 'Frota e Transportes',
    texto: 'Para transportadora e para quem embarca carga, na apólice que a ANTT exige.' },
  { slug: 'agronegocios', cat: 'empresa', foto: '--f-card-agro', icone: 'i-planta',
    chip: 'Lavoura e máquinas',
    titulo: 'Agronegócios',
    texto: 'Penhor rural, máquinas agrícolas e cobertura de lavoura na região de Itapira.' },
  { slug: 'previdencia', cat: 'outros', foto: '--f-cd-previdencia', icone: 'i-escudo',
    chip: 'PGBL e VGBL',
    titulo: 'Previdência',
    texto: 'Planejamento de longo prazo, com o regime tributário escolhido junto do corretor.' },
  { slug: 'saude', cat: 'outros', foto: '--f-cd-saude', icone: 'i-vida',
    chip: 'Individual e empresarial',
    titulo: 'Saúde e Odontológico',
    texto: 'Planos individuais, familiares e por adesão, com comparação de rede credenciada.' },
] as const;

export default function VitrineProdutos() {
  const [cat, setCat] = useState<Cat>('voce');
  const visiveis = CARDS.filter((c) => c.cat === cat);

  return (
    <section className="secao">
      <div className="env pilha g24">
        <div className="pilha g8">
          <h2>O que você quer proteger?</h2>
          <p className="lide medida">
            Seis produtos concentram a maior parte das cotações. Os outros 21 estão na
            busca do menu.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Categorias de seguro">
          {ABAS.map((a) => (
            <button
              key={a.id}
              className="tab"
              role="tab"
              aria-selected={cat === a.id}
              onClick={() => setCat(a.id)}
            >
              {a.rotulo}
            </button>
          ))}
        </div>

        <div className="carrossel">
          {visiveis.map((c) => (
            <Link
              key={c.slug}
              className="foto-card"
              href={`/seguros/${c.slug}`}
              style={{ backgroundImage: `var(${c.foto})` }}
            >
              <span className="foto-card__chip">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href={`#${c.icone}`} />
                </svg>{' '}
                {c.chip}
              </span>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
              <span className="foto-card__btn">Cotar agora</span>
            </Link>
          ))}
        </div>

        <Link className="seta" href="/seguros">
          Ver os 27 seguros{' '}
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <use href="#i-seta" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
