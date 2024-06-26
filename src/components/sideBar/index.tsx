import {
  SideBarContainer,
  SideBarContent,
  SideBarFooter,
  SideBarHeader,
  SideBarButtons,
  StyledNavLink,
} from './styles'
import Logo from '../../assets/imgs/LogoFetinApp.svg'
import ArrowLeft from '../../assets/icons/arrowLeft.svg'
// import HomeIcon from '../../assets/icons/home-2.svg'
import CheckIcon from '../../assets/icons/tick-square.svg'
import CupIcon from '../../assets/icons/cup.svg'
import ProfileIcon from '../../assets/icons/profile-2user.svg'
import DigitalDivasLogo from '../../assets/imgs/DigitalDivasLogo.svg'
import { UserLoggedContext } from '../../contexts/UserLoggedContext'
import { useContext } from 'react'
export function SideBar() {
  const { userLogged } = useContext(UserLoggedContext)

  return (
    <SideBarContainer>
      <SideBarHeader>
        <img src={Logo} alt="" />
        <img src={ArrowLeft} alt="" />
      </SideBarHeader>
      <SideBarContent>
        <SideBarButtons>
          {/* <StyledNavLink
            to={'/app/dashboard'}
            style={{ textDecoration: 'none' }}
          >
            <img src={HomeIcon} alt="" />
            <span>Início</span>
          </StyledNavLink> */}

          {userLogged.role === 'admin' && (
            <>
              <StyledNavLink
                to={'/app/projectsList'}
                style={{ textDecoration: 'none' }}
              >
                <img src={CupIcon} alt="" />
                <span>Projetos</span>
              </StyledNavLink>
            </>
          )}

          {userLogged.role === 'student' && (
            <>
              <StyledNavLink
                to={'/app/projectsOfUser'}
                style={{ textDecoration: 'none' }}
              >
                <img src={CupIcon} alt="" />
                <span>Meus Projetos</span>
              </StyledNavLink>
            </>
          )}

          {userLogged.role === 'advisor' && (
            <>
              <StyledNavLink
                to={'/app/projectsOfUser'}
                style={{ textDecoration: 'none' }}
              >
                <img src={CupIcon} alt="" />
                <span>Meus Projetos</span>
              </StyledNavLink>
            </>
          )}

          <StyledNavLink
            to={'/app/stagesList'}
            style={{ textDecoration: 'none' }}
          >
            <img src={CheckIcon} alt="" />
            <span>Etapas</span>
          </StyledNavLink>

          <StyledNavLink
            to={'/app/usersList'}
            style={{ textDecoration: 'none' }}
          >
            <img src={ProfileIcon} alt="" />
            <span>Usuários</span>
          </StyledNavLink>
          <StyledNavLink
            to={'/app/userUpdate'}
            style={{ textDecoration: 'none' }}
          >
            <img src={ProfileIcon} alt="" />
            <span>Configurações</span>
          </StyledNavLink>
        </SideBarButtons>
        <SideBarFooter>
          <img src={DigitalDivasLogo} alt="" />
        </SideBarFooter>
      </SideBarContent>
    </SideBarContainer>
  )
}
