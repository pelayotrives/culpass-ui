import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/utils/types";

type AllowedDisplayElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const DisplayStyles = cva(["font-montserrat"], {
  variants: {
    fontSize: {
      display1: "text-display1",
      display2: "text-display2",
      display3: "text-display3",
      display4: "text-display4",
      display5: "text-display5",
      display6: "text-display6",
      display7: "text-display7",
      display8: "text-display8",
      display9: "text-display9",
      display10: "text-display10",
    },
    fontFamily: {
      nunito: "font-nunito",
      montserrat: "font-montserrat",
      instrument: "font-instrument",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
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
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    italic: {
      true: "italic",
      false: "not-italic"
    },
    underline: {
      true: "underline underline-offset-2",
      false: "no-underline"
    },
  },
  defaultVariants: {
    fontSize: "display6",
    fontFamily: "montserrat",
    lineHeight: 2,
    align: "left",
    weight: "semibold",
    italic: false,
    underline: false
  },
});

type DisplayProps<C extends AllowedDisplayElements> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof DisplayStyles>
>;

type DisplayComponent = <C extends AllowedDisplayElements = "h2">(
  props: DisplayProps<C>
) => React.ReactElement | null;

// @ts-expect-error - unexpected typing errors
export const Display: DisplayComponent = forwardRef(
  <C extends AllowedDisplayElements = "h2">(
    {
      as,
      align,
      fontSize,
      fontFamily,
      lineHeight,
      italic,
      underline,
      weight,
      className,
      ...props
    }: DisplayProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "h2";

    return (
      <Component ref={ref}
        className={cn(DisplayStyles({fontSize, fontFamily, weight, lineHeight, italic, underline, align, className,}))}
        {...props}
      />
    );
  }
);
