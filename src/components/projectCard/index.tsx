import {
  ProjectCardBody,
  ProjectCardContent,
  ProjectCardHeader,
  ProjectTag,
} from './styles'

interface ProjectCardProps {
  name: string
  description: string
  level: string
  status: string
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <ProjectCardContent>
      <ProjectCardHeader>
        <ProjectTag>Nível {props.level}</ProjectTag>
        <ProjectTag>{props.status}</ProjectTag>
      </ProjectCardHeader>
      <ProjectCardBody>
        <span>{props.name}</span>
        <span>{props.description}</span>
      </ProjectCardBody>
    </ProjectCardContent>
  )
}
