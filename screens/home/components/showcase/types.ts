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
    additionalUrls?: AdditionalItem[];
  }
  type ProjectType = 'side-project' | 'personal-project' | 'work-project';
  type AdditionalItem = {
    url: string;
    title: string;
  };