import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "default" | "lg" | "sm";
  variant?: "default" | "outline";
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-10 px-4 py-2 text-sm",
  lg: "h-11 px-8 text-base",
  sm: "h-9 px-3 text-sm",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-primary text-white hover:opacity-95",
  outline: "border border-current bg-transparent",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = "default", type = "button", variant = "default", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";
