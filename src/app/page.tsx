export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-4xl font-bold">Your MBA Admissions Copilot</h1>
      <p className="mt-3 text-gray-600">
        Assess your odds, get coaching-style essay feedback, and book a coach.
        Free, Plus, and Pro tiers.
      </p>
      <div className="mt-6 flex gap-3">
        <a href="/dashboard" className="rounded bg-black px-4 py-2 text-white">Go to Dashboard</a>
        <a href="/pricing" className="rounded border px-4 py-2">View Pricing</a>
      </div>
    </main>
  );
}
