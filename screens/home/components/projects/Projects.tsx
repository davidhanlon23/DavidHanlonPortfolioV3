'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard, ProjectModal } from './components'
import { Project } from './types'

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Task Manager',
    description: 'A smart task management app that uses AI to prioritize and categorize tasks.',
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
    imageUrl: '/placeholder.svg?height=200&width=300',
    githubUrl: 'https://github.com/davidhanlon23/ai-task-manager',
    liveUrl: 'https://ai-task-manager.vercel.app',
    images: ['https://media.istockphoto.com/id/1794813350/photo/christmas-decorating.jpg?s=1024x1024&w=is&k=20&c=79KS9CdVQEZYaKDTPQZtUO_owI4WMQdvyab0GLfiV6I=', 'https://media.istockphoto.com/id/1744915333/photo/drone-view-of-a-river-in-rural-scotland.jpg?s=1024x1024&w=is&k=20&c=u_7U4N8M1dl52iy-sgEnXK6NaeEMuYi9z8LMDLtBNJM=', 'https://media.istockphoto.com/id/2158201222/photo/happy-female-tourist-exploring-vibrant-weekend-market-with-backpack.jpg?s=1024x1024&w=is&k=20&c=EsIIdwLtjMgoWtpC-N2Gjr81DGwH5_071QcFQNbr2KI=']
  },
  {
    id: 2,
    title: 'Blockchain Voting System',
    description: 'A secure and transparent voting system built on blockchain technology.',
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
    imageUrl: '/placeholder.svg?height=200&width=300',
    githubUrl: 'https://github.com/davidhanlon23/blockchain-voting',
    liveUrl: 'https://blockchain-voting.vercel.app',
    images: ['https://media.istockphoto.com/id/1794813350/photo/christmas-decorating.jpg?s=1024x1024&w=is&k=20&c=79KS9CdVQEZYaKDTPQZtUO_owI4WMQdvyab0GLfiV6I=', 'https://media.istockphoto.com/id/1744915333/photo/drone-view-of-a-river-in-rural-scotland.jpg?s=1024x1024&w=is&k=20&c=u_7U4N8M1dl52iy-sgEnXK6NaeEMuYi9z8LMDLtBNJM=', 'https://media.istockphoto.com/id/2158201222/photo/happy-female-tourist-exploring-vibrant-weekend-market-with-backpack.jpg?s=1024x1024&w=is&k=20&c=EsIIdwLtjMgoWtpC-N2Gjr81DGwH5_071QcFQNbr2KI=']
  },
  {
    id: 3,
    title: 'AR Interior Designer',
    description: 'An augmented reality app for visualizing furniture and decor in real-time.',
    technologies: ['Unity', 'ARKit', 'C#', 'iOS'],
    imageUrl: '/placeholder.svg?height=200&width=300',
    githubUrl: 'https://github.com/davidhanlon23/ar-interior-designer',
    liveUrl: 'https://apps.apple.com/us/app/ar-interior-designer',
    images: ['https://media.istockphoto.com/id/1794813350/photo/christmas-decorating.jpg?s=1024x1024&w=is&k=20&c=79KS9CdVQEZYaKDTPQZtUO_owI4WMQdvyab0GLfiV6I=', 'https://media.istockphoto.com/id/1744915333/photo/drone-view-of-a-river-in-rural-scotland.jpg?s=1024x1024&w=is&k=20&c=u_7U4N8M1dl52iy-sgEnXK6NaeEMuYi9z8LMDLtBNJM=', 'https://media.istockphoto.com/id/2158201222/photo/happy-female-tourist-exploring-vibrant-weekend-market-with-backpack.jpg?s=1024x1024&w=is&k=20&c=EsIIdwLtjMgoWtpC-N2Gjr81DGwH5_071QcFQNbr2KI=']
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
export default ProjectsSection;