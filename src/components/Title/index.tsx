import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/utils/types";

const TitleStyles = cva(["font-montserrat"], {
  variants: {
    size: {
      title1: "text-title-xl",
      title2: "text-title-lg",
      title3: "text-title-md",
      title4: "text-title",
      title5: "text-title-sm",
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
      false: "not-italic"
    },
    underline: {
      true: "underline underline-offset-2",
      false: "no-underline"
    },
  },
  defaultVariants: {
    size: "title4",
    align: "left",
    weight: "semibold",
    italic: false,
    underline: false
  },
});

type TitleProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof TitleStyles>
>;

type TitleComponent = <C extends React.ElementType = "span">(
  props: TitleProps<C>
) => React.ReactElement | null;

// @ts-expect-error - unexpected typing errors
export const Title: TitleComponent = forwardRef(
  <C extends React.ElementType = "span">(
    {
      as,
      align,
      size,
      italic,
      underline,
      weight,
      className,
      ...props
    }: TitleProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "span";

    return (
      <Component
        ref={ref}
        className={cn(
          TitleStyles({
            size,
            weight,
            italic,
            underline,
            align,
            className,
          })
        )}
        {...props}
      />
    );
  }
);