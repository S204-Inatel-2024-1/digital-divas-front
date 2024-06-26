import {
  ProjectsContainer,
  ProjectsHeader,
  UserData,
  UserDataContent,
} from './styles'

import { useContext, useEffect } from 'react'
import { Breadcrumbs } from '../../../components/breadCrumbs'
import { ProjectContext } from '../../../contexts/ProjectContext'
import { useParams } from 'react-router-dom'
import { AdvisorCard } from '../../../components/advisorCard'
// import { TeamCard } from '../../../components/teamCard'

export function ProjectPage() {
  const { projectPage, fetchProjectById } = useContext(ProjectContext)

  const { id } = useParams()

  useEffect(() => {
    fetchProjectById(id as string)
  }, [fetchProjectById, id])

  console.log(id)
  console.log(projectPage)

  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Projetos / Meus Projetos" />
      <ProjectsHeader>
        <span>{projectPage.name}</span>
        <span>{projectPage.description}</span>
      </ProjectsHeader>

      <UserData>
        <UserDataContent>
          <span>Fase</span>
          <span>{projectPage.stage}</span>
        </UserDataContent>
        <UserDataContent>
          <span>Status</span>
          <span>{projectPage.status}</span>
        </UserDataContent>
        <UserDataContent>
          <span>Nível</span>
          <span>{projectPage.level}</span>
        </UserDataContent>
        <UserDataContent>
          <span>Data de Início</span>
          <span>{}</span>
        </UserDataContent>
      </UserData>

      <AdvisorCard
        country={'Brasil'}
        email={projectPage.advisor.email}
        firstName={projectPage.advisor.firstName}
        instituition={projectPage.advisor.institution}
        lastName={projectPage.advisor.lastName}
      />

      {/* {projectPage.team.map((student, index) => (
        <div key={student.id}>
          <TeamCard
            email={student.email}
            firstName={student.firstName}
            id={index + 1}
            registration={student.email}
            lastName={student.lastName}
            country={student.country}
            course={student.course}
            institution={student.institution}
            period={student.period}
          />
        </div>
      ))} */}
    </ProjectsContainer>
  )
}
