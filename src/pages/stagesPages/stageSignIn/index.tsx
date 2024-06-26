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
import { StageContext } from '../../../contexts/StageContext'

export function StagesSignIn() {
  const { postStage } = useContext(StageContext)

  const stageSchema = z.object({
    name: z.string(),
    description: z.string(),
    date: z.string(),
  })

  type CreateStageFormInputs = z.infer<typeof stageSchema>

  const { register, handleSubmit, reset } = useForm<CreateStageFormInputs>({
    resolver: zodResolver(stageSchema),
  })

  function handleCreateStageSubmit(data: CreateStageFormInputs) {
    postStage(data)
    reset()
  }

  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Etapas / Lista / Nova Etapa" />
      <ProjectsHeader>
        <span>Novo Etapa</span>
      </ProjectsHeader>

      <ProjectFormContainer>
        <form onSubmit={handleSubmit(handleCreateStageSubmit)}>
          <div>
            <FormsTitle>Dados da Etapa</FormsTitle>
            <Divider></Divider>
            <StudentInfo>
              <InputContainer>
                <label htmlFor="description">Nome da Etapa *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o nome da etapa..."
                  {...register('name')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Descrição da Etapa *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira a descrição da etapa..."
                  {...register('description')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Data de conclusão *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira a data de conclusão..."
                  {...register('date')}
                />
              </InputContainer>
            </StudentInfo>
            <Divider2></Divider2>
          </div>
          <FormsFooter>
            <ButtonBlue text="Criar Etapa" type="submit" />
          </FormsFooter>
        </form>
      </ProjectFormContainer>
    </ProjectsContainer>
  )
}
