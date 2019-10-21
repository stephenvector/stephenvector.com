import React from "react";
import App from "next/app";
import { Global, css } from "@emotion/core";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="wrapper">
        <Global
          styles={css`
            @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap');
            *,
            *:before,
            *:after {
              box-shadow: inherit;
            }
            body {
              font-family: 'Source Sans Pro', sans-serif;
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
            h1 {
              margin: 0;
              line-height: 3rem;
              font-size: 3rem;
              font-weight: 800;
              letter-spacing: -0.03em;
            }
            @keyframes blink {
              0% {
                color: #fff;
              }
              50% {
                color: #000;
              }
              100% {
                color: #fff;
              }
            }

            h1 span.stephen {
              display: block;
            }
            h1 span.space {
              color: #fff;
              animation-name: blink;
              animation-duration: 1200ms;
              animation-iteration-count: 3;
              font-weight: 400;
            }
            .wrapper {
              padding: 1rem;
              max-width: 32rem;
              margin: 0 auto;
            }
            header {
              padding-top:3rem;
            }

            @media screen and (min-width: 44rem) {
              .wrapper {
                margin: 0 0 0 12rem;
              }
            }

            a {color: #34495e}
          `}
        />

        <header>
          <h1>
            <span className="stephen">Stephen</span> Vector
            <span className="space">_</span>
          </h1>

          <h2>Frontend Developer</h2>
          
          <p><a href="https://github.com/stephenvector/" target="_blank">GitHub</a></p>
          
          <p><a href="https://gitlab.com/stephenvector/" target="_blank">GitLab</a></p>

          <p>
            I'm a web developer that specializes in writing performant frontend
            applications. I live in New York City, NY with my wife Lia and our
            pet roomba, Ruby.
          </p>

        </header>
        <section>
          <Component {...pageProps} />
        </section>
      </div>
    );
  }
}

export default MyApp;
