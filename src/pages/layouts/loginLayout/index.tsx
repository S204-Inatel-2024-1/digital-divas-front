import digitalLogo from '../../../assets/imgs/DigitalDivasLogo.svg'
import loginFetinLogo from '../../../assets/imgs/logoLogin.svg'
import { LoginContainer, LoginContent, LoginFooter, LoginImg } from './styles'
import { Outlet } from 'react-router-dom'

export function LoginLayout() {
  return (
    <LoginContainer>
      <LoginContent>
        <div>
          <img src={loginFetinLogo} alt="" />
          <Outlet />
        </div>
        <LoginFooter>
          <img src={digitalLogo} alt="" />
        </LoginFooter>
      </LoginContent>
      <LoginImg></LoginImg>
    </LoginContainer>
  )
}
