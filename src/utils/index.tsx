import clsx, {ClassValue} from "clsx";
import { twMerge } from "tailwind-merge";

// Apply the CLSX function to all the classes and merge them together.
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes))
