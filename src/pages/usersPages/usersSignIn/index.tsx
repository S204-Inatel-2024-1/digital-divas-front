import {
  FormsTitle,
  ProjectFormContainer,
  ProjectsContainer,
  ProjectsHeader,
  StyledInput,
  InputContainer,
  StudentInfo,
  Divider,
  Divider2,
  FormsFooter,
} from './styles'

import { Breadcrumbs } from '../../../components/breadCrumbs'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonBlue } from '../../../components/buttonBlue'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'

export function UsersSignIn() {
  const { addUser } = useContext(UserContext)

  const userSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    role: z.string(),
  })

  type CreateUserFormInputs = z.infer<typeof userSchema>

  const { register, handleSubmit, reset } = useForm<CreateUserFormInputs>({
    resolver: zodResolver(userSchema),
  })

  function handleCreateUserSubmit(data: CreateUserFormInputs) {
    addUser(data)

    reset()
  }

  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Usuários / Lista / Novo Usuário" />
      <ProjectsHeader>
        <span>Novo Usuário</span>
      </ProjectsHeader>

      <ProjectFormContainer>
        <form onSubmit={handleSubmit(handleCreateUserSubmit)}>
          <div>
            <FormsTitle>Dados gerais</FormsTitle>
            <Divider></Divider>

            <StudentInfo>
              <InputContainer>
                <label htmlFor="description">Primeiro nome do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o nome..."
                  {...register('firstName')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Sobrenome do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o sobrenome..."
                  {...register('lastName')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Email do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o email..."
                  {...register('email')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Nível do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o nível do usuário..."
                  {...register('role')}
                />
              </InputContainer>
            </StudentInfo>
            <Divider2></Divider2>
          </div>
          <FormsFooter>
            <ButtonBlue text="Criar Usuário" type="submit" />
          </FormsFooter>
        </form>
      </ProjectFormContainer>
    </ProjectsContainer>
  )
}
