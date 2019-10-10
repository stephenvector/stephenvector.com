import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument;
