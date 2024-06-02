import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const InputStyles = cva([
  "min-w-24",
  "rounded",
  "border",
  "border-quaternary-4",
  "outline-none",
  "font-nunito",
  "text-tertiary-1",
  "p-3",
  "transition-all",
  "duration-150",
  "file:mr-5",
  "file:bg-tertiary-1",
  "file:hover:bg-tertiary-8",
  "file:active:bg-tertiary-10",
  "file:disabled:bg-quaternary-10",
  "file:disabled:outline",
  "file:disabled:outline-quaternary-6",
  "file:disabled:text-quaternary-4",
  "file:disabled:cursor-not-allowed",
  "file:cursor-pointer",
  "file:transition-all",
  "file:duration-300",
  "file:border-0",
  "file:px-4",
  "file:py-2.5",
  "file:rounded",
  "file:font-nunito",
  "file:text-paragraph",
  "file:text-white",
  "placeholder:text-paragraph",
  "placeholder:font-nunito",
  "placeholder:text-tertiary-12",
  "placeholder:text-tertiary-12",
  "disabled:bg-quaternary-10",
  "disabled:border-quaternary-6",
  "disabled:placeholder:text-quaternary-4",
  "disabled:cursor-not-allowed",
  "focus:outline-none",
  "focus:border-secondary-4",
  "focus:placeholder:text-secondary-4",
  "invalid:bg-transparent",
  "invalid:outline-none",
  "invalid:border-error",
  "invalid:placeholder:text-error",
],
{
  variants: {
    fontSize: {
      paragraph1: "text-paragraph-xl",
      paragraph2: "text-paragraph-lg",
      paragraph3: "text-paragraph-md",
      paragraph4: "text-paragraph",
      paragraph5: "text-paragraph-sm",
    }
  },
  defaultVariants: {
    fontSize: "paragraph4",
  },
});

type InputProps = ComponentProps<"input"> & VariantProps<typeof InputStyles> & {
  type?: "text" | "date" | "email" | "number" | "tel" | "password" | "file" | "hidden" | "file";
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ fontSize, type = "text", className, disabled, readOnly, required, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(InputStyles({ fontSize, className }))}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        {...props}
      />
    );
  }
);
