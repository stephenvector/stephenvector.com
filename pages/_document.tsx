import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Stephen Vector | Frontend Engineer</title>
          <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
          <script type="text/javascript" src="/static/segment.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
