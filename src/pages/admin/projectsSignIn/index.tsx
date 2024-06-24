import {
  FormsTitle,
  ProjectFormContainer,
  ProjectsContainer,
  ProjectsHeader,
  Divider,
  StyledInput,
  GeneralInfo,
  InputContainer,
  StudentInfo,
  Divider2,
  ButtonDiv,
  FormsFooter,
  Advisorinfo,
} from './styles'

import { ButtonWhite } from '../../../components/buttonWhite'
import { ButtonBlue } from '../../../components/buttonBlue'
import { Breadcrumbs } from '../../../components/breadCrumbs'
import { useState } from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function AdminProjectsSignIn() {
  const [students, setStudents] = useState([{ id: 1 }])

  const addStudent = () => {
    if (students.length < 4)
      setStudents([...students, { id: students.length + 1 }])
    else alert('Número máximo de alunos atingido!')
  }

  const removeStudent = () => {
    if (students.length > 1) {
      setStudents(students.slice(0, students.length - 1))
    } else alert('Número mínimo de alunos atingido!')
  }

  const studentSchema = z.object({
    name: z.string(),
    email: z.string(),
    registration: z.string(),
    course: z.string(),
    period: z.string(),
  })

  const advisorSchema = z.object({
    advisorName: z.string(),
    advisorEmail: z.string(),
  })

  const createProjectSchema = z.object({
    id: z.string(),
    projectName: z.string(),
    advisor: advisorSchema,
    students: z.array(studentSchema).min(1).max(4),
  })

  type CreateProjectFormInputs = z.infer<typeof createProjectSchema>

  const { register, handleSubmit } = useForm<CreateProjectFormInputs>({
    resolver: zodResolver(createProjectSchema),
  })

  function handleCreateProjectSubmit(data: CreateProjectFormInputs) {
    console.log('teste teste teste')
    console.log(data)
  }

  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Projetos / Lista / Novo Projeto" />
      <ProjectsHeader>
        <span>Novo Projeto</span>
      </ProjectsHeader>

      <ProjectFormContainer>
        <form onSubmit={handleSubmit(handleCreateProjectSubmit)}>
          <div>
            <FormsTitle>Informações Gerais</FormsTitle>
            <Divider></Divider>
            <GeneralInfo>
              <InputContainer>
                <label htmlFor="title">Id</label>
                <StyledInput
                  width="84px"
                  type="text"
                  placeholder="#001"
                  {...register('id')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Nome do Projeto *</label>
                <StyledInput
                  width="880px"
                  type="text"
                  placeholder="Insira o nome do projeto..."
                  {...register('projectName')}
                />
                <span>Até 200 caracteres.</span>
              </InputContainer>
            </GeneralInfo>
          </div>
          <div>
            <FormsTitle>Equipe</FormsTitle>
            <Divider></Divider>
            <Advisorinfo>
              <InputContainer>
                <label htmlFor="description">Nome do Orientador *</label>
                <StyledInput
                  type="text"
                  placeholder="Insira o nome do orientador do projeto..."
                  {...register('advisor.advisorName')}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Email do Orientador *</label>
                <StyledInput
                  type="email"
                  placeholder="Insira o email do orientador do projeto..."
                  {...register('advisor.advisorEmail')}
                />
              </InputContainer>
            </Advisorinfo>
            {students.map((student, index) => (
              <>
                <StudentInfo key={student.id}>
                  <InputContainer>
                    <label htmlFor="description">
                      Nome do Aluno {student.id} *
                    </label>
                    <StyledInput
                      type="text"
                      id="nameAdvisor"
                      placeholder="Insira o nome..."
                      {...register(`students.${index}.name`)}
                    />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="description">
                      Email do Aluno {student.id} *
                    </label>
                    <StyledInput
                      type="text"
                      id="nameAdvisor"
                      placeholder="Insira o email..."
                      {...register(`students.${index}.email`)}
                    />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="description">
                      Matrícula do Aluno {student.id} *
                    </label>
                    <StyledInput
                      type="text"
                      id="nameAdvisor"
                      placeholder="Insira a matrícula..."
                      {...register(`students.${index}.registration`)}
                    />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="description">
                      Curso do Aluno {student.id} *
                    </label>
                    <StyledInput
                      type="text"
                      id="nameAdvisor"
                      placeholder="Insira o curso..."
                      {...register(`students.${index}.course`)}
                    />
                  </InputContainer>
                  <InputContainer>
                    <label htmlFor="description">
                      Período do Aluno {student.id} *
                    </label>
                    <StyledInput
                      type="text"
                      id="nameAdvisor"
                      placeholder="Insira o período..."
                      {...register(`students.${index}.period`)}
                    />
                  </InputContainer>
                </StudentInfo>
                <Divider2></Divider2>
              </>
            ))}
          </div>
          <ButtonDiv>
            <Divider2></Divider2>
            <ButtonWhite text="Adicionar integrante" OnClick={addStudent} />
            <ButtonWhite text="Remover integrante" OnClick={removeStudent} />
            <Divider2></Divider2>
          </ButtonDiv>
          <FormsFooter>
            <button type="submit">Criar projeto</button>
            <ButtonBlue text="Criar Projeto" type="submit" />
          </FormsFooter>
        </form>
      </ProjectFormContainer>
    </ProjectsContainer>
  )
}
