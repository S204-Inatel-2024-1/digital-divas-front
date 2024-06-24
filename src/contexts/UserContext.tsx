import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { api } from '../lib/axios'
import { User } from '../models/UserModel'

interface UserContextType {
  users: User[]
  fetchUsers: () => Promise<void>
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = useCallback(async () => {
    const response = await api.get('users')
    setUsers(response.data)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <UserContext.Provider value={{ users, fetchUsers }}>
      {children}
    </UserContext.Provider>
  )
}
