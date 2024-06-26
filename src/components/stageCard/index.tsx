import {
  StageCardBody,
  StageCardContent,
  StageCardDate,
  StageCardHeader,
  StageTag,
} from './styles'

import { StageModel } from '../../models/StagesModel'

export function StageCard(props: StageModel) {
  return (
    <StageCardContent>
      <StageCardHeader>
        <StageCardDate>
          <img src="" alt="" />
          <span>{props.date}</span>
        </StageCardDate>
        <StageTag>{props.status}</StageTag>
      </StageCardHeader>
      <StageCardBody>
        <span>{props.name}</span>
        <span>{props.description}</span>
      </StageCardBody>
    </StageCardContent>
  )
}
