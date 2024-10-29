"use client"
import { useState } from 'react'
import {  } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle, Input, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/ui"
import { Check, AlertCircle } from 'lucide-react'


export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter your email address.')
      return
    }
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    setIsSubmitted(true)
    setError('')
  }

  return (
      <section id="waitlist" className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
  <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Join the Trendz Waitlist</CardTitle>
            <CardDescription>Trendz is currently in alpha, join the waitlist to get exclusive early access and to receive product updates!</CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                </div>
                <Button type="submit" className="w-full">Join Waitlist</Button>
              </form>
            ) : (
              <Alert>
                <Check className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>You've been added to our waitlist! We'll notify you when Trendz launches.</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-2">
            <h3 className="font-semibold">Why join our waitlist?</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Be the first to access our powerful trading journal</li>
              <li>Receive exclusive early-bird discounts</li>
              <li>Shape the future of Trendz with your feedback</li>
            </ul>
          </CardFooter>
        </Card>
      </section>
  )
}