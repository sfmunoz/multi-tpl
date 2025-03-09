import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DataTableDemo from "./components/DataTableDemo/DataTableDemo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataTableDemo />
  </StrictMode>
);
