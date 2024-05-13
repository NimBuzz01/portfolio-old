import { create } from "zustand";

interface ProjectStore {
  inViewProject: string | null;
  setInViewProject: (project: string | null) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  inViewProject: null,
  setInViewProject: (project: string | null) => set({ inViewProject: project }),
}));
