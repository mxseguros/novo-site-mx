@AGENTS.md

# Site da MX Corretora

Redesign de mxseguros.com.br. O protótipo aprovado está fora deste repositório, em
`../MX Novo Site/prototipo.html` — é a referência visual de tudo aqui, e continua sendo
mantido como documento de design.

## Antes de mexer no CSS

**`.palco` não é um wrapper decorativo.** São 16 `@container palco` contra uma única
`@media`: sem um elemento com `container-type: inline-size; container-name: palco`
envolvendo o conteúdo, o site inteiro para de responder, em silêncio. Nenhum teste pega.

**Nada de Tailwind.** `app/globals.css` é o design system aprovado. Estilo novo vira regra
nomeada ali, não classe utilitária no JSX.

## Regras de componente já decididas com o cliente

Vieram de rodadas de revisão e não devem ser reintroduzidas por conta própria:

- **Caixa não reage ao mouse.** Sem hover em `.card`, `.oferta`, `.foto-card`, `.depo` e nos
  logos de seguradora. Botão, link, aba, acordeão e linha de tabela mantêm hover — são
  controles, não caixas.
- **Sem ícone de marca-d'água atrás de box.** O componente `.oferta__marca` foi removido.
- Cada cor tem um dono: **azul** é a única cor de conversão, **branco** é o mesmo botão sobre
  foto ou navy, **vermelho** é exclusivo de sinistro e **verde é o WhatsApp**, sempre com o
  ícone junto.
- Número do passo **ao lado** do título, não acima.
- Produtos relacionados usam o card de foto, não card de ícone.
- **Sem barra fixa de conversão.** O par WhatsApp + "Fazer cotação" no header é o padrão.
- `.foto-card--grade` precisa de `background-position: 74% center`: as fotos foram recortadas
  com o sujeito à direita, e `center` cai no vazio.

## Conteúdo

`content/produtos.ts` é a fonte única dos 27 seguros. Link de produto sai daí, nunca digitado.
Slug preservado do site antigo — mudar um exige 301.

**Comentário de projeto não mora na página.** Nota na tela só se for texto que o visitante
final leria: disclaimer real, aviso de papel de corretora, limite de cobertura.

## Conformidade — não é opcional

A MX é corretora, não assume risco e não administra plano. Consórcio nunca é investimento;
previdência sem projeção de rentabilidade; em saúde não prometer movimentação cadastral.
Rodapé com CNPJ, registro SUSEP e CNSP 382/2020.

**Nunca publicar depoimento inventado.** Prova social falsa em site de corretora é infração ao
CDC. Os textos do protótipo são exemplos rotulados e não podem migrar para cá.

## Antes de commitar

`npm run lint` e `npx tsc --noEmit`. O `satisfies` em `produtos.ts` valida os 27 produtos na
compilação — se quebrou lá, é campo faltando, não erro de tipo.
