import {
  CircleInitial,
  Divider,
  ListContainer,
  ListContent,
  ListHead,
  Pagination,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsHeaderButtons,
  TeamContainer,
} from './styles'

import { FilterBarAndButton } from '../../../components/filter'
import { ButtonWhite } from '../../../components/buttonWhite'
import { ButtonBlue } from '../../../components/buttonBlue'
import { SetStateAction, useContext, useEffect, useState } from 'react'
import { Breadcrumbs } from '../../../components/breadCrumbs'
import { UserLoggedContext } from '../../../contexts/UserLoggedContext'
import { ProjectContext } from '../../../contexts/ProjectContext'
import { useNavigate } from 'react-router-dom'

export function AdminProjectsList() {
  const navigate = useNavigate()
  const { userLogged } = useContext(UserLoggedContext)
  const { fetchProjects, projects } = useContext(ProjectContext)
  const [activeFilter, setActiveFilter] = useState('TODOS OS NÍVEIS')

  const handleFilterClick = (filter: SetStateAction<string>) => {
    setActiveFilter(filter)
  }

  const handleRowClick = (id: string) => {
    navigate(`/app/projectPage/${id}`)
  }

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Projetos / Lista" />
      <ProjectsHeader>
        <span>Todos os Projetos</span>
        <ProjectsHeaderButtons>
          {userLogged.role === 'admin' && (
            <>
              <ButtonWhite text="Importar projeto" to="projectEdit" />
              <ButtonBlue text="Novo projeto" to="projectsSignIn" />
            </>
          )}
        </ProjectsHeaderButtons>
      </ProjectsHeader>

      <ListContainer>
        <ListHead>
          <button
            className={activeFilter === 'TODOS OS NÍVEIS' ? 'active' : ''}
            onClick={() => handleFilterClick('TODOS OS NÍVEIS')}
          >
            TODOS OS NÍVEIS
          </button>
          <button
            className={activeFilter === 'NÍVEL 1' ? 'active' : ''}
            onClick={() => handleFilterClick('NÍVEL 1')}
          >
            NÍVEL 1
          </button>
          <button
            className={activeFilter === 'NÍVEL 2' ? 'active' : ''}
            onClick={() => handleFilterClick('NÍVEL 2')}
          >
            NÍVEL 2
          </button>
          <button
            className={activeFilter === 'NÍVEL 3' ? 'active' : ''}
            onClick={() => handleFilterClick('NÍVEL 3')}
          >
            NÍVEL 3
          </button>
          <button
            className={activeFilter === 'NÍVEL 4' ? 'active' : ''}
            onClick={() => handleFilterClick('NÍVEL 4')}
          >
            NÍVEL 4
          </button>
        </ListHead>
        <Divider></Divider>
        <FilterBarAndButton />
        <ListContent>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Nível</th>
                <th>Equipe</th>
                <th>Orientador</th>
                <th>Etapa</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} onClick={() => handleRowClick(project.id)}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>Nível {project.level}</td>
                  <td>
                    <TeamContainer>
                      {project.team.map((team, index) => (
                        <CircleInitial key={index}>
                          {team.firstName[0]} {team.lastName[0]}
                        </CircleInitial>
                      ))}
                    </TeamContainer>
                  </td>
                  <td>
                    {project.advisor.firstName} {project.advisor.lastName}
                  </td>
                  <td>{project.stage}</td>
                  <td>{project.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ListContent>
        <Pagination>
          <span>Linhas por página: 10</span>
          <span>280 projetos</span>
          <span>1 2 3 ... 123 124</span>
        </Pagination>
      </ListContainer>
    </ProjectsContainer>
  )
}
