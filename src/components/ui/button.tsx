import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "default" | "outline" | "ghost";
type Size = "default" | "sm" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

const variantClasses: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const sizeClasses: Record<Size, string> = {
  default: "h-10 px-4 py-2 text-sm rounded-md",
  sm: "h-8 px-3 text-xs rounded-md",
  lg: "h-11 px-6 text-base rounded-md",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  )
);
Button.displayName = "Button";
