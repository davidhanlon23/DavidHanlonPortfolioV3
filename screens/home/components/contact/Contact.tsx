'use client'
import { motion } from 'framer-motion'
import { SocialLinks, TypeWriter, ParticleBackground, ContactForm } from './components'

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-white dark:bg-black text-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* <ParticleBackground /> */}
        <h2 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
          <TypeWriter text="Get in Touch" />
        </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto relative z-10 flex flex-col md:flex-row md:max-w-5xl gap-8 justify-center"
      >
      
          <div className="w-full md:w-1/2 space-y-6 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">Connect with me</h3>
              <SocialLinks />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Location</h3>
              <p className="text-gray-500 dark:text-gray-300">Miami, FL</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Availability</h3>
              <p className="text-gray-500 dark:text-gray-300">Open to new opportunities</p>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2"><ContactForm /></div> */}

      </motion.div>
    </section>
  )
}

export default ContactSection;
