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
            @font-face {
              font-family: "Jost*";
              src: url("/static/Jost-Bold.eot");
              src: url("/static/Jost-Bold.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-Bold.woff2") format("woff2"),
                url("/static/Jost-Bold.woff") format("woff"),
                url("/static/Jost-Bold.ttf") format("truetype");
              font-weight: bold;
              font-style: normal;
            }

            @font-face {
              font-family: "Jost* 500";
              src: url("/static/Jost-Medium.eot");
              src: url("/static/Jost-Medium.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-Medium.woff2") format("woff2"),
                url("/static/Jost-Medium.woff") format("woff"),
                url("/static/Jost-Medium.ttf") format("truetype");
              font-weight: 500;
              font-style: normal;
            }

            @font-face {
              font-family: "Jost* 900";
              src: url("/static/Jost-Black.eot");
              src: url("/static/Jost-Black.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-Black.woff2") format("woff2"),
                url("/static/Jost-Black.woff") format("woff"),
                url("/static/Jost-Black.ttf") format("truetype");
              font-weight: 900;
              font-style: normal;
            }

            @font-face {
              font-family: "Jost* 100 Hairline";
              src: url("/static/Jost-HairlineItalic.eot");
              src: url("/static/Jost-HairlineItalic.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-HairlineItalic.woff2") format("woff2"),
                url("/static/Jost-HairlineItalic.woff") format("woff"),
                url("/static/Jost-HairlineItalic.ttf") format("truetype");
              font-weight: 100;
              font-style: italic;
            }

            @font-face {
              font-family: "Jost*";
              src: url("/static/Jost-BookItalic.eot");
              src: url("/static/Jost-BookItalic.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-BookItalic.woff2") format("woff2"),
                url("/static/Jost-BookItalic.woff") format("woff"),
                url("/static/Jost-BookItalic.ttf") format("truetype");
              font-weight: normal;
              font-style: italic;
            }

            @font-face {
              font-family: "Jost* 200";
              src: url("/static/Jost-Thin.eot");
              src: url("/static/Jost-Thin.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-Thin.woff2") format("woff2"),
                url("/static/Jost-Thin.woff") format("woff"),
                url("/static/Jost-Thin.ttf") format("truetype");
              font-weight: 100;
              font-style: normal;
            }

            @font-face {
              font-family: "Jost* 100 Hairline";
              src: url("/static/Jost-Hairline.eot");
              src: url("/static/Jost-Hairline.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-Hairline.woff2") format("woff2"),
                url("/static/Jost-Hairline.woff") format("woff"),
                url("/static/Jost-Hairline.ttf") format("truetype");
              font-weight: 100;
              font-style: normal;
            }

            @font-face {
              font-family: "Jost* 600 Semi";
              src: url("/static/Jost-Semi.eot");
              src: url("/static/Jost-Semi.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-Semi.woff2") format("woff2"),
                url("/static/Jost-Semi.woff") format("woff"),
                url("/static/Jost-Semi.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: "Jost* 600 Semi";
              src: url("/static/Jost-SemiItalic.eot");
              src: url("/static/Jost-SemiItalic.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-SemiItalic.woff2") format("woff2"),
                url("/static/Jost-SemiItalic.woff") format("woff"),
                url("/static/Jost-SemiItalic.ttf") format("truetype");
              font-weight: normal;
              font-style: italic;
            }

            @font-face {
              font-family: "Jost* 900";
              src: url("/static/Jost-BlackItalic.eot");
              src: url("/static/Jost-BlackItalic.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-BlackItalic.woff2") format("woff2"),
                url("/static/Jost-BlackItalic.woff") format("woff"),
                url("/static/Jost-BlackItalic.ttf") format("truetype");
              font-weight: 900;
              font-style: italic;
            }

            @font-face {
              font-family: "Jost* 300";
              src: url("/static/Jost-Light.eot");
              src: url("/static/Jost-Light.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-Light.woff2") format("woff2"),
                url("/static/Jost-Light.woff") format("woff"),
                url("/static/Jost-Light.ttf") format("truetype");
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: "Jost* 800";
              src: url("/static/Jost-HeavyItalic.eot");
              src: url("/static/Jost-HeavyItalic.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-HeavyItalic.woff2") format("woff2"),
                url("/static/Jost-HeavyItalic.woff") format("woff"),
                url("/static/Jost-HeavyItalic.ttf") format("truetype");
              font-weight: 900;
              font-style: italic;
            }

            @font-face {
              font-family: "Jost* 300";
              src: url("/static/Jost-LightItalic.eot");
              src: url("/static/Jost-LightItalic.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-LightItalic.woff2") format("woff2"),
                url("/static/Jost-LightItalic.woff") format("woff"),
                url("/static/Jost-LightItalic.ttf") format("truetype");
              font-weight: 300;
              font-style: italic;
            }

            @font-face {
              font-family: "Jost* 200";
              src: url("/static/Jost-ThinItalic.eot");
              src: url("/static/Jost-ThinItalic.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-ThinItalic.woff2") format("woff2"),
                url("/static/Jost-ThinItalic.woff") format("woff"),
                url("/static/Jost-ThinItalic.ttf") format("truetype");
              font-weight: 100;
              font-style: italic;
            }

            @font-face {
              font-family: "Jost*";
              src: url("/static/Jost-Book.eot");
              src: url("/static/Jost-Book.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-Book.woff2") format("woff2"),
                url("/static/Jost-Book.woff") format("woff"),
                url("/static/Jost-Book.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: "Jost* 500";
              src: url("/static/Jost-MediumItalic.eot");
              src: url("/static/Jost-MediumItalic.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-MediumItalic.woff2") format("woff2"),
                url("/static/Jost-MediumItalic.woff") format("woff"),
                url("/static/Jost-MediumItalic.ttf") format("truetype");
              font-weight: 500;
              font-style: italic;
            }

            @font-face {
              font-family: "Jost*";
              src: url("/static/Jost-BoldItalic.eot");
              src: url("/static/Jost-BoldItalic.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-BoldItalic.woff2") format("woff2"),
                url("/static/Jost-BoldItalic.woff") format("woff"),
                url("/static/Jost-BoldItalic.ttf") format("truetype");
              font-weight: bold;
              font-style: italic;
            }

            @font-face {
              font-family: "Jost* 800";
              src: url("/static/Jost-Heavy.eot");
              src: url("/static/Jost-Heavy.eot?#iefix")
                  format("embedded-opentype"),
                url("/static/Jost-Heavy.woff2") format("woff2"),
                url("/static/Jost-Heavy.woff") format("woff"),
                url("/static/Jost-Heavy.ttf") format("truetype");
              font-weight: 900;
              font-style: normal;
            }

            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }
            body {
              font-family: "Jost*";
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
