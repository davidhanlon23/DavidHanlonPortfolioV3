'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple } from 'react-icons/fa';
import { Experience } from '@/screens/home/components/experience/types';
import { ExperienceCard } from './components';

const experiences: Experience[] = [
    {
      company: 'Google',
      logo: <FaGoogle className="text-2xl" />,
      title: 'Senior Software Engineer',
      startDate: 'Jan 2020',
      endDate: 'Present',
      responsibilities: [
        'Led development of core search algorithms',
        'Optimized cloud infrastructure for scalability',
        'Mentored junior engineers and interns'
      ]
    },
    {
      company: 'Amazon',
      logo: <FaAmazon className="text-2xl" />,
      title: 'Full Stack Developer',
      startDate: 'Jun 2018',
      endDate: 'Dec 2019',
      responsibilities: [
        'Developed e-commerce platform features',
        'Implemented RESTful APIs for mobile applications',
        'Improved site performance and user experience'
      ]
    },
    {
      company: 'Microsoft',
      logo: <FaMicrosoft className="text-2xl" />,
      title: 'Software Development Engineer',
      startDate: 'Aug 2016',
      endDate: 'May 2018',
      responsibilities: [
        'Contributed to Azure cloud services development',
        'Implemented security features for Office 365',
        'Collaborated on cross-platform compatibility projects'
      ]
    },
    {
      company: 'Apple',
      logo: <FaApple className="text-2xl" />,
      title: 'iOS Developer',
      startDate: 'Feb 2015',
      endDate: 'Jul 2016',
      responsibilities: [
        'Developed features for iOS native applications',
        'Optimized app performance and battery usage',
        'Contributed to UI/UX design improvements'
      ]
    }
  ]
  
const ExperienceSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const timelineRef = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      const handleScroll = () => {
        if (timelineRef.current) {
          const { top, bottom } = timelineRef.current.getBoundingClientRect()
          const viewportHeight = window.innerHeight
  
          if (top < viewportHeight && bottom > 0) {
            const scrollPercentage = (viewportHeight - top) / (bottom - top)
            const newIndex = Math.floor(scrollPercentage * experiences.length)
            setActiveIndex(Math.min(newIndex, experiences.length - 1))
          }
        }
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return(
        <section id="experience" className="bg-gray-100 dark:bg-black relative overflow-hidden">
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
                        Career Journey
                    </h2>
                    <div ref={timelineRef} className="relative min-h-[500px]">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700" />
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ExperienceSection;
