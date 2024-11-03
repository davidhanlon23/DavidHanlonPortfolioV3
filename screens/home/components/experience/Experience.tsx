'use client'

import { useState, useRef, useEffect } from 'react'
import { Experience } from '@/screens/home/components/experience/types';
import { ExperienceCard } from './components';

import { EXPERIENCE_DATA } from './constants';
  
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
            const newIndex = Math.floor(scrollPercentage * EXPERIENCE_DATA.length)
            setActiveIndex(Math.min(newIndex, EXPERIENCE_DATA.length - 1))
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
                        {EXPERIENCE_DATA.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ExperienceSection;
