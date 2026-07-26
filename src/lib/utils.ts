import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateWhatsAppNumber(phone: string): boolean {
  // Validates Pakistani mobile numbers: +923XXXXXXXXX or 03XXXXXXXXX
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  const regex = /^(\+92|0)?3\d{9}$/;
  return regex.test(cleaned);
}
