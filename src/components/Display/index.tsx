import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

const DisplayStyles = cva("", {
  variants: {
    size: {
      display1: "text-display-xl",
      display2: "text-display-lg",
      display3: "text-display-md",
      display4: "text-display",
      display5: "text-display-sm"
    },
    lineHeight: {
      1: "leading-1",
      2: "leading-2",
      3: "leading-3",
      4: "leading-4",
      5: "leading-5",
      6: "leading-6",
      7: "leading-7",
      8: "leading-8",
      9: "leading-9",
      10: "leading-10",
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
    size: "display4",
    align: "left",
    lineHeight: 2,
    fontFamily: "nunito",
    weight: "semibold",
    italic: false,
    underline: false,
  },
});

type DisplayProps = ComponentProps<"p"> & VariantProps<typeof DisplayStyles>;

export const Display = forwardRef<HTMLParagraphElement, DisplayProps>(
  ({ className, align, size, fontFamily, lineHeight, weight, italic, underline, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          DisplayStyles({
            align,
            size,
            fontFamily,
            lineHeight,
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
