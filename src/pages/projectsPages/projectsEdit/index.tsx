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
} from './styles'

import { ButtonWhite } from '../../../components/buttonWhite'
import { ButtonBlue } from '../../../components/buttonBlue'
import { Breadcrumbs } from '../../../components/breadCrumbs'

export function AdminProjectsEdit() {
  return (
    <ProjectsContainer>
      <Breadcrumbs text="Fetin 2024 / Projetos / #0001 / Editar Projeto" />
      <ProjectsHeader>
        <span>Editar Projeto</span>
      </ProjectsHeader>

      <ProjectFormContainer>
        <form>
          <div>
            <FormsTitle>Informações Gerais</FormsTitle>
            <Divider></Divider>
            <GeneralInfo>
              <InputContainer>
                <label htmlFor="title">Id</label>
                <StyledInput
                  width="84px"
                  type="number"
                  id="id"
                  placeholder="#001"
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Nome do Projeto *</label>
                <StyledInput
                  width="880px"
                  type="text"
                  id="name"
                  placeholder="Insira o nome do projeto..."
                />
                <span>Até 200 caracteres.</span>
              </InputContainer>
            </GeneralInfo>
          </div>
          <div>
            <FormsTitle>Equipe</FormsTitle>
            <Divider></Divider>
            <InputContainer>
              <label htmlFor="description">Nome do Orientador *</label>
              <StyledInput
                type="text"
                id="nameAdvisor"
                placeholder="Insira o nome do orientador do projeto..."
              />
            </InputContainer>
            <StudentInfo>
              <InputContainer>
                <label htmlFor="description">Nome do Aluno 1 *</label>
                <StyledInput
                  width="235px"
                  type="text"
                  id="nameAdvisor"
                  placeholder="Insira o nome..."
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Matrícula do Aluno 1 *</label>
                <StyledInput
                  width="235px"
                  type="text"
                  id="nameAdvisor"
                  placeholder="Insira a matrícula..."
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Curso do Aluno 1 *</label>
                <StyledInput
                  width="235px"
                  type="text"
                  id="nameAdvisor"
                  placeholder="Insira o curso..."
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="description">Período do Aluno 1 *</label>
                <StyledInput
                  width="235px"
                  type="text"
                  id="nameAdvisor"
                  placeholder="Insira o período..."
                />
              </InputContainer>
            </StudentInfo>
          </div>
          <ButtonDiv>
            <Divider2></Divider2>
            <ButtonWhite text="Adicionar integrante" to="" />
            <Divider2></Divider2>
          </ButtonDiv>
          <FormsFooter>
            <ButtonWhite text="Adicionar integrante" to="" />
            <ButtonBlue text="Criar Projeto" to="" />
          </FormsFooter>
        </form>
      </ProjectFormContainer>
    </ProjectsContainer>
  )
}
