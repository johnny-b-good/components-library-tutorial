// Lib
// -----------------------------------------------------------------------------
import type { FC, ReactNode } from "react";
import clsx from "clsx";

// Props
// -----------------------------------------------------------------------------
export interface ButtonProps {
  children: ReactNode;
  className?: string;
  size?: "s" | "m" | "l" | "xl";
}

/**
 * Button component.
 */
export const Button: FC<ButtonProps> = ({
  children,
  className,
  size = "m",
}) => {
  return (
    <button
      className={clsx(
        "cursor-pointer rounded bg-blue-500 font-semibold text-white transition hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300",
        size === "s" && "px-2 py-1.5 text-xs",
        size === "m" && "px-2.5 py-2 text-sm",
        size === "l" && "px-4 py-3 text-base",
        size === "xl" && "px-8 py-4 text-xl",
        className,
      )}
    >
      {children}
    </button>
  );
};
