# Manual da Marca — Felipe de Bortoli Munhoz

Site estático com o manual da marca do escritório + aplicações de papel timbrado.
**Versão 1.1** — agora com suporte mobile completo.

## Estrutura

```
.
├── index.html              ← manual da marca (entrada principal)
├── styles.css              ← estilos globais + responsivos
├── components/             ← Logo, navegação (com drawer mobile)
├── sections/               ← os 10 capítulos do manual
├── assets/                 ← logo original (referência)
├── letterhead/             ← canvas de papel timbrado + 3 versões para impressão
└── vercel.json             ← config (cleanUrls)
```

## Deploy no Vercel

### Opção 1 — Arrastar e soltar
1. Acesse https://vercel.com/new
2. Arraste esta pasta inteira para a área de upload
3. Clique em **Deploy**. Pronto.

### Opção 2 — Vercel CLI
```bash
npm i -g vercel
cd deploy/
vercel
```

### Opção 3 — Git
1. Faça push desta pasta para um repositório no GitHub
2. No Vercel, clique em **Import Project** e selecione o repositório

## Configurações importantes

- **Framework Preset:** `Other` (é um site estático puro, sem build step)
- **Build Command:** *(vazio)*
- **Output Directory:** *(vazio — usa a raiz)*
- **Install Command:** *(vazio)*

## Responsividade

A partir desta versão (1.1), o manual funciona em:
- **Desktop** (> 900px): nav lateral fixa, layouts em múltiplas colunas
- **Tablet** (601–900px): nav lateral vira drawer, layouts híbridos
- **Mobile** (≤ 600px): barra superior com menu hambúrguer, tudo em coluna única, type scale reduzida

Breakpoints principais: 900px e 600px.

## Detalhes técnicos

- HTML estático puro com React via CDN + Babel in-browser
- Não precisa de Node.js, npm install ou build
- Fontes carregadas via Google Fonts (Cinzel, Cormorant Garamond, EB Garamond, JetBrains Mono)
- Funciona em qualquer hospedagem de site estático (Netlify, Cloudflare Pages, GitHub Pages etc.)

## URLs após deploy

- `/` — Manual da marca
- `/letterhead/` — Canvas com as 3 versões de papel timbrado
- `/letterhead/print-v1.html` — Versão clássica para impressão
- `/letterhead/print-v2.html` — Versão dividida para impressão
- `/letterhead/print-v3.html` — Versão editorial para impressão

---

FBM Advocacia · Vila Velha — ES · 2026
