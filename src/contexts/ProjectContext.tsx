import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { api } from '../lib/axios'
import { Project } from '../models/ProjectModel'

interface ProjectContextType {
  projects: Project[]
  fetchProjects: () => Promise<void>
}

export const ProjectContext = createContext({} as ProjectContextType)

interface ProjectContextProviderProps {
  children: ReactNode
}

export function ProjectProvider({ children }: ProjectContextProviderProps) {
  const [projects, setProjects] = useState<Project[]>([])

  const fetchProjects = useCallback(async () => {
    const response = await api.get('projects')
    setProjects(response.data)
  }, [])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  return (
    <ProjectContext.Provider value={{ projects, fetchProjects }}>
      {children}
    </ProjectContext.Provider>
  )
}
