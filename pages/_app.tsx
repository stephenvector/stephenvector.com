import React from "react";
import App from "next/app";
import { Global, css } from "@emotion/core";
import Header from "../components/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="wrapper">
        <Global
          styles={css`
            *,
            *:before,
            *:after {
              box-shadow: inherit;
            }
            body {
              font-family: "Jost*";
              margin: 0;
              padding: 0;
            }
            html {
              margin: 0;
              padding: 0;
              background: #fff;
              color: #000;
              box-sizing: border-box;
              font-size: 20px;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              margin: 0;
              font-weight: 500;
            }
            h1 {
              font-size: 4rem;
              line-height: 0.9;
              margin: 3rem 0;
            }
            h2 {
              font-size: 2rem;
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
