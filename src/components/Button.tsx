import React, { forwardRef } from "react";
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      onClick,
      type = "button",
      className = "",
      disabled = false,
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 rounded-xl";
    const variantClasses = {
      primary:
        "bg-primary-500 text-white hover:bg-primary-600 hover:text-white focus:ring-primary-500/30",
      secondary:
        "bg-transparent border-2 border-primary-400 text-primary-500 hover:bg-primary-50/50 hover:text-primary-600 hover:border-primary-500 focus:ring-primary-400/30",
      outline:
        "bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-600 focus:ring-primary-500/30",
      ghost:
        "bg-transparent border-2 border-primary-500/30 text-primary-600 hover:bg-primary-50/30 hover:text-primary-700 hover:border-primary-500/70 focus:ring-primary-500/20",
    };
    const sizeClasses = {
      sm: "text-sm px-4 py-2 gap-2",
      md: "text-base px-6 py-2.5 gap-2.5",
      lg: "text-lg px-8 py-3 gap-3",
    };
    const widthClass = fullWidth ? "w-full max-w-[65%]" : "";
    const shadowClass =
      variant === "ghost" || variant === "secondary"
        ? ""
        : "shadow-sm hover:shadow-md";
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
    return (
      <button
        ref={ref}
        type={type}
        className={`relative z-10 ${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${shadowClass} outline-none ring-primary-300 focus:ring-4 border-2 border-primary-200 hover:border-primary-600 ${className} ${disabledClasses}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
