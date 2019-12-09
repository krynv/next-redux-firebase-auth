import React from "react";
import App from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import initStore from "../src/store";
import theme from "../src/theme";

class EnhancedApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
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
          <ThemeProvider theme={theme}>
            {this.renderHead()}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

export default withRedux(initStore)(EnhancedApp);
