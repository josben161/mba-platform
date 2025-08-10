import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Porters</span>
            <span className="text-accent">Prep</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/pricing" className="text-sm font-medium">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Start Your Journey</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                🎓 Used by applicants targeting top MBA programs
              </Badge>
              <div className="space-y-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                  Get Into <span className="text-primary">Oxford, Harvard, Stanford</span> & Top Global MBA Programs
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  The only platform you need to craft winning applications for the world's most competitive MBA
                  programs. AI-powered tools, expert coaching, and proven strategies that get results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="px-8 text-lg h-12">
                    Start Your Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="px-8 text-lg h-12 bg-transparent">
                    View Success Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 