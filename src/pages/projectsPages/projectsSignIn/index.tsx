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
import { useContext, useState } from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProjectContext } from '../../../contexts/ProjectContext'
import { UserContext } from '../../../contexts/UserContext'

export function AdminProjectsSignIn() {
  const [students, setStudents] = useState([{ id: 1 }])

  const { addProject } = useContext(ProjectContext)
  const { users, fetchUsers } = useContext(UserContext)

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
  })

  const advisorSchema = z.object({
    advisorName: z.string(),
    advisorEmail: z.string(),
  })

  const createProjectSchema = z.object({
    projectName: z.string(),
    projectLevel: z.string(),
    advisor: advisorSchema,
    students: z.array(studentSchema).min(1).max(4),
  })

  type CreateProjectFormInputs = z.infer<typeof createProjectSchema>

  const { register, handleSubmit, reset } = useForm<CreateProjectFormInputs>({
    resolver: zodResolver(createProjectSchema),
  })

  const findUserByEmail = (email: string) => {
    console.log(email)
    console.log('Teste users', users)
    fetchUsers()
    return users.find((user) => user.email === email)
  }

  const handleCreateProjectSubmit = (data: CreateProjectFormInputs) => {
    const advisor = findUserByEmail(data.advisor.advisorEmail)
    const team = []

    for (let i = 0; i < data.students.length; i++) {
      const student = findUserByEmail(data.students[i].email)
      console.log(student)
      if (student) {
        team.push(student.id)
      } else {
        alert(`Aluno com email ${data.students[i].email} não encontrado!`)
        return
      }
    }

    console.log(team)

    if (!advisor) {
      alert(`Orientador com email ${data.advisor.advisorEmail} não encontrado!`)
      return
    }

    const projectData = {
      name: data.projectName,
      level: data.projectLevel,
      advisorId: advisor.id,
      team,
    }

    console.log(projectData)

    addProject(projectData)
    reset()
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
                <label htmlFor="title">Nível</label>
                <StyledInput
                  width="84px"
                  type="text"
                  placeholder="#001"
                  {...register('projectLevel')}
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
                </StudentInfo>
                <Divider2></Divider2>
              </>
            ))}
          </div>
          <ButtonDiv>
            <Divider2></Divider2>
            <ButtonWhite
              text="Adicionar integrante"
              OnClick={addStudent}
              type="button"
            />
            <ButtonWhite
              text="Remover integrante"
              OnClick={removeStudent}
              type="button"
            />
            <Divider2></Divider2>
          </ButtonDiv>
          <FormsFooter>
            <ButtonBlue text="Criar Projeto" type="submit" />
          </FormsFooter>
        </form>
      </ProjectFormContainer>
    </ProjectsContainer>
  )
}
