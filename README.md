# Site da MX Corretora de Seguros

Redesign completo de [mxseguros.com.br](https://mxseguros.com.br), saindo de WordPress + Elementor
para Next.js. Corretora de Itapira e Águas de Lindóia, no mercado desde 2002, com dez seguradoras
parceiras.

**Status:** fundação. O design system e o conteúdo já foram portados do protótipo aprovado; as
rotas ainda não existem.

---

## Como rodar

```bash
npm install
npm run dev
```

`npm run build` para o build de produção, `npm run lint` e `npx tsc --noEmit` para as verificações.

---

## Estrutura

```
app/
  globals.css        design system inteiro — 39 KB, portado do protótipo
  layout.tsx
content/
  produtos.ts        os 27 seguros, tipados. Fonte única de conteúdo
public/
  fotos/             45 imagens WebP (headers de produto, cards, mapas)
  mx-logo.webp       logo em WebP lossless, usado via mask-image
```

---

## Três convenções que não são óbvias

### 1. Sem Tailwind, e é de propósito

O CSS em `app/globals.css` é o design system aprovado no Portão G2, com tokens, escala tipográfica
e componentes já ajustados. Reescrever em classes utilitárias jogaria fora esse ajuste. Estilo novo
entra como regra no design system, não como utilitária solta.

### 2. `.palco` sustenta o responsivo inteiro

O site tem **16 `@container palco` e uma única `@media`**. Todo o comportamento responsivo pende de
um elemento com:

```css
container-type: inline-size;
container-name: palco;
```

Remover o `.palco` do layout, ou só o `container-name`, faz o site inteiro parar de responder — e
isso não aparece como erro em lugar nenhum. É a armadilha número um deste repositório.

### 3. `content/produtos.ts` é a fonte única

Os 27 seguros vivem em um objeto tipado. O menu, o índice, o carrossel da home, o rodapé e a rota
de produto leem dele. **Nenhum destino de produto é escrito à mão** — foi assim que o site antigo
acumulou link quebrado.

A interface `Produto` é validada em tempo de compilação por `satisfies`, então campo faltando
quebra o build em vez de sumir da página.

| Template | Uso | Quantos |
|---|---|---|
| T1 | Produto de massa | 12 |
| T2 | Técnico e B2B | 12 |
| T4 | Benefício (saúde, odonto, previdência) | 3 |

Não existe T3: as páginas de consórcio saíram do site em 21/08/2026, porque a MX não representa
nenhuma administradora.

---

## Conformidade

A MX é **corretora**: não assume risco e não administra plano. Todo texto de produto precisa
respeitar isso.

- Consórcio nunca é investimento e nunca promete prazo de contemplação
- Previdência sem projeção de rentabilidade
- Em saúde, a MX é corretora e não administradora de benefícios — nada de prometer movimentação
  cadastral
- CNPJ, registro SUSEP e a Resolução CNSP 382/2020 ficam visíveis no rodapé

---

## Migração

Todos os slugs do site antigo são preservados. Seis URLs mudam de destino e precisam de 301, a
serem declarados no `vercel.json` antes da virada de DNS.
