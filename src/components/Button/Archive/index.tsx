import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const ButtonStyles = cva(
  [
    "rounded",
    "font-semibold",
    "font-nunito",
    "transition-all",
    "duration-300",
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
        sm: "w-fit px-4 py-2",
        md: "w-fit px-4 py-2",
        lg: "w-fit px-6 py-3",
        full: "w-full px-4 py-3",
      },
      colorScheme: {
        primary: "text-white",
        secondary: "text-white",
        tertiary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-primary-1 hover:bg-primary-4 active:bg-primary-6",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className:
          "bg-transparent text-primary-1 border-primary-1 hover:text-primary-4 hover:border-primary-4 active:text-primary-6 active:border-primary-6",
      },
      {
        variant: "solid",
        colorScheme: "secondary",
        className: "bg-secondary-1 hover:bg-secondary-4 active:bg-secondary-6",
      },
      {
        variant: "outline",
        colorScheme: "secondary",
        className:
          "bg-transparent text-secondary-1 border-secondary-1 hover:text-secondary-4 hover:border-secondary-4 active:text-secondary-6 active:border-secondary-6",
      },
      {
        variant: "solid",
        colorScheme: "tertiary",
        className: "bg-tertiary-1 hover:bg-tertiary-8 active:bg-tertiary-10",
      },
      {
        variant: "outline",
        colorScheme: "tertiary",
        className:
          "bg-transparent text-tertiary-1 border-tertiary-1 hover:text-tertiary-8 hover:border-tertiary-8 active:text-tertiary-10 active:border-tertiary-10",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof ButtonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorScheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(ButtonStyles({ variant, size, colorScheme}), className)}
        {...props}
      />
    );
  }
);
