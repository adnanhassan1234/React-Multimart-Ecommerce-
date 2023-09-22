import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style/global.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);
