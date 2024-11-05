'use client'

import { motion } from 'framer-motion'
import { ImageCarousel, Badge, Card, CardContent, CardFooter } from '@/ui'
import { Project } from '../../types'
interface ProjectCardProps {
  project: Project
  onClick: () => void
}

 function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="overflow-hidden cursor-pointer bg-white dark:bg-gray-900 shadow-lg" onClick={onClick}>
        <ImageCarousel images={project.images} alt={project.title} />
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          {project.comingSoon && <Badge variant="secondary" className="mb-4 bg-primary">Coming Soon</Badge>}
          <p className="text-muted-foreground mb-4">{project.description}</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
export default ProjectCard;
