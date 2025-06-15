import { Category } from "@/types";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const URL = `${baseURL}/api/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, { cache: 'no-store' });

  if (!res.ok) {
    console.error("Failed to fetch categories:", await res.text());
    return [];
  }

  return res.json();
};
