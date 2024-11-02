import Link from 'next/link'
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui"
import { TrendingUp, Home } from 'lucide-react'
import {NavBar, Footer } from '@/elements'
import { DHLogo } from '@/components/icons/logo'
const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
        <NavBar />
        <main className="min-h-screen flex justify-center items-center">
            <div id="not-found-card-container">
            <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center">404</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-muted-foreground">
              Oops! It seems like you've ventured into uncharted territory. This page doesn't exist in our portfolio.
            </p>
            <div className="flex justify-center">
              <DHLogo classes="h-24 w-24 text-primary" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button asChild className="w-full">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return to Homepage
              </Link>
            </Button>
          </CardFooter>
        </Card>
            </div>
        </main>
        <Footer />
    </div>
        
        

  )
}

export default NotFound;  