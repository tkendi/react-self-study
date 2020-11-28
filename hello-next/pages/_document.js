import Documnet, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Documnet {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const style = flush();

    return { html, head, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <title>Next.js 연습</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
