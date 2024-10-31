'use client'
import { motion } from 'framer-motion'
import { SocialLinks, TypeWriter, ParticleBackground } from './components'

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-white dark:bg-black text-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* <ParticleBackground /> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto relative z-10"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
          <TypeWriter text="Get in Touch" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
              <SocialLinks />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Miami, FL</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Availability</h3>
              <p className="text-gray-300">Open to new opportunities</p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default ContactSection;
