import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function TailwindMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
