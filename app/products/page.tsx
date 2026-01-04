import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsPage() {
    return (
        <div className="container mx-auto py-10">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Our Products</h1>
                    <p className="text-xl text-muted-foreground mt-4">
                        Discover our range of support ticket management solutions
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Plan</CardTitle>
                            <CardDescription>Perfect for small teams</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Essential features for managing support tickets with up to 5 team members.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Pro Plan</CardTitle>
                            <CardDescription>Ideal for growing businesses</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Advanced features including analytics and priority support for teams up to 20 members.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Enterprise Plan</CardTitle>
                            <CardDescription>For large organizations</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Full-featured solution with custom integrations and dedicated support.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="text-center">
                    <p className="text-muted-foreground">
                        All plans include our core support ticket management features.
                    </p>
                </div>
            </div>
        </div>
    )
}