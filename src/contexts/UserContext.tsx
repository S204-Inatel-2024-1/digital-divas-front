import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'

interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  password: string
  role: string
}

interface UserContextType {
  user: User
  fetchUser: (email?: string, password?: string) => Promise<void>
  putUser: (password: string) => Promise<void>
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const navigate = useNavigate()

  const fetchUser = useCallback(
    async (email?: string, password?: string) => {
      const response = await api.get('users')
      const users = response.data

      const userLogged = users.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password,
      )

      if (userLogged.password === 'default') {
        navigate('/login/firstAccess')
        setUser(userLogged)
      } else if (userLogged) {
        setUser(userLogged)
        console.log(userLogged)
        navigate('/app/admin/projectsList')
      } else {
        console.log('Credenciais inválidas')
      }
    },
    [navigate],
  )

  const putUser = useCallback(
    async (password: string) => {
      const response = await api.put(`users/${user.id}`, { password })
      console.log(response.data)
      navigate('/app/admin/projectsList')
    },
    [navigate],
  )

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider value={{ user, fetchUser, putUser }}>
      {children}
    </UserContext.Provider>
  )
}
