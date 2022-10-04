import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// redux
import store from "./store";
import { Provider } from "react-redux";
// css
import "./assets/css/styles.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
