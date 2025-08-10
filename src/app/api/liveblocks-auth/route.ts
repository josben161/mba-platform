import { authorize } from "@liveblocks/node";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });
  const { room } = await req.json();
  const result = await authorize({ room, userId }, { secret: process.env.LIVEBLOCKS_SECRET_KEY! });
  return new Response(result.body, { status: result.status, headers: { "content-type": "application/json" } });
} 