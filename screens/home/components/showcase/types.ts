export interface Project {
    id: number
    title: string
    comingSoon?: boolean
    description: string
    technologies: string[]
    imageUrl: string
    githubUrl: string
    liveUrl: string
    images: string[];
    type: ProjectType;
  }
  type ProjectType = 'side-project' | 'personal-project' | 'work-project';
