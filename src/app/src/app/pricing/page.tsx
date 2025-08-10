export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Simple, fair pricing</h1>
      <p className="mt-2 text-gray-600">Start free. Upgrade when you need more.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="mt-1 text-gray-600">$0 / mo</p>
          <ul className="mt-4 list-disc pl-5 text-sm text-gray-700">
            <li>1 assessment / month</li>
            <li>1 essay (≤1k words)</li>
            <li>3 AI redlines / month</li>
            <li>5 coach DMs / month</li>
          </ul>
          <a href="/dashboard" className="mt-6 inline-block rounded border px-4 py-2">Get started</a>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Plus</h3>
          <p className="mt-1 text-gray-600">$49 / mo</p>
          <ul className="mt-4 list-disc pl-5 text-sm text-gray-700">
            <li>3 assessments</li>
            <li>5 essays (≤5k)</li>
            <li>20 AI redlines</li>
            <li>50 coach DMs + 1 call</li>
          </ul>
          <a href="/dashboard" className="mt-6 inline-block rounded bg-black px-4 py-2 text-white">Upgrade</a>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="mt-1 text-gray-600">$199 / mo</p>
          <ul className="mt-4 list-disc pl-5 text-sm text-gray-700">
            <li>∞ assessments (fair use)</li>
            <li>20 essays (≤10k)</li>
            <li>100 AI redlines</li>
            <li>Priority coach + 2 calls</li>
          </ul>
          <a href="/dashboard" className="mt-6 inline-block rounded bg-black px-4 py-2 text-white">Go Pro</a>
        </div>
      </div>
      <p className="mt-8 text-xs text-gray-500">We coach; you write. No ghostwriting. Cancel anytime.</p>
    </section>
  );
} 