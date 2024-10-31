'use client'

import { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Textarea, Input, Button } from '@/ui'
import { useToast } from '@/hooks'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0, 'Nice try, bot!'),
})

type FormData = z.infer<typeof formSchema>

const inputVariants = {
  focus: { scale: 1.05, transition: { duration: 0.3 } },
  blur: { scale: 1, transition: { duration: 0.3 } },
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()
  const controls = useAnimation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.5 },
    })
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <motion.div variants={inputVariants} whileFocus="focus" animate="blur">
          <Input
            {...register('name')}
            placeholder="Your Name"
            className="bg-gray-700 border-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </motion.div>
        <motion.div variants={inputVariants} whileFocus="focus" animate="blur">
          <Input
            {...register('email')}
            type="email"
            placeholder="Your Email"
            className="bg-gray-700 border-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </motion.div>
        <motion.div variants={inputVariants} whileFocus="focus" animate="blur">
          <Textarea
            {...register('message')}
            placeholder="Your Message"
            className="bg-gray-700 border-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </motion.div>
        <Input
          {...register('honeypot')}
          type="text"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.div>
      </form>
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4"
        >
          <motion.p
            animate={controls}
            className="text-green-500 font-semibold text-center"
          >
            Thank you for your message! I'll get back to you soon.
          </motion.p>
        </motion.div>
      )}
    </div>
  )
}
export default ContactForm;
