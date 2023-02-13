import * as React from "react";
import "normalize.css";
import "../styles/style.css";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
