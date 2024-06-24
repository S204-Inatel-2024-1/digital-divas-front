import {
  FormFooter,
  InputContainer,
  LoginHeader,
  LoginNotice,
  StyledButton,
} from './style'

import { Link } from 'react-router-dom'
import { UserLoggedContext } from '../../../contexts/UserLoggedContext'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'

export function LoginPage() {
  const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  type LoginFormInputs = z.infer<typeof loginFormSchema>

  const { fetchUser } = useContext(UserLoggedContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLoginSubmit(data: LoginFormInputs) {
    await fetchUser(data.email, data.password)
  }

  return (
    <div>
      <LoginHeader>
        <span>Boas vindas!</span>
        <span>
          Insira seus dados para acessar <b>Fetin App</b>.
        </span>
      </LoginHeader>
      <div>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <InputContainer>
            <label>Email *</label>
            <input
              type="email"
              placeholder="Insira seu e-mail..."
              {...register('email')}
            ></input>
          </InputContainer>
          <InputContainer>
            <label>Senha *</label>
            <input
              type="password"
              placeholder="Insira sua senha..."
              {...register('password')}
            ></input>
          </InputContainer>
          <FormFooter>
            <Link to={'/login/passwordRefactor'}>Esqueci minha senha</Link>
            <StyledButton type="submit" disabled={isSubmitting}>
              <div>Entrar</div>
            </StyledButton>
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
