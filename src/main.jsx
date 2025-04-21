import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./assets/global.css";

import "./i18n";

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
