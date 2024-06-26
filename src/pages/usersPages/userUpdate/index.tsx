import { Breadcrumbs } from '../../../components/breadCrumbs'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonBlue } from '../../../components/buttonBlue'
import { useContext } from 'react'
import { UserLoggedContext } from '../../../contexts/UserLoggedContext'
import { UserModel } from '../../../models/UserModel'
import {
  Divider,
  Divider2,
  FormsFooter,
  FormsTitle,
  InputContainer,
  ProjectFormContainer,
  ProjectsContainer,
  ProjectsHeader,
  StudentInfo,
  StyledInput,
  UserDataContent,
  UserData1,
} from './styles'
import { ProjectsHeaderButtons } from '../usersList/styles'

export function UserUpdate() {
  const { userLogged, putUserLogged, logOut } = useContext(UserLoggedContext)

  const userUpdateSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    course: z.string(),
    registration: z.string(),
    period: z.string(),
    institution: z.string(),
    country: z.string(),
    email: z.string(),
  })

  type UpdateUserFormInputs = z.infer<typeof userUpdateSchema>

  const { register, handleSubmit, reset } = useForm<UpdateUserFormInputs>({
    resolver: zodResolver(userUpdateSchema),
  })

  function handleUpdateUserSubmit(data: UpdateUserFormInputs) {
    const newUser: UserModel = {
      id: userLogged.id,
      firstName: data.firstName,
      lastName: data.lastName,
      course: data.course,
      registration: data.registration,
      period: data.period,
      institution: data.institution,
      country: data.country,
      email: data.email,
      password: userLogged.password,
      role: userLogged.role,
    }

    putUserLogged(newUser)

    reset()
  }

  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Perfil / Atualização" />
      <ProjectsHeader>
        <span>
          Perfil - {userLogged.firstName} {userLogged.lastName}
        </span>
        <ProjectsHeaderButtons>
          {userLogged && (
            <>
              <ButtonBlue text="Deslogar" OnClick={logOut} />
            </>
          )}
        </ProjectsHeaderButtons>
      </ProjectsHeader>

      <UserData1>
        <UserDataContent>
          <span>Nome</span>
          <span>{userLogged.firstName}</span>
        </UserDataContent>
        <UserDataContent>
          <span>Sobrenome</span>
          <span>{userLogged.lastName}</span>
        </UserDataContent>
        <UserDataContent>
          <span>Curso</span>
          <span>{userLogged.course}</span>
        </UserDataContent>
        <UserDataContent>
          <span>Matrícula</span>
          <span>{userLogged.registration}</span>
        </UserDataContent>
        <UserDataContent>
          <span>Período</span>
          <span>{userLogged.period}º período</span>
        </UserDataContent>
        <UserDataContent>
          <span>Universidade</span>
          <span>{userLogged.institution}</span>
        </UserDataContent>
        <UserDataContent>
          <span>País</span>
          <span>{userLogged.country}</span>
        </UserDataContent>
        <UserDataContent>
          <span>Email</span>
          <span>{userLogged.email}</span>
        </UserDataContent>
      </UserData1>

      <ProjectFormContainer>
        <form onSubmit={handleSubmit(handleUpdateUserSubmit)}>
          <div>
            <FormsTitle>Dados gerais</FormsTitle>
            <Divider></Divider>

            <StudentInfo>
              <InputContainer>
                <label htmlFor="firstName">Primeiro nome do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o nome..."
                  {...register('firstName')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="lastName">Sobrenome do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o sobrenome..."
                  {...register('lastName')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="course">Curso do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o curso..."
                  {...register('course')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="registration">Matrícula do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira a matrícula do usuário..."
                  {...register('registration')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="period">Período do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o período do usuário..."
                  {...register('period')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="institution">Universidade do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira a Universidade do usuário..."
                  {...register('institution')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="country">País do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o país do usuário..."
                  {...register('country')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="email">Email do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o email do usuário..."
                  {...register('email')}
                />
              </InputContainer>
            </StudentInfo>
            <Divider2></Divider2>
          </div>
          <FormsFooter>
            <ButtonBlue text="Atualizar Usuário" type="submit" />
          </FormsFooter>
        </form>
      </ProjectFormContainer>
    </ProjectsContainer>
  )
}
