import { FormFooter, InputContainer, LoginHeader } from './styles'
import { useContext } from 'react'
import { StyledButton } from '../login/style'
import { UserLoggedContext } from '../../../contexts/UserLoggedContext'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export function LoginFirstAccess() {
  const passwordUpdateFormSchema = z.object({
    password: z.string(),
    passwordConfirmation: z.string(),
  })

  type PasswordUpdateFormInputs = z.infer<typeof passwordUpdateFormSchema>

  const { putUser, userLogged } = useContext(UserLoggedContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PasswordUpdateFormInputs>({
    resolver: zodResolver(passwordUpdateFormSchema),
  })

  async function handlePasswordUpdateSubmit(data: PasswordUpdateFormInputs) {
    console.log('User logged:', userLogged)

    if (userLogged.password === 'default')
      if (data.password === data.passwordConfirmation)
        await putUser(data.password)
      else alert('As senhas não coincidem')
    else alert('A senha já foi alterada')

    console.log(data.password)
  }

  return (
    <div>
      <LoginHeader>
        <span>Primeiro acesso</span>
        <span>Crie uma nova senha.</span>
      </LoginHeader>
      <div>
        <form onSubmit={handleSubmit(handlePasswordUpdateSubmit)}>
          <InputContainer>
            <label>Senha *</label>
            <input
              type="password"
              placeholder="Insira sua senha..."
              {...register('password')}
            ></input>
          </InputContainer>
          <InputContainer>
            <label>Confirmação *</label>
            <input
              type="password"
              placeholder="Insira sua senha novamente..."
              {...register('passwordConfirmation')}
            ></input>
          </InputContainer>
          <FormFooter>
            <StyledButton type="submit" disabled={isSubmitting}>
              <div>Entrar</div>
            </StyledButton>
          </FormFooter>
        </form>
      </div>
    </div>
  )
}
