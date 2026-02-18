import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines tailwind classes and merges conflicts
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}