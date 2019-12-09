import React from "react";
import App from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import initStore from "../src/store";

class EnhancedApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <title>redux shit</title>
      </Head>
    );
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Provider store={store}>
          {this.renderHead()}
          <CssBaseline />
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(initStore)(EnhancedApp);
