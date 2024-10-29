'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CandleStickLogo } from '@/components/icons/logo';

const signUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type SignUpInputs = z.infer<typeof signUpSchema>

export default function SignUpForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpInputs>({
    resolver: zodResolver(signUpSchema)
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: SignUpInputs) => {
    setIsSubmitting(true)
    // Handle form submission
    console.log('Form submitted', data)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  const email = watch('email')

  const handleGoogleSignUp = () => {
    // Handle Google SSO
    console.log('Google Sign Up clicked')
  }

  return (
    <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-lg shadow-md">
      <div className="space-y-2 text-center">
        <div className="flex justify-center">
          <CandleStickLogo width={100}  />
        </div>
        <h1 className="text-3xl font-bold">Sign up for Trendz</h1>
        <p className="text-sm text-muted-foreground">Create your account to get started</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            type="text" 
            placeholder="John Doe" 
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p className="text-sm text-red-500" role="alert">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="you@example.com" 
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p className="text-sm text-red-500" role="alert">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            {...register("password")}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <p className="text-sm text-red-500" role="alert">{errors.password.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input 
            id="confirmPassword" 
            type="password" 
            {...register("confirmPassword")}
            aria-invalid={errors.confirmPassword ? "true" : "false"}
          />
          {errors.confirmPassword && <p className="text-sm text-red-500" role="alert">{errors.confirmPassword.message}</p>}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </Button>
      </form>
      <div className="space-y-4">
        <Separator />
        <Button variant="outline" className="w-full" onClick={handleGoogleSignUp}>
          Sign up with Google
        </Button>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <a href="/sign-in" className="text-primary hover:underline">
            Sign in
          </a>
        </div>
      </div>
    </div>
  )
}
