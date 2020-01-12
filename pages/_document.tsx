import Document, { Html, Head, Main, NextScript } from "next/document";
import { DocumentContext } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <header className="header">
            <style global jsx>{`
              *,
              *:before,
              *:after {
                box-sizing: border-box;
              }
              @import url(//fontlibrary.org/face/liberation-mono);
              html {
                background: #000;
                font-size: 16px;
                padding: 0;
                margin: 0;
              }
              body {
                background: #000;
                color: #fff;
                font-family: "LiberationMonoRegular";
                font-weight: normal;
                font-style: normal;
                padding: 0;
                margin: 0;
              }
              h1 {
                font-family: "LiberationMonoRegular";
                font-weight: bold;
                font-style: normal;
                font-size: 4rem;
                max-width: 80rem;
              }
              code,
              pre {
                background: #111;
              }
              code {
                padding: 1rem;
                display: block;
              }
              a {
                color: inherit;
                text-decoration: none;
              }
              a:hover {
                background: pink;
                color: #111;
              }
              .header h1 {
                padding: 0;
                margin: 0;
                line-height: 3;
                font-size: 2rem;
              }
              .header h1 a {
                display: block;
                padding: 1rem;
              }
            `}</style>
            <h1>
              <Link href="/">
                <a>Stephen Vector</a>
              </Link>
            </h1>
          </header>
          <section>
            <Main />
          </section>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
