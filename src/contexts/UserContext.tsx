import { ReactNode, createContext, useState, useCallback } from 'react'
import { api } from '../lib/axios'
import { UserModel } from '../models/UserModel'

interface AddUserParams {
  firstName: string
  lastName: string
  email: string
  role: string
}

interface UserContextType {
  users: UserModel[]
  fetchUsers: () => Promise<void>
  addUser: (user: AddUserParams) => Promise<void>
  fetchUserWithId: (userId: string) => Promise<UserModel>
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<UserModel[]>([])

  const fetchUsers = useCallback(async () => {
    const response = await api.get('users')
    setUsers(response.data)
  }, [])

  const fetchUserWithId = useCallback(
    async (userId: string): Promise<UserModel> => {
      const response = await api.get(`users?id=${userId}`)

      // Verifica se response.data é um array e pega o primeiro elemento
      const newUser: UserModel = Array.isArray(response.data)
        ? response.data[0]
        : response.data
      console.log(newUser)
      return newUser
    },
    [],
  )

  const addUser = useCallback(
    async ({ firstName, lastName, email, role }: AddUserParams) => {
      const fetch = await api.get('users')

      const newUser: UserModel = {
        id: String(fetch.data.length + 1),
        firstName,
        lastName,
        email,
        role,
        password: 'default',
      }

      const response = await api.post('users', newUser)
      if (response.status === 201) {
        setUsers((prevUsers) => [...prevUsers, response.data])
      }
    },
    [],
  )

  return (
    <UserContext.Provider
      value={{ users, fetchUsers, addUser, fetchUserWithId }}
    >
      {children}
    </UserContext.Provider>
  )
}
