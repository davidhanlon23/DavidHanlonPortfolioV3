'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Experience } from '@/screens/home/components/experience/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/ui';

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const isEven = index % 2 === 0
  const isLogoString = typeof experience.logo === 'string';
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex ${isEven ? 'justify-end' : 'justify-start'} mb-8 w-full`}
    >
      <div className={`w-full lg:w-5/12 ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
        <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-2">
            {isLogoString ? (
              <Avatar className="h-10 w-10 rounded-lg">
                <AvatarImage src={experience.logo as string} alt={experience.company} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
          ) : experience.logo}
            <h3 className="text-lg font-semibold ml-2">{experience.company}</h3>
          </div>
          <h4 className="text-md font-medium text-gray-600 dark:text-gray-300">{experience.title}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {experience.startDate} - {experience.endDate}
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
            {experience.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default ExperienceCard;