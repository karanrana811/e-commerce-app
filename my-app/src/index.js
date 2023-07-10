import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom';
import { DataContext, DataContextProvider } from "./contexts/eCommerceContext";

// Call make Server
makeServer();

export {DataContext};
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <DataContextProvider>
      <App />
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
