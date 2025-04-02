// Lib
// -----------------------------------------------------------------------------
import type { FC, ReactNode } from "react";

// Props
// -----------------------------------------------------------------------------
export interface ButtonProps {
  children: ReactNode;
}

/**
 * Button component.
 */
export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-base text-white transition hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300">
      {children}
    </button>
  );
};
