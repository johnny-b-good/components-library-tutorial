import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="text-4xl text-blue-500 underline uppercase my-8 text-center font-bold">
      Hello world!
    </div>
  </StrictMode>,
);
