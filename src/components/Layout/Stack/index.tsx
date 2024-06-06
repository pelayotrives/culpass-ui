import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/utils/types";

const StackStyles = cva("", {
  variants: {
    position: {
      vertical: "flex flex-col",
      verticalRev: "flex flex-col-reverse",
      horizontal: "flex flex-row",
      horizontalRev: "flex flex-row-reverse",
      block: "block",
      inline: "inline",
      none: "hidden",
    },
  },
  defaultVariants: {
    position: "horizontal",
  },
});

type StackProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof StackStyles>
>;

type StackComponent = <C extends React.ElementType = "div">(
  props: StackProps<C>
) => React.ReactElement | null;

// @ts-expect-error - unexpected typing errors
export const Stack: StackComponent = forwardRef(
  <C extends React.ElementType = "div">(
    { as, position, className, ...props }: StackProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "div";

    return (
      <Component
        ref={ref}
        className={cn(StackStyles({ position }), className)}
        {...props}
      />
    );
  }
);