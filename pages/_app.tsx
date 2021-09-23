import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../store/index";
import { Provider } from "react-redux";
import { Fragment } from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
export default App;
