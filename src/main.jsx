import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DocsProvider } from "./context/DocsContext";
import { ScrollPositionProvider } from "./context/ScrollPositionContext";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
// const router=createBrowserRouter([
//   {
//     path:"/",
//     // errorElement:,
//     element: <App />,
//     children:[{
//       path:'documentation',
//       element: <SidebarLayoutPage />
//     }]
//   }
// ])
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ScrollPositionProvider>
      <DocsProvider>
        <App />
        {/* <RouterProvider router={router}/> */}
      </DocsProvider>
    </ScrollPositionProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
