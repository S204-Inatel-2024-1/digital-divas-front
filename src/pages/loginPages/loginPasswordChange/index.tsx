import { FormFooter, InputContainer, LoginHeader } from './styles'
import { ButtonBlue } from '../../../components/buttonBlue'

export function LoginPasswordChange() {
  return (
    <div>
      <LoginHeader>
        <span>Redefinir senha</span>
        <span>Redefina sua senha.</span>
      </LoginHeader>
      <div>
        <form>
          <InputContainer>
            <label>Senha *</label>
            <input type="email" placeholder="Insira sua senha..."></input>
          </InputContainer>
          <InputContainer>
            <label>Confirmação *</label>
            <input
              type="password"
              placeholder="Insira sua senha novamente..."
            ></input>
          </InputContainer>
          <FormFooter>
            <ButtonBlue text="Entrar" to="/app/admin/projectsList" />
          </FormFooter>
        </form>
      </div>
    </div>
  )
}
