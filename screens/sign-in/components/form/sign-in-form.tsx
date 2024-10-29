'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import CandleStickLogo from '@/components/icons/logo/CandleStickLogo';

type SignInInputs = {
  email: string
  password: string
}

export default function SignInForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignInInputs>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    setIsSubmitting(true)
    // Handle form submission
    console.log('Form submitted', data)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  const email = watch('email')

  const handleGoogleSignIn = () => {
    // Handle Google SSO
    console.log('Google Sign In clicked')
  }

  const handleMagicLink = () => {
    // Handle Magic Link
    console.log('Magic Link requested for:', email)
  }

  return (
    <div className="w-full max-w-md space-y-8 shadow-md p-8">
      <div className="space-y-2 text-center">
        <div className="flex justify-center">
          <CandleStickLogo width={100}  />
        </div>
        <h1 className="text-3xl font-bold">Sign in to Trendz</h1>
        <p className="text-sm text-muted-foreground">Enter your details to access your account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="you@example.com" 
            {...register("email", { 
              required: "Email is required", 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p className="text-sm text-red-500" role="alert">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            {...register("password", { 
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <p className="text-sm text-red-500" role="alert">{errors.password.message}</p>}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
      </form>
      <div className="space-y-4">
        <Separator />
        <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
          {/* <Icons.google className="mr-2 h-4 w-4" /> */}
          Sign in with Google
        </Button>
        <div className="text-center space-y-2">
          <Button variant="link" onClick={handleMagicLink} disabled={!email}>
            Sign in with Magic Link
          </Button>
          <div className="text-sm">
            <a href="#forgot-password" className="text-primary hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}