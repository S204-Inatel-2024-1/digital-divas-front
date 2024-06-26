import {
  ListContainer,
  ListContent,
  ProjectsContainer,
  ProjectsHeader,
} from './styles'

import { useContext, useEffect } from 'react'
import { Breadcrumbs } from '../../../components/breadCrumbs'
import { UserLoggedContext } from '../../../contexts/UserLoggedContext'
import { ProjectContext } from '../../../contexts/ProjectContext'
import { ProjectCard } from '../../../components/projectCard'
import { NavLink } from 'react-router-dom'

export function ProjectsOfUser() {
  const { userLogged } = useContext(UserLoggedContext)
  const { projects, fetchProjects } = useContext(ProjectContext)
  // const [projectsOfUser, setProjectsOfUser] = useState(projects)

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  const filteredProjects = projects.filter(
    (project) =>
      project.advisor.id === userLogged.id ||
      project.team.some((team) => team.id === userLogged.id),
  )

  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Projetos / Meus Projetos" />
      <ProjectsHeader>
        <span>
          Meus projetos - {userLogged.firstName} {userLogged.lastName}
        </span>
      </ProjectsHeader>
      <ListContainer>
        <ListContent>
          {filteredProjects.map((project) => (
            <NavLink
              key={project.id}
              to={`/app/projectPage/${project.id}`}
              style={{ textDecoration: 'none' }}
            >
              <ProjectCard
                description={project.description}
                level={project.level}
                name={project.name}
                status={project.status}
              />
            </NavLink>
          ))}
        </ListContent>
      </ListContainer>
    </ProjectsContainer>
  )
}
