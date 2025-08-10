import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function ensureProfile({ clerkUserId, email, name }: { clerkUserId: string; email: string; name?: string }) {
  const { data } = await supabase.from("profiles").select("id").eq("clerk_user_id", clerkUserId).single();
  if (!data) {
    await supabase.from("profiles").insert({ clerk_user_id: clerkUserId, email, name });
  }
} 