'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Copy } from 'lucide-react'
import { useToast } from '@/hooks'

const socialLinkVariants = {
  hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
  tap: { scale: 0.8, rotate: -15, transition: { duration: 0.1 } },
}

const SocialLinks = () => {
  const { toast } = useToast()

  const copyEmail = () => {
    navigator.clipboard.writeText('david.hanlon@example.com')
    toast({
      title: 'Email copied!',
      description: 'The email address has been copied to your clipboard.',
    })
  }

  return (
    <div className="flex space-x-4">
      <motion.a
        href="https://github.com/davidhanlon"
        target="_blank"
        rel="noopener noreferrer"
        variants={socialLinkVariants}
        whileHover="hover"
        whileTap="tap"
        className="text-gray-400 hover:text-white"
      >
        <Github size={28} />
        <span className="sr-only">GitHub</span>
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/davidhanlon"
        target="_blank"
        rel="noopener noreferrer"
        variants={socialLinkVariants}
        whileHover="hover"
        whileTap="tap"
        className="text-gray-400 hover:text-white"
      >
        <Linkedin size={28} />
        <span className="sr-only">LinkedIn</span>
      </motion.a>
      <motion.button
        onClick={copyEmail}
        variants={socialLinkVariants}
        whileHover="hover"
        whileTap="tap"
        className="text-gray-400 hover:text-white flex items-center"
      >
        <Mail size={28} className="mr-2" />
        <span className="sr-only">Copy Email</span>
        <Copy size={20} />
      </motion.button>
    </div>
  )
}
export default SocialLinks;
