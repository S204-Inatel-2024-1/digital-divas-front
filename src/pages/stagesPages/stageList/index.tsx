import {
  Divider,
  ListContainer,
  ListContent,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsHeaderButtons,
} from './styles'

import { FilterBarAndButton } from '../../../components/filter'
import { ButtonBlue } from '../../../components/buttonBlue'
// import { StageCard } from '../../../components/stageCard'
import { useContext } from 'react'
import { Breadcrumbs } from '../../../components/breadCrumbs'
import { UserLoggedContext } from '../../../contexts/UserLoggedContext'
import { StageContext } from '../../../contexts/StageContext'
import { StageCard } from '../../../components/stageCard'

export function AdminStagesList() {
  const { userLogged } = useContext(UserLoggedContext)
  const { stages, fetchStages } = useContext(StageContext)

  fetchStages()

  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Etapas / Lista" />
      <ProjectsHeader>
        <span>Todos as Etapas</span>
        <ProjectsHeaderButtons>
          {userLogged.role === 'admin' && (
            <>
              <ButtonBlue text="Nova etapa" to="/app/stagesSignIn" />
            </>
          )}
        </ProjectsHeaderButtons>
      </ProjectsHeader>
      <ListContainer>
        <Divider></Divider>
        <FilterBarAndButton />
        <ListContent>
          {stages.map((stage) => {
            return (
              <div key={stage.id}>
                <StageCard
                  id={stage.id}
                  name={stage.name}
                  description={stage.description}
                  date={stage.date}
                  status={stage.status}
                />
              </div>
            )
          })}
        </ListContent>
      </ListContainer>
    </ProjectsContainer>
  )
}
