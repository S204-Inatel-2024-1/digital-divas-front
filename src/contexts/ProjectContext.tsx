import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useContext,
} from 'react'
import { api } from '../lib/axios'
import { ProjectModel } from '../models/ProjectModel'
import { UserContext } from './UserContext'

interface AddProjectParams {
  name: string
  level: string
  advisorId: string
  team: string[]
}

interface ProjectContextType {
  projects: ProjectModel[]
  projectPage: ProjectModel
  fetchProjects: () => Promise<void>
  addProject: (project: AddProjectParams) => Promise<void>
  fetchProjectById: (projectId: string) => Promise<void>
  putProject: (newData: ProjectModel) => Promise<void>
}

export const ProjectContext = createContext({} as ProjectContextType)

interface ProjectContextProviderProps {
  children: ReactNode
}

export function ProjectProvider({ children }: ProjectContextProviderProps) {
  const [projects, setProjects] = useState<ProjectModel[]>([])
  const [projectPage, setProjectPage] = useState<ProjectModel>(
    {} as ProjectModel,
  )

  const { fetchUserWithId } = useContext(UserContext)

  const fetchProjects = useCallback(async () => {
    const response = await api.get('projects')
    setProjects(response.data)
  }, [])

  const fetchProjectById = useCallback(async (projectId: string) => {
    console.log(projectId)
    const response = await api.get(`projects/${projectId}`)
    console.log(response.data)
    setProjectPage(response.data)
  }, [])

  const addProject = useCallback(
    async ({ name, level, advisorId, team }: AddProjectParams) => {
      const fetch = await api.get('projects')

      const teamPromises = team.map((id) => fetchUserWithId(id))
      const userModels = await Promise.all(teamPromises)

      const advisorModel = await fetchUserWithId(advisorId)

      const newProject: ProjectModel = {
        id: String(fetch.data.length + 1),
        name,
        advisor: advisorModel,
        team: userModels,
        description: '',
        stage: '1',
        status: 'Ativo',
        level,
        startDate: new Date(),
      }

      const response = await api.post('projects', newProject)
      if (response.status === 201) {
        setProjects((prevProjects) => [...prevProjects, response.data])
      }
    },
    [fetchUserWithId],
  )

  const putProject = useCallback(
    async (newData: ProjectModel) => {
      const updatedProject = {
        ...newData,
      }

      await api.put(`projects/${projectPage.id}`, updatedProject)

      setProjectPage(updatedProject)
    },
    [projectPage],
  )

  return (
    <ProjectContext.Provider
      value={{
        projects,
        fetchProjects,
        addProject,
        projectPage,
        fetchProjectById,
        putProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
