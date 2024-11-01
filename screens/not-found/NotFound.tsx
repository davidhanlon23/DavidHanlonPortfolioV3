import Link from 'next/link'
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui"
import { TrendingUp, Home, Search, HelpCircle } from 'lucide-react'
import {NavBar, Footer } from '@/elements'

const NotFound = () => {
  return (
    <>
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
              Oops! It seems like you've ventured into uncharted territory. This page doesn't exist in our trading journal.
            </p>
            <div className="flex justify-center">
              <TrendingUp className="h-24 w-24 text-primary" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button asChild className="w-full">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return to Homepage
              </Link>
            </Button>
            <div className="flex space-x-4 w-full">
              <Button asChild variant="outline" className="w-1/2">
                <Link href="/search">
                {/** @TODO - not a real page yet */}
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-1/2">
                {/** @TODO - not a real page yet */}
                <Link href="/help">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help Center
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
            </div>
        </main>
        <Footer />
    </>
        
        

  )
}

export default NotFound;  