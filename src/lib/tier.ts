// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { supabase } from "./profile";
export async function getTier(clerkUserId: string): Promise<"free" | "plus" | "pro"> {
  const { data } = await supabase.from("profiles").select("subscription_tier").eq("clerk_user_id", clerkUserId).single();
  return (data?.subscription_tier as any) || "free";
} 