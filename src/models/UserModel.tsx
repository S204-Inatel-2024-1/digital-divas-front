export interface UserModel {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  course?: string
  registration?: string
  period?: string
  institution?: string
  country?: string
  role: string
}
