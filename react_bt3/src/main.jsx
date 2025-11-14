import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import 'flowbite';
createRoot(document.getElementById("root")).render(
  <>
    <App></App>
  </>
);
