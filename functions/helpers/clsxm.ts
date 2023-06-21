import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge classes with tailwind-merge, combonded with clsx
export default function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
