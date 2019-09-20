import React from "react";

export default function Home() {
  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap");

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
        }
        body {
          padding: 1rem;
          font-family: "IBM Plex Sans", sans-serif;
        }
      `}</style>
      <h1>Stephen Vector</h1>
      <p>Fullstack Web Developer</p>
      <p>New York City, NY</p>
    </>
  );
}
