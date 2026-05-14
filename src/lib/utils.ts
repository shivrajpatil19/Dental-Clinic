import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  const basePath = "/Dental-Clinic"
  if (path.startsWith(basePath)) return path
  return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`
}
