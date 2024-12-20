'use client'
import { Badge, Button, Dialog, DialogContent, DialogHeader, DialogTitle, ImageCarousel } from '@/ui'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const hasGithubUrl = project.githubUrl !== ''
  const hasLiveUrl = project.liveUrl !== ''
  const hasAdditionalUrls = project?.additionalUrls?.length && project?.additionalUrls?.length > 0;
  return (
    <Dialog open={true} onOpenChange={onClose} >
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-900 shadow-lg" aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <ImageCarousel images={project.images} alt={project.title} />
          <p id="dialog-description" className="text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            {hasGithubUrl && (
              <Button variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            )}
            {hasLiveUrl && (
              <Button onClick={() => window.open(project.liveUrl, '_blank')}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Site
              </Button>
            )}
          </div>
          {/* { hasAdditionalUrls && (
              <div>
                {project.additionalUrls?.map((additionalItem) => {
                  return(
                    <Button onClick={() => window.open(additionalItem.url, '_blank')}>
                       <ExternalLink className="mr-2 h-4 w-4" />
                       {additionalItem.title}
                    </Button>
                  );
                })}
              </div>
           )} */}
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default ProjectModal;