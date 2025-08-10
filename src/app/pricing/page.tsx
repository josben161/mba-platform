import Link from "next/link"
import { ArrowRight, Check, Star, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Porters</span>
            <span className="text-accent">Prep</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/pricing" className="text-sm font-medium">
              Pricing
            </Link>
            <Link href="/#features" className="text-sm font-medium">
              Features
            </Link>
            <Link href="/#success" className="text-sm font-medium">
              Success Stories
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
        <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                🎯 94% acceptance rate across all plans
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Choose Your Success Plan</h1>
              <p className="text-xl text-muted-foreground max-w-[700px]">
                Tailored packages designed to get you into Oxford, Harvard, Stanford, Cambridge, INSEAD, HKU, and
                Melbourne
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <Card className="flex flex-col border-2 relative">
                <CardHeader>
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $297
                    <span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="mt-4">Perfect for self-directed applicants</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>AI essay editor with school-specific feedback</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Profile assessment for 3 target schools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Access to 500+ successful essays</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Application timeline management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard" className="w-full">
                    <Button variant="outline" className="w-full bg-transparent">
                      Start Free Trial
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Professional Plan */}
              <Card className="flex flex-col border-2 border-primary relative scale-105">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Professional</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $597
                    <span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="mt-4">Complete application support with expert guidance</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Everything in Starter</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Unlimited essay reviews & revisions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Support for up to 5 schools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>3 mock interviews with feedback</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Resume & LinkedIn optimization</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Priority chat support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>School-specific strategy sessions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard" className="w-full">
                    <Button className="w-full">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Elite Plan */}
              <Card className="flex flex-col border-2 border-accent relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground px-3 py-1">
                    <Trophy className="w-3 h-3 mr-1" />
                    Elite
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Elite</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $1,297
                    <span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="mt-4">White-glove service with guaranteed results</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Everything in Professional</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Dedicated success manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Support for all 7 target schools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Weekly 1-on-1 coaching calls</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Former admissions officer reviews</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Unlimited mock interviews</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>Scholarship application support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="font-medium">Acceptance guarantee or money back</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      Start Free Trial
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            {/* Success Stats */}
            <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">94%</div>
                <div className="text-sm text-muted-foreground">Overall acceptance rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">$2.1M</div>
                <div className="text-sm text-muted-foreground">Average scholarship amount</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">2,847</div>
                <div className="text-sm text-muted-foreground">Students accepted</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Money-back guarantee</div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg">What makes PortersPrep different from other services?</h3>
                  <p className="text-muted-foreground mt-1">
                    We focus exclusively on the world's top 7 MBA programs with school-specific strategies, AI-powered
                    tools, and a network of former admissions officers. Our 94% acceptance rate speaks for itself.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Do you really guarantee acceptance?</h3>
                  <p className="text-muted-foreground mt-1">
                    Yes, with our Elite plan. If you don't get accepted to at least one of your target schools after
                    completing our program, we'll continue working with you for free until you do, or provide a full
                    refund.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">How long does the application process take?</h3>
                  <p className="text-muted-foreground mt-1">
                    Most students work with us for 6-12 months depending on their timeline. We recommend starting at
                    least 12 months before your target application deadlines for the best results.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Can I switch plans during my application process?</h3>
                  <p className="text-muted-foreground mt-1">
                    Absolutely. Many students start with Professional and upgrade to Elite as deadlines approach. You
                    can upgrade anytime and we'll prorate the difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <span className="text-primary">Porters</span>
                <span className="text-accent">Prep</span>
              </div>
              <p className="text-sm text-muted-foreground">The world's most effective MBA application platform.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Target Schools</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Harvard Business School</div>
                <div>Stanford Graduate School</div>
                <div>Oxford Saïd Business School</div>
                <div>Cambridge Judge</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">More Schools</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>INSEAD</div>
                <div>HKU Business School</div>
                <div>University of Melbourne</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/help" className="hover:underline">
                  Help Center
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
                <Link href="/guarantee" className="hover:underline">
                  Our Guarantee
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PortersPrep. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                Privacy
              </Link>
              <Link href="/ethics" className="text-sm text-muted-foreground hover:underline">
                Ethics Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
