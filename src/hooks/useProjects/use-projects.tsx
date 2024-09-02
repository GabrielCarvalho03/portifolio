import { create } from "zustand";
import { ProjectsObj, useProjectsProps } from "./types";
import { getProjects } from "@pages/projects/services/services";

export const useProjects = create<useProjectsProps>((set) => ({
  loadingProjects: false,
  setLoadingProjects: (value: boolean) => set({ loadingProjects: value }),

  tags: [],
  setTags: (value: string[]) => set({ tags: value }),

  projects: [],
  setProjects: (value: ProjectsObj[]) => set({ projects: value }),
  handleGetProjects: async () => {
    const { setLoadingProjects, setProjects } = useProjects.getState();
    setLoadingProjects(true);
    try {
      const response = await getProjects();
      setProjects(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingProjects(false);
    }
  },
}));
