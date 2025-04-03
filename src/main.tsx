import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Button } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="margin-auto flex items-end justify-center gap-4 p-16">
      <Button size="xl">Hello world!</Button>
      <Button size="l">Hello world!</Button>
      <Button size="m">Hello world!</Button>
      <Button size="s">Hello world!</Button>
    </div>
  </StrictMode>,
);
