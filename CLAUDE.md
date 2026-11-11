@AGENTS.md

# Site da MX Corretora

Redesign de mxseguros.com.br. O protótipo aprovado é `Docs/prototipo-v3-pilares.html`, montado
por `Docs/prototipo-v3/montar.mjs` — é a referência visual de tudo aqui, e continua sendo mantido
como documento de design. O v2 (`Docs/prototipo.html`) fica como histórico.

## Antes de mexer no CSS

**`.palco` não é um wrapper decorativo.** São 24 `@container palco` contra uma única
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
- **Herói em slider de três destaques:** vida, plano de saúde da empresa e seguro empresarial. O
  cliente pediu a volta em 04/11/2026, no lugar do herói único. O slide de saúde não volta a dizer
  "a vida inteira". Consórcio e seguro empresarial seguem como entradas fixas abaixo da faixa de
  números.
- **Sem o bloco "São dois números" na home.** Saiu a pedido do cliente em 11/11/2026; os dois
  WhatsApp continuam no header, na seção de sinistro e no rodapé.
- **Formulário de cotação genérico:** nome, WhatsApp, cidade e autorização, igual em todo o site.
  O consultor de vendas levanta o resto na conversa. Sem abas nem campos por pilar (11/11/2026).
- **Sem slogan.** "MX. Junto no seu negócio." saiu do topo, do rodapé e da /a-mx a pedido do cliente.
- **O menu principal são os pilares**, não a lista de produtos. Auto, residencial, moto e pets
  ficam em "Para você", no menu. A faixa de atalhos "Para você" abaixo dos pilares da home saiu a
  pedido do cliente em 11/11/2026.

## Conteúdo

`content/produtos.ts` é a fonte única dos produtos. Link de produto sai daí, nunca digitado, e a
quantidade sai de `SLUGS.length`. Slug preservado do site antigo — mudar um exige 301.

`content/pilares.ts` define pilares, chamadas e páginas de pilar. `content/empresa.ts` guarda
canais, unidades, especialistas e o que ainda está pendente, entre « ». Dado pendente não se
inventa: `grep «` precisa voltar vazio antes da virada de DNS.

**Comentário de projeto não mora na página.** Nota na tela só se for texto que o visitante
final leria: disclaimer real, aviso de papel de corretora, limite de cobertura.

## Conformidade — não é opcional

A MX é corretora, não assume risco e não administra plano. Consórcio nunca é investimento, não
é seguro e não promete prazo de contemplação: o texto passa pelo jurídico. Previdência sem projeção
de rentabilidade; em saúde não prometer movimentação cadastral nem "a vida inteira". Rodapé com
CNPJ e CNSP 382/2020. O registro SUSEP saiu a pedido do cliente em 04/11/2026; o diagnóstico de
marketing pedia o número no rodapé, sujeito a verificar a norma aplicável.

**Nunca publicar depoimento inventado.** Prova social falsa em site de corretora é infração ao
CDC. Os textos do protótipo são exemplos rotulados e não podem migrar para cá.

## Antes de commitar

`npm run lint` e `npx tsc --noEmit`. O `satisfies` em `produtos.ts` valida os produtos na
compilação — se quebrou lá, é campo faltando, não erro de tipo.
