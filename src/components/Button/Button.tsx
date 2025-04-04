// Lib
// -----------------------------------------------------------------------------
import type { FC, ReactNode } from "react";
import { cva } from "class-variance-authority";
import {
  Button as HeadlessButton,
  type ButtonProps as HeadlessButtonProps,
} from "@headlessui/react";

// Props
// -----------------------------------------------------------------------------
export interface ButtonProps extends HeadlessButtonProps {
  children: ReactNode;
  className?: string;
  size?: "s" | "m" | "l" | "xl";
  variant?: "primary" | "default" | "text";
  color?: "default" | "danger";
}

// Consts
// -----------------------------------------------------------------------------
const buttonStyles = cva(
  "cursor-pointer rounded border font-semibold transition data-[focus]:ring-4 data-[focus]:outline-none disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-300",
  {
    variants: {
      size: {
        s: "px-2 py-1.5 text-xs",
        m: "px-2.5 py-2 text-sm",
        l: "px-4 py-3 text-base",
        xl: "px-8 py-4 text-xl",
      },
      variant: {
        primary: "text-white",
        default: "bg-transparent",
        text: "border-transparent bg-transparent",
      },
      color: {
        default: "data-[focus]:ring-blue-100",
        danger: "data-[focus]:ring-red-100",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        color: "default",
        className: "border-blue-500 bg-blue-500 data-[hover]:bg-blue-400",
      },
      {
        variant: "primary",
        color: "danger",
        className: "border-red-500 bg-red-500 data-[hover]:bg-red-400",
      },
      {
        variant: "default",
        color: "default",
        className: "border-blue-500 text-blue-500 data-[hover]:bg-blue-50",
      },
      {
        variant: "default",
        color: "danger",
        className: "border-red-500 text-red-500 data-[hover]:bg-red-50",
      },
      {
        variant: "text",
        color: "default",
        className: "text-blue-500 data-[hover]:bg-blue-50",
      },
      {
        variant: "text",
        color: "danger",
        className: "text-red-500 data-[hover]:bg-red-50",
      },
    ],
    defaultVariants: {
      size: "m",
      variant: "default",
      color: "default",
    },
  },
);

/**
 * Button component.
 */
export const Button: FC<ButtonProps> = ({
  children,
  className,
  size = "m",
  variant = "default",
  color = "default",
  ...otherProps
}) => {
  return (
    <HeadlessButton
      className={buttonStyles({
        size,
        variant,
        color,
        className,
      })}
      {...otherProps}
    >
      {children}
    </HeadlessButton>
  );
};
