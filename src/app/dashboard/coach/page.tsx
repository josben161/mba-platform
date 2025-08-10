import React from "react";
import { auth } from "@clerk/nextjs/server";

export default async function CoachPage() {
  const { userId } = await auth();
  if (!userId) return null;

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-bold">Coach</h1>
      <p className="mt-2 text-gray-600">Get personalized guidance from MBA admissions experts.</p>
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Panel */}
        <div className="lg:col-span-2 rounded-lg border bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Messages</h2>
            <button className="px-3 py-1 text-sm bg-black text-white rounded hover:bg-gray-800">
              New Message
            </button>
          </div>
          
          <div className="space-y-4 h-96 overflow-y-auto">
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm">Hi! II'apos;mapos;m Sarah, your MBA admissions coach. How can I help you today?</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">2:30 PM</p>
              </div>
            </div>
            
            <div className="flex space-x-3 justify-end">
              <div className="flex-1 text-right">
                <div className="bg-black text-white rounded-lg p-3 inline-block">
                  <p className="text-sm">II'apos;mapos;m working on my Harvard essay and could use some feedback on my approach.</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">2:32 PM</p>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0"></div>
            </div>
            
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm">Great! II'apos;dapos;d love to help. What'apos;s your current draft looking like? Also, have you thought about booking a 1:1 session to dive deeper?</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">2:33 PM</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex space-x-2">
            <input 
              type="text" 
              className="flex-1 rounded border p-3"
              placeholder="Type your message..."
            />
            <button className="px-4 py-3 bg-black text-white rounded hover:bg-gray-800">
              Send
            </button>
          </div>
        </div>
        
        {/* Booking Panel */}
        <div className="rounded-lg border bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">Book a Session</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Coach</label>
              <select className="w-full rounded border p-3">
                <option>Select a coach...</option>
                <option>Sarah Johnson - Harvard MBA</option>
                <option>Mike Chen - Stanford MBA</option>
                <option>Lisa Rodriguez - Wharton MBA</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Session Type</label>
              <select className="w-full rounded border p-3">
                <option>Select session type...</option>
                <option>Essay Review (30 min)</option>
                <option>Application Strategy (45 min)</option>
                <option>Interview Prep (60 min)</option>
                <option>Complete Review (90 min)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Date & Time</label>
              <input 
                type="datetime-local" 
                className="w-full rounded border p-3"
              />
            </div>
            
            <button className="w-full rounded bg-black px-4 py-3 text-white font-medium hover:bg-gray-800">
              Book Session
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded">
            <h3 className="font-medium text-blue-900 mb-2">Available This Week</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Tomorrow 2:00 PM - Sarah</li>
              <li>• Thursday 10:00 AM - Mike</li>
              <li>• Friday 4:00 PM - Lisa</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 