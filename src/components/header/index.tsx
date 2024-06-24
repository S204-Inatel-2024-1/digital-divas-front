import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { HeaderContainer, HeaderIcon, HeaderInfo, HeaderUser } from './styles'

export function Header() {
  const { user } = useContext(UserContext)

  return (
    <HeaderContainer>
      <HeaderInfo>
        <HeaderUser>
          <span>{user.firstName + ' ' + user.lastName}</span>
          {user.role === 'admin' && <span>Adminstrador</span>}
          {user.role === 'avaliador' && <span>Avaliador</span>}
          {user.role === 'aluno' && <span>Aluno</span>}
        </HeaderUser>
        <HeaderIcon>
          <span>{user.firstName[0] + user.lastName[0]}</span>
        </HeaderIcon>
      </HeaderInfo>
    </HeaderContainer>
  )
}
