import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DocsProvider } from "./context/DocsContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DocsProvider>
      <App />
    </DocsProvider>
  </React.StrictMode>
);
