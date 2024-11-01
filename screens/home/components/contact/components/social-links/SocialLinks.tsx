'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Copy, FileUser } from 'lucide-react'
import { useToast } from '@/hooks'

const socialLinkVariants = {
  hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
  tap: { scale: 0.8, rotate: -15, transition: { duration: 0.1 } },
}

const SocialLinks = () => {
  const { toast } = useToast()

  const copyEmail = () => {
    navigator.clipboard.writeText('davidhanlon23@gmail.com')
    toast({
      title: 'Email copied!',
      description: 'The email address has been copied to your clipboard.',
    })
  }

  const viewResume = () => window.open('/Resume/DavidHanlonResume.pdf')

  return (
    <div className="flex space-x-4">
      <motion.a
        href="https://github.com/davidhanlon23"
        target="_blank"
        rel="noopener noreferrer"
        variants={socialLinkVariants}
        whileHover="hover"
        whileTap="tap"
        className="text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center"
      >
        <Github size={28} />
        <span className="sr-only">GitHub</span>
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/david-hanlon/"
        target="_blank"
        rel="noopener noreferrer"
        variants={socialLinkVariants}
        whileHover="hover"
        whileTap="tap"
        className="text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center"
      >
        <Linkedin size={28} />
        <span className="sr-only">LinkedIn</span>
      </motion.a>
      <motion.button
        onClick={viewResume}
        variants={socialLinkVariants}
        whileHover="hover"
        whileTap="tap"
        className="text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center"
      >
        <FileUser size={28} className="mr-2" />
        <span className="sr-only">View Resume</span>
      </motion.button>
      <motion.button
        onClick={copyEmail}
        variants={socialLinkVariants}
        whileHover="hover"
        whileTap="tap"
        className="text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center"
      >
        <Mail size={28} className="mr-2" />
        <span className="sr-only">Copy Email</span>
        <Copy size={20} />
      </motion.button>
     
    </div>
  )
}
export default SocialLinks;
