import {
  AdvisorCardBody,
  AdvisorCardContent,
  AdvisorCardHeader,
  Role,
} from './styles'

interface AdvisorCardProps {
  firstName: string
  lastName: string
  email: string
  country?: string | undefined
  instituition?: string | undefined
}

export function AdvisorCard(props: AdvisorCardProps) {
  return (
    <AdvisorCardContent>
      <AdvisorCardHeader>
        <Role>Orientador</Role>
        <span>
          {props.firstName} {props.lastName}
        </span>
      </AdvisorCardHeader>
      <AdvisorCardBody>
        <span>{props.email}</span>
        <span>{props.instituition}</span>
        <span>{props.country}</span>
      </AdvisorCardBody>
    </AdvisorCardContent>
  )
}
