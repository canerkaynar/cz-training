import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="eng">
        <Head>
          <meta
            name="description"
            content="Training"
          />
          <meta name="viewport" content="width=device-width, height=device-height, user-scalable=0, initial-scale=1" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <main>
            <Main />
          </main>
          <NextScript />
        </body>
      </html>
    );
  }
}
