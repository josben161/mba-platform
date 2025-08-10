import Link from "next/link"
import { ArrowLeft, BookOpen, Calendar, FileText, MessageSquare, Target, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Porters</span>
            <span className="text-accent">Prep</span>
          </Link>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="px-3 py-1">
              Professional Plan
            </Badge>
            <Button variant="ghost" size="sm">
              Log Out
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Welcome back, Sarah!</h1>
                  <p className="text-muted-foreground">Your journey to Harvard, Stanford, and Oxford continues.</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">94%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Progress Overview */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Application Progress
                </CardTitle>
                <CardDescription>Track your progress across all target schools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Harvard Business School</span>
                    <span className="text-sm text-muted-foreground">85% Complete</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Stanford GSB</span>
                    <span className="text-sm text-muted-foreground">72% Complete</span>
                  </div>
                  <Progress value={72} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Oxford Saïd</span>
                    <span className="text-sm text-muted-foreground">68% Complete</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <FileText className="h-8 w-8 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      3 Active
                    </Badge>
                  </div>
                  <CardTitle>Essay Workshop</CardTitle>
                  <CardDescription>AI-powered essay editing and feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>• Leadership Essay (Harvard) - Draft 4</div>
                    <div>• Career Goals (Stanford) - In Review</div>
                    <div>• Personal Statement - Ready</div>
                  </div>
                  <Button className="w-full">Continue Writing</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Users className="h-8 w-8 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      Next: Today 3PM
                    </Badge>
                  </div>
                  <CardTitle>Expert Coaching</CardTitle>
                  <CardDescription>1-on-1 sessions with former admissions officers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>• Harvard Strategy Session</div>
                    <div>• Mock Interview Prep</div>
                    <div>• Profile Optimization</div>
                  </div>
                  <Button className="w-full">Join Session</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      2 New
                    </Badge>
                  </div>
                  <CardTitle>Feedback Center</CardTitle>
                  <CardDescription>Expert reviews and recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>• Essay Score: 8.5/10 ⭐</div>
                    <div>• Profile Strength: Strong</div>
                    <div>• Interview Readiness: 85%</div>
                  </div>
                  <Button className="w-full">View Feedback</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Calendar className="h-8 w-8 text-primary" />
                    <Badge variant="destructive" className="text-xs">
                      23 Days
                    </Badge>
                  </div>
                  <CardTitle>Application Timeline</CardTitle>
                  <CardDescription>Deadlines and milestone tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>• Harvard R2: Jan 4, 2024</div>
                    <div>• Stanford R2: Jan 10, 2024</div>
                    <div>• Oxford R3: Mar 15, 2024</div>
                  </div>
                  <Button className="w-full">View Timeline</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      This Week
                    </Badge>
                  </div>
                  <CardTitle>Success Analytics</CardTitle>
                  <CardDescription>Track your application strength</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>• 18 hours writing time</div>
                    <div>• 4,247 words written</div>
                    <div>• 12 feedback points addressed</div>
                  </div>
                  <Button className="w-full">View Analytics</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      1,000+ Essays
                    </Badge>
                  </div>
                  <CardTitle>Success Library</CardTitle>
                  <CardDescription>Successful essays from your target schools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>• Harvard admits: 247 essays</div>
                    <div>• Stanford admits: 189 essays</div>
                    <div>• Oxford admits: 156 essays</div>
                  </div>
                  <Button className="w-full">Browse Library</Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest application work and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-primary/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div>
                        <h4 className="font-medium">Leadership Essay - Harvard</h4>
                        <p className="text-sm text-muted-foreground">Received expert feedback with 8.5/10 score</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">2 hours ago</div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div>
                        <h4 className="font-medium">Mock Interview Completed</h4>
                        <p className="text-sm text-muted-foreground">
                          Stanford GSB interview simulation - Strong performance
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">1 day ago</div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <div>
                        <h4 className="font-medium">Profile Assessment Updated</h4>
                        <p className="text-sm text-muted-foreground">Oxford compatibility score increased to 87%</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">3 days ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Guarantee */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold">Your Success is Guaranteed</h3>
                  <p className="opacity-90">
                    With our 94% acceptance rate and money-back guarantee, you're on track for success. Keep up the
                    great work!
                  </p>
                  <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    View Your Guarantee
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PortersPrep. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="/help" className="text-sm text-muted-foreground hover:underline">
                Help Center
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
