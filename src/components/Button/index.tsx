import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { IconType } from "react-icons";
import {
  FaAngleUp,
  FaAngleRight,
  FaAngleDown,
  FaAngleLeft,
  FaArrowRotateRight,
  FaArrowRotateLeft,
  FaPlus,
  FaMinus,
  FaCheck,
  FaBan,
  FaCalendarCheck,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaUser,
  FaBookmark,
  FaLocationDot,
} from "react-icons/fa6";

const iconMap: { [key: string]: IconType | null } = {
  none: null,
  add: FaPlus,
  delete: FaMinus,
  check: FaCheck,
  cancel: FaBan,
  calendar: FaCalendarCheck,
  view: FaEye,
  hide: FaEyeSlash,
  mail: FaEnvelope,
  user: FaUser,
  bookmark: FaBookmark,
  location: FaLocationDot,
  up: FaAngleUp,
  right: FaAngleRight,
  down: FaAngleDown,
  left: FaAngleLeft,
  refreshRight: FaArrowRotateRight,
  refreshLeft: FaArrowRotateLeft,
};

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
    "flex",
    "items-center",
    "justify-center",
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
      fontSize: {
        sm: "text-paragraph-sm",
        regular: "text-paragraph",
        md: "text-paragraph-md",
        lg: "text-paragraph-lg",
        xl: "text-paragraph-xl",
      },
      colorScheme: {
        solid1:"bg-primary-1 text-white hover:bg-primary-4 active:bg-primary-6",
        solid2:"bg-secondary-1 text-white hover:bg-secondary-4 active:bg-secondary-6",
        solid3:"bg-tertiary-1 text-white hover:bg-tertiary-8 active:bg-tertiary-10",
        outline1:"bg-transparent text-primary-1 border-primary-1 hover:text-primary-4 hover:border-primary-4 active:text-primary-6 active:border-primary-6",
        outline2:"bg-transparent text-secondary-1 border-secondary-1 hover:text-secondary-4 hover:border-secondary-4 active:text-secondary-6 active:border-secondary-6",
        outline3:"bg-transparent text-tertiary-1 border-tertiary-1 hover:text-tertiary-8 hover:border-tertiary-8 active:text-tertiary-10 active:border-tertiary-10",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      fontSize: "regular",
      colorScheme: "solid1",
      iconPosition: "left",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof ButtonStyles> & {
  icon?: keyof typeof iconMap;
  iconPosition?: "left" | "right";
};


export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, fontSize, colorScheme, icon, iconPosition, className, children, ...props }, ref) => {
    const IconComponent = icon && icon !== 'none' ? iconMap[icon] : null;
    return (
      <button
        ref={ref}
        className={cn(ButtonStyles({ variant, size, fontSize, colorScheme, iconPosition }), className)}
        {...props}
      >
        {IconComponent && <IconComponent className={iconPosition === "left" ? "mr-2" : "ml-2"} />}
        {children}
      </button>
    );
  }
);

export const Icons = Object.keys(iconMap);
