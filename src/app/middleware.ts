import type { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { checkAndIncrement } from "@/lib/usage";
import { getTier } from "@/lib/tier";

const FEATURE_MAP: Record<string, "assessment_runs" | "essay_docs" | "redline_runs"> = {
  "/api/assessment/run": "assessment_runs",
  "/api/essay/create": "essay_docs",
  "/api/redline": "redline_runs",
};

export async function middleware(req: NextRequest) {
  const pathname = new URL(req.url).pathname;
  const feature = FEATURE_MAP[pathname];
  if (!feature) return;
  const { userId } = await auth();
  if (!userId) return Response.redirect(new URL("/sign-in", req.url));
  const tier = await getTier(userId); // "free" | "plus" | "pro"
  const ok = await checkAndIncrement(userId, feature, tier);
  if (!ok) return new Response(JSON.stringify({ error: "quota_exceeded" }), { status: 402 });
}

export const config = { matcher: ["/api/:path*"] }; 