import { create } from 'zustand';
import { Project, ChatMessage, MessageType } from '@/types';
import { projects as initialProjects } from '@/data/projects';

interface StoreState {
  // Project state
  projects: Project[];
  selectedProjectId: string | null;
  selectedProject: Project | null;
  
  // UI state
  isMobileMenuOpen: boolean;
  isRightPanelOpen: boolean;
  
  // Actions
  setSelectedProjectId: (id: string | null) => void;
  toggleMobileMenu: () => void;
  toggleRightPanel: () => void;
  addMessage: (projectId: string, message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProjectStatus: (projectId: string, status: string) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  // Initial state
  projects: initialProjects,
  selectedProjectId: initialProjects.length > 0 ? initialProjects[0].id : null,
  selectedProject: initialProjects.length > 0 ? initialProjects[0] : null,
  isMobileMenuOpen: false,
  isRightPanelOpen: true,
  
  // Actions
  setSelectedProjectId: (id: string | null) => set((state) => {
    const selectedProject = id ? state.projects.find(p => p.id === id) || null : null;
    return { selectedProjectId: id, selectedProject };
  }),
  
  toggleMobileMenu: () => set((state) => ({ 
    isMobileMenuOpen: !state.isMobileMenuOpen 
  })),
  
  toggleRightPanel: () => set((state) => ({ 
    isRightPanelOpen: !state.isRightPanelOpen 
  })),
  
  addMessage: (projectId: string, message: Omit<ChatMessage, 'id' | 'timestamp'>) => set((state) => {
    const projects = state.projects.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          messages: [
            ...project.messages,
            {
              id: `msg-${Date.now()}`,
              timestamp: new Date().toISOString(),
              ...message
            }
          ]
        };
      }
      return project;
    });
    
    const selectedProject = projectId === state.selectedProjectId
      ? projects.find(p => p.id === projectId) || null
      : state.selectedProject;
      
    return { projects, selectedProject };
  }),
  
  addProject: (project: Omit<Project, 'id'>) => set((state) => {
    const newProject = {
      id: `project-${Date.now()}`,
      ...project,
    };
    
    return {
      projects: [...state.projects, newProject],
      selectedProjectId: newProject.id,
      selectedProject: newProject
    };
  }),
  
  updateProjectStatus: (projectId: string, status: string) => set((state) => {
    const projects = state.projects.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          status,
          timeline: [
            {
              id: `timeline-${Date.now()}`,
              action: `Status changed to ${status}`,
              timestamp: new Date().toISOString(),
              user: 'Current User'
            },
            ...project.timeline
          ]
        };
      }
      return project;
    });
    
    const selectedProject = projectId === state.selectedProjectId
      ? projects.find(p => p.id === projectId) || null
      : state.selectedProject;
      
    return { projects, selectedProject };
  })
}));