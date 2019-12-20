import React from "react";
import App from "next/app";
import Header from "../components/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="wrapper">
        <Header />
        <section>
          <Component {...pageProps} />
        </section>
      </div>
    );
  }
}

export default MyApp;
