'use client'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '@/screens/home/components/projects/types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover rounded-md"
          />
          <p className="text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button onClick={() => window.open(project.liveUrl, '_blank')}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default ProjectModal;
