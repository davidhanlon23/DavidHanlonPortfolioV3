'use client'
import { motion } from 'framer-motion'
import { EducationCard } from './components';
import { EducationEntry } from '@/screens/home/components/education/types';

const educationData: EducationEntry[] = [
  {
    institution: "Stanford University",
    logo: "/placeholder.svg?height=80&width=80",
    degree: "Master of Science in Computer Science",
    years: "2018 - 2020",
    gpa: "3.9",
    achievements: ["Specialization in Artificial Intelligence", "Published 2 research papers"]
  },
  {
    institution: "University of California, Berkeley",
    logo: "/placeholder.svg?height=80&width=80",
    degree: "Bachelor of Science in Computer Science",
    years: "2014 - 2018",
    gpa: "3.8",
    achievements: ["Dean's List all semesters", "Graduated with Honors"]
  }
]

 const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 dark:bg-primary/10" />
          
          {educationData.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <EducationCard entry={entry} />
              </div>
              <div className="w-6 h-6 bg-primary rounded-full relative z-10">
                <span className="absolute top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium">
                  {entry.years.split(' - ')[0]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection;