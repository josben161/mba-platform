import React from "react";
import { auth } from "@clerk/nextjs";

export default async function EssaysPage() {
  const { userId } = auth();
  if (!userId) return null;

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-bold">Essay Editor</h1>
      <p className="mt-2 text-gray-600">Collaborative editor with AI-powered redlines and coaching feedback.</p>
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor Panel */}
        <div className="lg:col-span-2 rounded-lg border bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Essay Content</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">
                Save Draft
              </button>
              <button className="px-3 py-1 text-sm bg-black text-white rounded hover:bg-gray-800">
                Get Feedback
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Essay Prompt</label>
              <select className="w-full rounded border p-3">
                <option>Select a prompt...</option>
                <option>Why MBA? Why now? Why this school?</option>
                <option>Describe a significant challenge you've faced...</option>
                <option>What are your short and long-term career goals?</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Essay Content</label>
              <textarea 
                className="w-full rounded border p-3" 
                rows={20}
                placeholder="Start writing your essay here..."
              />
            </div>
          </div>
        </div>
        
        {/* Feedback Panel */}
        <div className="rounded-lg border bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">AI Feedback</h2>
          
          <div className="space-y-4">
            <div className="p-3 bg-blue-50 rounded">
              <h3 className="font-medium text-blue-900">Comments</h3>
              <ul className="mt-2 space-y-2 text-sm text-blue-800">
                <li>• Lead with quantified impact</li>
                <li>• Trim passive voice in paragraph 2</li>
                <li>• Clarify short-term vs long-term goals</li>
              </ul>
            </div>
            
            <div className="p-3 bg-green-50 rounded">
              <h3 className="font-medium text-green-900">Suggestions</h3>
              <ul className="mt-2 space-y-2 text-sm text-green-800">
                <li>• Tighten goal to one sentence</li>
                <li>• Remove filler adverbs</li>
                <li>• Add specific examples</li>
              </ul>
            </div>
            
            <div className="p-3 bg-yellow-50 rounded">
              <h3 className="font-medium text-yellow-900">Structure</h3>
              <p className="mt-2 text-sm text-yellow-800">
                Consider reorganizing to lead with your strongest achievement first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 