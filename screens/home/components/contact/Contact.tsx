'use client'
import { motion } from 'framer-motion'
import { SocialLinks, TypeWriter, ContactForm, ParticleBackground } from './components'

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParticleBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          <TypeWriter text="Get in Touch" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <div className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Connect with me</h3>
              <SocialLinks />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Location</h3>
              <p className="text-gray-300">Miami, FL</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500">Availability</h3>
              <p className="text-gray-300">Open to new opportunities</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection;
