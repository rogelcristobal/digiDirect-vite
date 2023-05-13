import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DBQueryContextProvider } from "./context/DBQueryContext";
import { CollectionContextProvider } from "./context/CollectionContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <DBQueryContextProvider>
      <CollectionContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </CollectionContextProvider>
    </DBQueryContextProvider>
  // </React.StrictMode>
);
