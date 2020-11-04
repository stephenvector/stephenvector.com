import React from "react";
import App from "next/app";
import Head from "next/head";
import { Global, css } from "@emotion/core";
import Header from "../components/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="wrapper">
        <Head>
          <title>Stephen Vector | Frontend Engineer | Seattle, WA</title>
        </Head>
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css?family=Google+Sans:400,700");

            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }
            body {
              font-family: "Google Sans", sans-serif;
              margin: 0;
              padding: 0;
            }
            html {
              margin: 0;
              padding: 0;
              background: #f2f2f2;
              color: #000;
              box-sizing: border-box;
              font-size: 20px;
            }
            @media screen and (max-width: 768px) {
              font-size: 17px;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              margin: 0;
              font-weight: 800;
            }
            h1 {
              font-size: 4rem;
              line-height: 0.9;
              margin: 3rem 0;
            }
            h2 {
              font-size: 3.3rem;
              color: #333;
              line-height: 3.1rem;
              margin: 0;
            }
            .margin-bottom-big {
              margin-bottom: 4.5rem;
            }
            h3 {
              font-size: 2rem;
            }

            h2.white {
              color: #fff;
            }

            a {
              text-decoration: none;
              font-weight: bold;
              color: #56e;
            }
            pre,
            code {
              max-width: 100%;
            }
            pre {
              white-space: pre-wrap;
              line-height: 1.5rem;
            }
          `}
        />

        <Header />
        <section>
          <Component {...pageProps} />
        </section>
      </div>
    );
  }
}

export default MyApp;
