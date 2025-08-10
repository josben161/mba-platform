import { auth as clerkAuth } from "@clerk/nextjs";
import { z as Z } from "zod";

const InputR = Z.object({ documentId: Z.string().uuid().optional(), text: Z.string().min(10) });

export async function POST(req: Request) {
  const { userId } = clerkAuth();
  if (!userId) return new Response("Unauthorized", { status: 401 });
  const body = await req.json();
  const parsed = InputR.safeParse(body);
  if (!parsed.success) return new Response("Bad Request", { status: 400 });
  const comments = [{ pos: 0, len: 60, note: "Lead with quantified impact; trim passive voice." }];
  const suggestions = ["Tighten goal to one sentence", "Remove filler adverbs", "Clarify short‑term vs long‑term path"];
  return Response.json({ comments, suggestions });
} 