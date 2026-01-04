import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <div className="container mx-auto py-10">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight">About SupTicket</h1>
                    <p className="text-xl text-muted-foreground mt-4">
                        Streamlining support ticket management for modern businesses
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                To provide businesses with an efficient, user-friendly support ticket system
                                that enhances customer satisfaction and operational productivity.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                To be the leading support ticket management platform, empowering teams
                                to deliver exceptional customer service at scale.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Features</CardTitle>
                        <CardDescription>
                            What makes SupTicket stand out
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="space-y-2">
                                <h4 className="font-semibold">Real-time Updates</h4>
                                <p className="text-sm text-muted-foreground">
                                    Instant notifications and live status tracking for all tickets.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold">Team Collaboration</h4>
                                <p className="text-sm text-muted-foreground">
                                    Seamless communication between team members and customers.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold">Analytics & Insights</h4>
                                <p className="text-sm text-muted-foreground">
                                    Comprehensive reporting to optimize your support processes.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="text-center">
                    <p className="text-muted-foreground">
                        Built with modern web technologies including Next.js, TypeScript, and Tailwind CSS.
                    </p>
                </div>
            </div>
        </div>
    )
}