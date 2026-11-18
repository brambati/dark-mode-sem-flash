// Next.js · Pages Router → pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

const themeScript = `(function(){var t=null;try{t=localStorage.getItem('theme')}catch(e){}
if(t!=='dark'&&t!=='light'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
document.documentElement.dataset.theme=t})();`;

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
