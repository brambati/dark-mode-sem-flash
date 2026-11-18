// theme.js · o <head> já aplicou o tema; aqui ficam as interações
const root = document.documentElement;
const media = matchMedia('(prefers-color-scheme: dark)');
const toggle = document.querySelector('#toggle');
const reset = document.querySelector('#reset');

// 1. escolha salva > 2. sistema operacional > 3. light
function temaPreferido() {
  return localStorage.getItem('theme') ?? (media.matches ? 'dark' : 'light');
}

function atualizarBotao(tema) {
  toggle.textContent = tema === 'dark' ? '🌙' : '☀️';
  toggle.setAttribute('aria-label', tema === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
}

// transição controlada: liga a classe, troca o tema, desliga
function aplicarTema(tema) {
  root.classList.add('theme-transitioning');
  root.dataset.theme = tema;
  atualizarBotao(tema);
  setTimeout(() => root.classList.remove('theme-transitioning'), 200);
}

// o SO mudou de tema: acompanha, se o usuário não escolheu nada
media.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) aplicarTema(e.matches ? 'dark' : 'light');
});

// toggle: lê, inverte, salva, atualiza o aria-label
toggle.addEventListener('click', () => {
  const novo = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', novo);
  aplicarTema(novo);
});

reset.addEventListener('click', () => {
  localStorage.removeItem('theme');
  aplicarTema(temaPreferido());
});

atualizarBotao(root.dataset.theme);
