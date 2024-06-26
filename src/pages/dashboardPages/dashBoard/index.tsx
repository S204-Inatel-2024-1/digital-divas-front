import {
  Divider,
  ListContainer,
  ListContent,
  ListHead,
  ProjectsContainer,
  ProjectsHeader,
} from './styles'

import { FilterBarAndButton } from '../../../components/filter'
// import { StageCard } from '../../../components/stageCard'
import { SetStateAction, useContext, useState } from 'react'
import { Breadcrumbs } from '../../../components/breadCrumbs'
import { UserLoggedContext } from '../../../contexts/UserLoggedContext'

export function Dashboard() {
  const { userLogged } = useContext(UserLoggedContext)

  const [activeFilter, setActiveFilter] = useState('LISTA')

  const handleFilterClick = (filter: SetStateAction<string>) => {
    setActiveFilter(filter)
  }

  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Dashboard" />
      <ProjectsHeader>
        <span>
          Olá, {userLogged.firstName} {userLogged.lastName}!
        </span>
        <span>Visualize o andamento dessa edição da Fetin.</span>
      </ProjectsHeader>
      <ListContainer>
        <ListHead>
          <button
            className={activeFilter === 'LISTA' ? 'active' : ''}
            onClick={() => handleFilterClick('LISTA')}
          >
            LISTA
          </button>
          <button
            className={activeFilter === 'TABELA' ? 'active' : ''}
            onClick={() => handleFilterClick('TABELA')}
          >
            TABELA
          </button>
          <button
            className={activeFilter === 'CALENDÁRIO' ? 'active' : ''}
            onClick={() => handleFilterClick('CALENDÁRIO')}
          >
            CALENDÁRIO
          </button>
        </ListHead>
        <Divider></Divider>
        <FilterBarAndButton />
        <ListContent>{/* <StageCard /> */}</ListContent>
      </ListContainer>
    </ProjectsContainer>
  )
}
