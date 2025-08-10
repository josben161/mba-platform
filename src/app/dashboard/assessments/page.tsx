import React from "react";
import { auth } from "@clerk/nextjs";

export default async function AssessmentsPage() {
  const { userId } = auth();
  if (!userId) return null;

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-3xl font-bold">School Strategy Assessment</h1>
      <p className="mt-2 text-gray-600">Get personalized school recommendations and application strategy.</p>
      
      <div className="mt-8 rounded-lg border bg-white p-6">
        <h2 className="text-xl font-semibold mb-4">New Assessment</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Resume Text</label>
            <textarea 
              className="w-full rounded border p-3" 
              rows={8}
              placeholder="Paste your resume text here..."
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">GMAT Score (optional)</label>
              <input 
                type="number" 
                className="w-full rounded border p-3"
                placeholder="e.g., 720"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">GRE Scores (optional)</label>
              <div className="grid grid-cols-2 gap-2">
                <input 
                  type="number" 
                  className="rounded border p-3"
                  placeholder="Verbal"
                />
                <input 
                  type="number" 
                  className="rounded border p-3"
                  placeholder="Quant"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Target Schools</label>
            <input 
              type="text" 
              className="w-full rounded border p-3"
              placeholder="e.g., Harvard, Stanford, Wharton"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Career Goals</label>
            <textarea 
              className="w-full rounded border p-3" 
              rows={3}
              placeholder="Describe your short and long-term career goals..."
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Constraints (optional)</label>
            <textarea 
              className="w-full rounded border p-3" 
              rows={2}
              placeholder="Any constraints like location, timing, etc."
            />
          </div>
          
          <button 
            type="submit"
            className="w-full rounded bg-black px-4 py-3 text-white font-medium hover:bg-gray-800"
          >
            Run Assessment
          </button>
        </form>
      </div>
    </main>
  );
} 