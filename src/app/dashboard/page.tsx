import { auth, currentUser } from "@clerk/nextjs";
import { ensureProfile } from "@/lib/profile";

export default async function Dashboard() {
  const { userId } = auth();
  if (!userId) return null;
  const user = await currentUser();
  await ensureProfile({ clerkUserId: userId, email: user?.emailAddresses?.[0]?.emailAddress || "", name: user?.firstName || undefined });
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <li className="rounded-lg border bg-white p-4"><a href="/dashboard/assessments" className="font-medium">Assess</a><p className="text-sm text-gray-600">Get a school strategy.</p></li>
        <li className="rounded-lg border bg-white p-4"><a href="/dashboard/essays" className="font-medium">Edit</a><p className="text-sm text-gray-600">Collaborative editor + redlines.</p></li>
        <li className="rounded-lg border bg-white p-4"><a href="/dashboard/coach" className="font-medium">Coach</a><p className="text-sm text-gray-600">DM + book a session.</p></li>
      </ul>
    </main>
  );
} 