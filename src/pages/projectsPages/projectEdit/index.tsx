import { Breadcrumbs } from '../../../components/breadCrumbs'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonBlue } from '../../../components/buttonBlue'
import { useContext, useEffect } from 'react'
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
import { ProjectContext } from '../../../contexts/ProjectContext'
import { useParams } from 'react-router-dom'
import { ProjectModel } from '../../../models/ProjectModel'

export function ProjectUpdate() {
  const { projectPage, fetchProjectById, putProject } =
    useContext(ProjectContext)

  const { id } = useParams()

  useEffect(() => {
    fetchProjectById(id as string)
  }, [fetchProjectById, id])

  const projectUpdateSchema = z.object({
    name: z.string(),
    description: z.string(),
    stage: z.string(),
    level: z.string(),
    status: z.string(),
  })

  type projectUserFormInputs = z.infer<typeof projectUpdateSchema>

  const { register, handleSubmit, reset } = useForm<projectUserFormInputs>({
    resolver: zodResolver(projectUpdateSchema),
  })

  function handleUpdateProjectSubmit(data: projectUserFormInputs) {
    console.log(data)

    const newProject: ProjectModel = {
      id,
      name: data.name,
      description: data.description,
      team: projectPage.team,
      stage: data.stage,
      status: data.status,
      level: data.level,
      advisor: projectPage.advisor,
      startDate: projectPage.startDate,
    }

    putProject(newProject)

    reset()
  }

  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Projeto / Atualização" />
      <ProjectsHeader>
        <span>{projectPage.name}</span>
        <span>{projectPage.description}</span>
      </ProjectsHeader>

      <UserData1>
        <UserDataContent>
          <span>Etapa</span>
          <span>{projectPage.stage}</span>
        </UserDataContent>
        <UserDataContent>
          <span>Nível</span>
          <span>{projectPage.level}</span>
        </UserDataContent>
        <UserDataContent>
          <span>Status</span>
          <span>{projectPage.status}</span>
        </UserDataContent>
      </UserData1>

      <ProjectFormContainer>
        <form onSubmit={handleSubmit(handleUpdateProjectSubmit)}>
          <div>
            <FormsTitle>Dados gerais</FormsTitle>
            <Divider></Divider>

            <StudentInfo>
              <InputContainer>
                <label htmlFor="name">Nome do projeto *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o nome..."
                  {...register('name')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Descrição do Projeto *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o sobrenome..."
                  {...register('description')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="stage">Etapa do projeto *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o curso..."
                  {...register('stage')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="level">Nível do projeto *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira a matrícula do usuário..."
                  {...register('level')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="status">Status do Usuário *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o período do usuário..."
                  {...register('status')}
                />
              </InputContainer>
            </StudentInfo>
            <Divider2></Divider2>
          </div>
          <FormsFooter>
            <ButtonBlue text="Atualizar Projeto" type="submit" />
          </FormsFooter>
        </form>
      </ProjectFormContainer>
    </ProjectsContainer>
  )
}
