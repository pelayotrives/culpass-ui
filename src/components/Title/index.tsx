import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/utils/types";

type AllowedTitleElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const TitleStyles = cva(["font-montserrat"], {
  variants: {
    fontSize: {
      title1: "text-title1",
      title2: "text-title2",
      title3: "text-title3",
      title4: "text-title4",
      title5: "text-title5",
      title6: "text-title6",
      title7: "text-title7",
      title8: "text-title8",
      title9: "text-title9",
      title10: "text-title10",
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
    fontSize: "title4",
    lineHeight: 2,
    align: "left",
    weight: "semibold",
    italic: false,
    underline: false
  },
});

type TitleProps<C extends AllowedTitleElements> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof TitleStyles>
>;

type TitleComponent = <C extends AllowedTitleElements = "h2">(
  props: TitleProps<C>
) => React.ReactElement | null;

// @ts-expect-error - unexpected typing errors
export const Title: TitleComponent = forwardRef(
  <C extends AllowedTitleElements = "h2">(
    {
      as,
      align,
      fontSize,
      lineHeight,
      italic,
      underline,
      weight,
      className,
      ...props
    }: TitleProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "h2";

    return (
      <Component ref={ref}
        className={cn(TitleStyles({fontSize, weight, lineHeight, italic, underline, align, className,}))}
        {...props}
      />
    );
  }
);