import { UserModel } from './UserModel'

export interface ProjectModel {
  id: string | undefined
  name: string
  description: string
  team: UserModel[]
  stage: string
  status: string
  level: string
  advisor: UserModel
  startDate: Date
  endDate?: Date
}
