import { FormFooter, InputContainer, LoginHeader, LoginNotice } from './style'

import { Link } from 'react-router-dom'
import { ButtonBlue } from '../../../components/buttonBlue'

export function LoginPage() {
  return (
    <div>
      <LoginHeader>
        <span>Boas vindas!</span>
        <span>
          Insira seus dados para acessar <b>Fetin App</b>.
        </span>
      </LoginHeader>
      <div>
        <form>
          <InputContainer>
            <label>Email *</label>
            <input type="email" placeholder="Insira seu e-mail..."></input>
          </InputContainer>
          <InputContainer>
            <label>Senha *</label>
            <input type="password" placeholder="Insira sua senha..."></input>
          </InputContainer>
          <FormFooter>
            <Link
              to={'/login/passwordRefactor'}
              style={{ textDecoration: 'none' }}
            >
              <a>Esqueci minha senha</a>
            </Link>
            <ButtonBlue text="Entrar" to="/login/firstAcess" />
          </FormFooter>
        </form>
      </div>
      <LoginNotice>
        <span>Ainda não possui cadastro?</span>
        <span>
          Mande um e-mail para fetin@inatel.br solicitando suas credenciais de
          acesso.
        </span>
      </LoginNotice>
    </div>
  )
}
