import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Button } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="margin-auto flex justify-center p-16">
      <Button>Hello world!</Button>
    </div>
  </StrictMode>,
);
