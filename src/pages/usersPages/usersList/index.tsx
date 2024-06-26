import {
  Divider,
  ListContainer,
  ListContent,
  ListHead,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsHeaderButtons,
} from './styles'

import { FilterBarAndButton } from '../../../components/filter'
import { ButtonWhite } from '../../../components/buttonWhite'
import { ButtonBlue } from '../../../components/buttonBlue'
import { SetStateAction, useContext, useState, useEffect } from 'react'
import { Breadcrumbs } from '../../../components/breadCrumbs'
import { UserContext } from '../../../contexts/UserContext'
import { UserLoggedContext } from '../../../contexts/UserLoggedContext'

export function AdminUsersList() {
  const { users, fetchUsers } = useContext(UserContext)
  const { userLogged } = useContext(UserLoggedContext)

  const [activeFilter, setActiveFilter] = useState('ALUNOS')
  const [filteredUsers, setFilteredUsers] = useState(users)

  const handleFilterClick = (filter: SetStateAction<string>) => {
    setActiveFilter(filter)
  }

  useEffect(() => {
    if (activeFilter === 'ALUNOS') {
      setFilteredUsers(users.filter((user) => user.role === 'student'))
    } else if (activeFilter === 'ORIENTADORES') {
      setFilteredUsers(users.filter((user) => user.role === 'advisor'))
    } else if (activeFilter === 'ADMINSTRADORES') {
      setFilteredUsers(users.filter((user) => user.role === 'admin'))
    }
  }, [activeFilter, users])

  const renderTableHead = () => {
    switch (activeFilter) {
      case 'ALUNOS':
        return (
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Mat.</th>
            <th>Curso</th>
            <th>Período</th>
            <th>Instituto de Ensino</th>
            <th>País</th>
          </tr>
        )
      case 'ORIENTADORES':
        return (
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Instituto de Ensino</th>
            <th>País</th>
          </tr>
        )
      case 'ADMINSTRADORES':
        return (
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Instituto de Ensino</th>
            <th>País</th>
          </tr>
        )
      default:
        return null
    }
  }

  const renderTableBody = () => {
    return filteredUsers.map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.firstName + ' ' + user.lastName}</td>
        <td>{user.email}</td>
        {activeFilter === 'ALUNOS' && (
          <>
            <td>{user.registration}</td>
            <td>{user.course}</td>
            <td>{user.period}º período</td>
          </>
        )}
        <td>{user.institution}</td>
        <td>{user.country}</td>
      </tr>
    ))
  }

  fetchUsers()

  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Usuários / Lista" />
      <ProjectsHeader>
        <span>Todos os Usuários</span>
        <ProjectsHeaderButtons>
          {userLogged.role === 'admin' && (
            <>
              <ButtonWhite text="Importar usuário" to="" />
              <ButtonBlue text="Novo usuário" to="/app/userSignIn" />
            </>
          )}
        </ProjectsHeaderButtons>
      </ProjectsHeader>
      <ListContainer>
        <ListHead>
          <button
            className={activeFilter === 'ALUNOS' ? 'active' : ''}
            onClick={() => handleFilterClick('ALUNOS')}
          >
            ALUNOS
          </button>
          <button
            className={activeFilter === 'ORIENTADORES' ? 'active' : ''}
            onClick={() => handleFilterClick('ORIENTADORES')}
          >
            ORIENTADORES
          </button>
          <button
            className={activeFilter === 'ADMINSTRADORES' ? 'active' : ''}
            onClick={() => handleFilterClick('ADMINSTRADORES')}
          >
            ADMINSTRADORES
          </button>
        </ListHead>
        <Divider></Divider>
        <FilterBarAndButton />
        <ListContent>
          <table>
            <table>
              <thead>{renderTableHead()}</thead>
              <tbody>{renderTableBody()}</tbody>
            </table>
          </table>
        </ListContent>
      </ListContainer>
    </ProjectsContainer>
  )
}
