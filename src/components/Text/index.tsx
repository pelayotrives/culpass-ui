import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const TextStyles = cva("", {
  variants: {
    size: {
      paragraph1: "text-paragraph-xl",
      paragraph2: "text-paragraph-lg",
      paragraph3: "text-paragraph-md",
      paragraph4: "text-paragraph",
      paragraph5: "text-paragraph-sm",
    },
    fontFamily: {
      nunito: "font-nunito",
      montserrat: "font-montserrat",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    italic: {
      true: "italic",
      false: "not-italic",
    },
    underline: {
      true: "underline underline-offset-2",
      false: "no-underline",
    },
  },
  defaultVariants: {
    size: "paragraph4",
    align: "left",
    fontFamily: "nunito",
    weight: "semibold",
    italic: false,
    underline: false,
  },
});

type TextProps = ComponentProps<"p"> & VariantProps<typeof TextStyles>;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, align, size, fontFamily, weight, italic, underline, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          TextStyles({
            align,
            size,
            fontFamily,
            weight,
            italic,
            underline,
          }),
          className
        )}
        {...props}
      />
    );
  }
);
