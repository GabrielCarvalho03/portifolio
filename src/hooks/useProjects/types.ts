export type ProjectsObj = {
  _id: string;
  name: string;
  description: string;
  photoUrl: string;
  crated_At: Date;
  tags: [string];
  link: string;
};

export interface useProjectsProps {
  loadingProjects: boolean;
  setLoadingProjects: (loadingProjects: boolean) => void;

  projects: ProjectsObj[];
  setProjects: (projects: ProjectsObj[]) => void;
  handleGetProjects: () => Promise<void>;

  tags: string[];
  setTags: (tags: string[]) => void;
}
