# Dark mode sem flash (FOWT)

Material do vídeo **"Dark Mode sem Flash"** do canal da [Digital Lift](https://digitallift.com.br).

FOWT = *Flash of Wrong Theme*: a página aparece clara por um instante antes de ficar escura. Acontece quando o tema é aplicado por um script que roda **depois** do primeiro paint.

## Os 4 pilares
1. **Script síncrono inline no `<head>`**, antes do CSS: aplica o tema antes de qualquer pixel (`index.html`).
2. **Tokens semânticos**: componentes usam `--color-bg`, `--color-text`… nunca cores fixas (`tokens.css`).
3. **matchMedia listener**: o site acompanha o tema do sistema sem reload (`theme.js`).
4. **Transição controlada**: a classe `theme-transitioning` só existe durante o toggle (`transitions.css`).

Ordem de preferência: escolha salva no `localStorage` → tema do sistema (`prefers-color-scheme`) → claro.

## Como testar (passo a passo)
1. Baixe o repositório: botão verde **Code → Download ZIP** e descompacte.
2. Dê dois cliques no `index.html`.
3. Clique no ☀️/🌙 para alternar e recarregue a página (F5): ela abre direto no tema escolhido, sem piscar.
4. Clique em "Voltar a seguir o sistema" e mude o tema do Windows/macOS: o site muda junto.

## Em frameworks
O princípio é o mesmo, só muda onde o script fica. Veja a pasta `exemplos/`:

| Framework | Arquivo |
|---|---|
| Next.js (Pages Router) | `pages/_document.tsx` |
| Next.js (App Router) | `app/layout.tsx` |
| Astro | `src/layouts/Layout.astro` com `<script is:inline>` |
| Vite / HTML puro | `index.html` |
