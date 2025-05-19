import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
