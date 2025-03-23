import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DynamicData from "./components/DynamicData/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <DynamicData />
  </StrictMode>
);
