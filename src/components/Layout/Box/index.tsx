import { forwardRef } from "react";
import { cn } from "@/utils";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/utils/types";

type BoxProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C>;

type BoxComponent = <C extends React.ElementType = "div">(
  props: BoxProps<C>
) => React.ReactElement | null;

// @ts-expect-error - unexpected typing errors
export const Box: BoxComponent = forwardRef(
  <C extends React.ElementType = "div">(
    { as, className, ...props }: BoxProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "div";

    return (
      <Component
        ref={ref}
        className={cn(className)}
        {...props}
      />
    );
  }
);
