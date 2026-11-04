// Monta o protótipo v3 num arquivo único.
// Lê fonte.html, injeta o app/globals.css do site no marcador e troca todo
// caminho de /public (fotos, seguradoras, logo) por data URI, para o link
// funcionar sozinho. Uso: node Docs/prototipo-v3/montar.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = join(aqui, '..', '..');
const publico = join(raiz, 'public');

const MIME = { '.webp': 'image/webp', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' };
const cache = new Map();
function dataUri(caminho) {
  if (!cache.has(caminho)) {
    const bytes = readFileSync(join(publico, caminho));
    cache.set(caminho, `data:${MIME[extname(caminho)]};base64,${bytes.toString('base64')}`);
  }
  return cache.get(caminho);
}

const globals = readFileSync(join(raiz, 'app', 'globals.css'), 'utf8');
let html = readFileSync(join(aqui, 'fonte.html'), 'utf8').replace('/*@@GLOBALS@@*/', () => globals);

html = html.replace(/(["'(])\/((?:fotos|seguradoras)\/[\w.-]+|mx-logo\.webp)/g, (_, aspa, caminho) => aspa + dataUri(caminho));

const saida = join(raiz, 'Docs', 'prototipo-v3-pilares.html');
writeFileSync(saida, html);
console.log(`${saida}\n${(Buffer.byteLength(html) / 1048576).toFixed(2)} MB, ${cache.size} arquivos embutidos`);
