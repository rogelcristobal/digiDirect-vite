import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DocsProvider } from "./context/DocsContext";
import { ScrollPositionProvider } from "./context/ScrollPositionContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ScrollPositionProvider>
    <DocsProvider>
      <App />
    </DocsProvider>
  </ScrollPositionProvider>
  // </React.StrictMode>
);
