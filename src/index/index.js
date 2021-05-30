import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

// In Your Main JS File With Other Imports
import "./path/to/reseter.css";

import "./index.css";
import App from "./App";
import store from "./store";

const rootElement = document.getElementById("root");
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
