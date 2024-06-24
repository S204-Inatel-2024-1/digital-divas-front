import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { api } from '../lib/axios'

interface Project {
  id: number
  name: string
  description: string
  status: string
  stage: string
  level: number
  advisorId: number
  groupeId: number[]
}

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
