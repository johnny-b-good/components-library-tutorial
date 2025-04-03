import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Button } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="margin-auto flex flex-col gap-8 p-16">
      <div className="flex items-end justify-center gap-4">
        <Button variant="primary" size="xl">
          Hello world!
        </Button>
        <Button variant="primary" size="l">
          Hello world!
        </Button>
        <Button variant="primary" size="m">
          Hello world!
        </Button>
        <Button variant="primary" size="s">
          Hello world!
        </Button>
      </div>

      <div className="flex items-end justify-center gap-4">
        <Button variant="primary">Hello world!</Button>
        <Button variant="default">Hello world!</Button>
        <Button variant="text">Hello world!</Button>
      </div>
    </div>
  </StrictMode>,
);
