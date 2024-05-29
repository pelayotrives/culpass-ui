import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const InputStyles = cva([
  "w-full",
  "rounded",
  "border",
  "border-quaternary-4",
  "outline-none",
  "font-nunito",
  "text-tertiary-1",
  "p-3",
  "transition-all",
  "duration-150",
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
]);

type InputProps = ComponentProps<"input"> & VariantProps<typeof InputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        disabled={false}
        type="text"
        autoComplete="off"
        className={cn(InputStyles({ className }))}
        {...props}
      />
    );
  }
);
