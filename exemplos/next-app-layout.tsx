// Next.js · App Router → app/layout.tsx
const themeScript = `(function(){var t=null;try{t=localStorage.getItem('theme')}catch(e){}
if(t!=='dark'&&t!=='light'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
document.documentElement.dataset.theme=t})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // o script muda data-theme antes do React hidratar: evita o aviso de hydration
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
