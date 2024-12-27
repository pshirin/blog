"use server";
import { revalidatePath } from "next/cache";

export default async function (...rest: Parameters<typeof revalidatePath>) {
  return revalidatePath(...rest);
}
