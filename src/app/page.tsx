import Link from "next/link"
import { ArrowRight, Edit3, FileText, Users, Trophy, Target, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
            <Link href="#features" className="text-sm font-medium">
              Features
            </Link>
            <Link href="#success" className="text-sm font-medium">
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
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                🎓 Trusted by 2,847+ successful applicants
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

              {/* School Logos */}
              <div className="flex flex-wrap justify-center items-center gap-8 py-6 opacity-70">
                <div className="text-sm font-medium text-muted-foreground">Oxford</div>
                <div className="text-sm font-medium text-muted-foreground">Harvard</div>
                <div className="text-sm font-medium text-muted-foreground">Stanford</div>
                <div className="text-sm font-medium text-muted-foreground">Cambridge</div>
                <div className="text-sm font-medium text-muted-foreground">INSEAD</div>
                <div className="text-sm font-medium text-muted-foreground">HKU</div>
                <div className="text-sm font-medium text-muted-foreground">Melbourne</div>
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

              <div className="pt-8 w-full max-w-5xl">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border shadow-2xl">
                  <img
                    src="/porters-prep-platform.png"
                    alt="PortersPrep MBA Application Platform"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent">94%</div>
                <div className="text-sm opacity-90">Acceptance Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">2,847</div>
                <div className="text-sm opacity-90">Students Accepted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">$2.1M</div>
                <div className="text-sm opacity-90">Avg. Scholarship Won</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">7</div>
                <div className="text-sm opacity-90">Top Schools Covered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need to Get Accepted</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Our comprehensive platform covers every aspect of your application to ensure maximum success.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>School-Specific Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tailored application strategies for Oxford, Harvard, Stanford, Cambridge, INSEAD, HKU, and
                    Melbourne. Each school's unique requirements and preferences mapped out.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Edit3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Essay Perfection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced AI trained on 10,000+ successful essays provides real-time feedback, structure
                    optimization, and narrative enhancement to make your story irresistible.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Expert Coaching Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Former admissions officers from target schools, successful alumni, and MBA consultants provide
                    personalized guidance throughout your entire application journey.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Profile Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive analysis of your background, experience, and goals with actionable recommendations to
                    strengthen weak areas and highlight your unique value proposition.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Interview Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    School-specific interview preparation with real questions from recent admits, mock interviews, and
                    behavioral coaching to ensure you shine in every interaction.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Success Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access to 1,000+ successful essays, resumes, and application materials from admitted students at
                    your target schools, organized by industry and background.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="success" className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Recent Success Stories</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Real results from real students who used PortersPrep to get into their dream schools.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="/testimonial-sarah.png" alt="Sarah" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Sarah Chen</p>
                      <p className="text-sm text-primary font-medium">Harvard Business School '25</p>
                      <p className="text-xs text-muted-foreground">Investment Banking → MBA</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "PortersPrep's Harvard-specific strategy was game-changing. The AI essay tool helped me craft a
                    narrative that connected my finance background to my social impact goals. Got in with a 40%
                    scholarship!"
                  </p>
                  <Badge variant="outline" className="text-xs">
                    💰 $80k Scholarship
                  </Badge>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="/testimonial-james.png" alt="James" />
                      <AvatarFallback>JW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">James Williams</p>
                      <p className="text-sm text-primary font-medium">Oxford Saïd '24</p>
                      <p className="text-xs text-muted-foreground">Tech Startup → MBA</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The Oxford-specific coaching was incredible. My coach was a former admissions officer who knew
                    exactly what Saïd was looking for. The interview prep alone was worth the entire investment."
                  </p>
                  <Badge variant="outline" className="text-xs">
                    🎯 First Choice Admit
                  </Badge>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="/testimonial-priya.png" alt="Priya" />
                      <AvatarFallback>PK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Priya Kumar</p>
                      <p className="text-sm text-primary font-medium">Stanford GSB '25</p>
                      <p className="text-xs text-muted-foreground">Consulting → MBA</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Stanford has a 6% acceptance rate, but PortersPrep made it feel achievable. The platform's
                    Stanford-specific insights and essay examples were exactly what I needed to stand out."
                  </p>
                  <Badge variant="outline" className="text-xs">
                    🏆 6% Acceptance Rate
                  </Badge>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="/testimonial-alex.png" alt="Alex" />
                      <AvatarFallback>AT</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Alex Thompson</p>
                      <p className="text-sm text-primary font-medium">Cambridge Judge '24</p>
                      <p className="text-xs text-muted-foreground">Engineering → MBA</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Coming from engineering, I was worried about the 'soft skills' essays. PortersPrep's AI helped me
                    articulate my leadership experiences in a way that resonated with Cambridge's values."
                  </p>
                  <Badge variant="outline" className="text-xs">
                    🎓 Career Pivot Success
                  </Badge>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="/testimonial-maria.png" alt="Maria" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Maria Rodriguez</p>
                      <p className="text-sm text-primary font-medium">INSEAD '25</p>
                      <p className="text-xs text-muted-foreground">Marketing → MBA</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "INSEAD's diversity focus was perfect for my background, but I needed help positioning my story. The
                    platform's INSEAD-specific guidance helped me highlight my international experience perfectly."
                  </p>
                  <Badge variant="outline" className="text-xs">
                    🌍 International Success
                  </Badge>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="/testimonial-david.png" alt="David" />
                      <AvatarFallback>DL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">David Lee</p>
                      <p className="text-sm text-primary font-medium">HKU Business School '24</p>
                      <p className="text-xs text-muted-foreground">Finance → MBA</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "As someone targeting Asia-Pacific opportunities, HKU was my top choice. PortersPrep's regional
                    expertise and network connections made all the difference in my application strategy."
                  </p>
                  <Badge variant="outline" className="text-xs">
                    🏅 Regional Leader
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">The PortersPrep Guarantee</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                We're so confident in our system that we offer a unique guarantee: If you don't get accepted to at least
                one of your target schools after completing our program, we'll work with you for free until you do.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">94%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm opacity-90">Money-Back Promise</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm opacity-90">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Your Dream MBA Starts Here</h2>
              <p className="text-xl text-muted-foreground">
                Join the 2,847+ students who've used PortersPrep to get into Oxford, Harvard, Stanford, and other top
                programs. Your acceptance letter is waiting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="px-8 text-lg h-12">
                    Start Your Application Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="px-8 text-lg h-12 bg-transparent">
                    View Success Plans
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                ✅ 14-day free trial • ✅ No setup fees • ✅ Cancel anytime
              </p>
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
              <p className="text-sm text-muted-foreground">
                The world's most effective MBA application platform. Get into Oxford, Harvard, Stanford, and more.
              </p>
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
                <div>View All Schools</div>
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
                <Link href="/success-stories" className="hover:underline">
                  Success Stories
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
