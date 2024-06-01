import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { IconType } from "react-icons";
import {
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
  FaAngleUp,
  FaAngleRight,
  FaAngleDown,
  FaAngleLeft,
  FaArrowRotateRight,
  FaArrowRotateLeft,
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
    "disabled:bg-quaternary-10",
    "disabled:border",
    "disabled:border-quaternary-6",
    "disabled:text-quaternary-4",
    "disabled:cursor-not-allowed",
    "flex",
    "items-center",
    "justify-center",
  ],
  {
    variants: {
      size: {
        sm: "w-fit px-4 py-2 text-base",
        md: "w-fit px-5 py-2.5 text-lg",
        lg: "w-fit px-6 py-3 text-xl",
        full: "w-full px-5 py-2.5 text-lg",
      },
      adapt: {
        auto: "min-h-0",
        calibrate: "min-h-full"
      },
      intent: {
        solid1: "bg-primary-1 text-white hover:bg-primary-4 active:bg-primary-6",
        solid2: "bg-secondary-1 text-white hover:bg-secondary-4 active:bg-secondary-6",
        solid3: "bg-tertiary-1 text-white hover:bg-tertiary-8 active:bg-tertiary-10",
        outline1: "border bg-transparent text-primary-1 border-primary-1 hover:text-primary-4 hover:border-primary-4 active:text-primary-6 active:border-primary-6",
        outline2: "border bg-transparent text-secondary-1 border-secondary-1 hover:text-secondary-4 hover:border-secondary-4 active:text-secondary-6 active:border-secondary-6",
        outline3: "border bg-transparent text-tertiary-1 border-tertiary-1 hover:text-tertiary-8 hover:border-tertiary-8 active:text-tertiary-10 active:border-tertiary-10",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      size: "md",
      intent: "solid1",
      iconPosition: "left",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof ButtonStyles> & {
  icon?: keyof typeof iconMap;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, intent, adapt, icon, iconPosition, type, className, children, ...props }, ref) => {
    const IconComponent = icon && icon !== 'none' ? iconMap[icon] : null;
    return (
      <button
        type={type}
        ref={ref}
        className={cn(ButtonStyles({ size, intent, adapt, iconPosition }), className)}
        {...props}
      >
        {IconComponent && <IconComponent className={iconPosition === "left" ? "mr-2" : "ml-2"} />}
        {children}
      </button>
    );
  }
);

export const Icons = Object.keys(iconMap);
