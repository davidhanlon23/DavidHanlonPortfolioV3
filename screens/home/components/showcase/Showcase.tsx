'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard, ProjectModal } from './components'
import { Project } from './types'
import { PROJECT_DATA } from './constants'

export function Showcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const projects = PROJECT_DATA.filter((project) => project.type === 'work-project' || project.type === 'side-project')
  return (
    <section id="showcase" className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Showcase</h2>
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

export default Showcase;