import {
  Breadcrumbs,
  Divider,
  ListContainer,
  ListContent,
  ListHead,
  Pagination,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsHeaderButtons,
} from './styles'

import projectsData from './teste.json' // Importando os dados do JSON
import { FilterBarAndButton } from '../../../components/filter'
import { ButtonWhite } from '../../../components/buttonWhite'
import { ButtonBlue } from '../../../components/buttonBlue'

export function AdminProjectsList() {
  return (
    <ProjectsContainer>
      <Breadcrumbs>Fetin 2024 / Projetos / Lista</Breadcrumbs>
      <ProjectsHeader>
        <span>Todos os Projetos</span>
        <ProjectsHeaderButtons>
          <ButtonWhite text="Importar projeto" to="projectEdit" />
          <ButtonBlue text="Novo projeto" to="projectsSignIn" />
        </ProjectsHeaderButtons>
      </ProjectsHeader>

      <ListContainer>
        <ListHead>
          <button>Todos os níveis</button>
          <button>Nível 1</button>
          <button>Nível 2</button>
          <button>Nível 3</button>
          <button>Nível 4</button>
        </ListHead>
        <Divider></Divider>
        <FilterBarAndButton />
        <ListContent>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Nível</th>
                <th>Equipe</th>
                <th>Orientador</th>
                <th>Etapa</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project) => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.nome}</td>
                  <td>{project.nivel}</td>
                  <td>{project.equipe}</td>
                  <td>{project.orientador}</td>
                  <td>{project.etapa}</td>
                  <td>{project.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ListContent>
        <Pagination>
          <span>Linhas por página: 10</span>
          <span>280 projetos</span>
          <span>1 2 3 ... 123 124</span>
        </Pagination>
      </ListContainer>
    </ProjectsContainer>
  )
}
