import { useContext } from 'react'
import { UserLoggedContext } from '../../contexts/UserLoggedContext'
import { HeaderContainer, HeaderIcon, HeaderInfo, HeaderUser } from './styles'

export function Header() {
  const { userLogged } = useContext(UserLoggedContext)

  return (
    <HeaderContainer>
      <HeaderInfo>
        <HeaderUser>
          <span>{userLogged.firstName + ' ' + userLogged.lastName}</span>
          {userLogged.role === 'admin' && <span>Adminstrador</span>}
          {userLogged.role === 'advisor' && <span>Avaliador</span>}
          {userLogged.role === 'student' && <span>Aluno</span>}
        </HeaderUser>
        <HeaderIcon>
          <span>{userLogged.firstName[0] + userLogged.lastName[0]}</span>
        </HeaderIcon>
      </HeaderInfo>
    </HeaderContainer>
  )
}
