import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built with{" "}
                        <Link
                            href="https://ui.shadcn.com"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            shadcn/ui
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="https://nextjs.org"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Next.js
                        </Link>
                        .
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <Link
                        href="/products"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        Products
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/privacy"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        Privacy
                    </Link>
                    <Link
                        href="/terms"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    )
}