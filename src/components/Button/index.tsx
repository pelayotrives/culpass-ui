import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const ButtonStyles = cva(
  [
    "w-full",
    "rounded",
    "font-semibold",
    "font-nunito",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:bg-opacity-55",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
      },
      size: {
        sm: "px-4 py-2 text-paragraph",
        md: "px-4 py-2 text-paragraph",
        lg: "px-6 py-3 text-paragraph-md",
      },
      colorscheme: {
        primary: "text-white",
        secondary: "text-white",
        tertiary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-1 hover:bg-primary-4 active:bg-primary-6",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "bg-transparent text-primary-1 border-primary-1 hover:text-primary-4 hover:border-primary-4 active:text-primary-6 active:border-primary-6",
      },
      {
        variant: "solid",
        colorscheme: "secondary",
        className: "bg-secondary-1 hover:bg-secondary-4 active:bg-secondary-6",
      },
      {
        variant: "outline",
        colorscheme: "secondary",
        className:
          "bg-transparent text-secondary-1 border-secondary-1 hover:text-secondary-4 hover:border-secondary-4 active:text-secondary-6 active:border-secondary-6",
      },
      {
        variant: "solid",
        colorscheme: "tertiary",
        className: "bg-tertiary-1 hover:bg-tertiary-8 active:bg-tertiary-10",
      },
      {
        variant: "outline",
        colorscheme: "tertiary",
        className:
          "bg-transparent text-tertiary-1 border-tertiary-1 hover:text-tertiary-8 hover:border-tertiary-8 active:text-tertiary-10 active:border-tertiary-10",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof ButtonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(ButtonStyles({ variant, size, colorscheme, className }))}
        {...props}
      />
    );
  }
);
