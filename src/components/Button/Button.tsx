// Lib
// -----------------------------------------------------------------------------
import type { FC, ReactNode } from "react";
import clsx from "clsx";

// Props
// -----------------------------------------------------------------------------
export interface ButtonProps {
  children: ReactNode;
  className?: string;
}

/**
 * Button component.
 */
export const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={clsx(
        "cursor-pointer rounded bg-blue-500 px-4 py-2 text-base text-white transition hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300",
        className,
      )}
    >
      {children}
    </button>
  );
};
