import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { getHighlighter, loadTheme } from "shiki";
import path from "path";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const setHighlighter = async () => {
  const theme = await loadTheme(
    path.join(process.cwd(), "src/lib/themes/dark.json")
  );
  return await getHighlighter({ theme });
};