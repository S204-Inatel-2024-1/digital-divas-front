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
import HomeIcon from '../../assets/icons/home-2.svg'
import CheckIcon from '../../assets/icons/tick-square.svg'
import CupIcon from '../../assets/icons/cup.svg'
import ProfileIcon from '../../assets/icons/profile-2user.svg'
import DigitalDivasLogo from '../../assets/imgs/DigitalDivasLogo.svg'
export function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <img src={Logo} alt="" />
        <img src={ArrowLeft} alt="" />
      </SideBarHeader>
      <SideBarContent>
        <SideBarButtons>
          <StyledNavLink
            to={'/app/admin/dashboard'}
            style={{ textDecoration: 'none' }}
          >
            <img src={HomeIcon} alt="" />
            <span>Início</span>
          </StyledNavLink>
          <StyledNavLink
            to={'/app/admin/stagesList'}
            style={{ textDecoration: 'none' }}
          >
            <img src={CheckIcon} alt="" />
            <span>Etapas</span>
          </StyledNavLink>
          <StyledNavLink
            to={'/app/admin/projectsList'}
            style={{ textDecoration: 'none' }}
          >
            <img src={CupIcon} alt="" />
            <span>Projetos</span>
          </StyledNavLink>
          <StyledNavLink
            to={'/app/admin/usersList'}
            style={{ textDecoration: 'none' }}
          >
            <img src={ProfileIcon} alt="" />
            <span>Usuários</span>
          </StyledNavLink>
          <StyledNavLink to={'/'} style={{ textDecoration: 'none' }}>
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
