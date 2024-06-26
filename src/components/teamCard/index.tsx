import {
  AdvisorCardBody,
  AdvisorCardContent,
  AdvisorCardHeader,
  Role,
} from './styles'

interface TeamCardProps {
  id: number
  firstName: string
  lastName: string
  course?: string
  registration: string
  period?: string
  email: string
  country?: string
  institution?: string
}

export function TeamCard(props: TeamCardProps) {
  return (
    <AdvisorCardContent>
      <AdvisorCardHeader>
        <Role>Aluno {props.id}</Role>
        <span>
          {props.firstName} {props.lastName}
        </span>
      </AdvisorCardHeader>
      <AdvisorCardBody>
        <span>{props.email}</span>
        <span>{props.course}</span>
        <span>{props.registration}</span>
        <span>{props.period}º período</span>
        <span>{props.institution}</span>
        <span>{props.country}</span>
      </AdvisorCardBody>
    </AdvisorCardContent>
  )
}
