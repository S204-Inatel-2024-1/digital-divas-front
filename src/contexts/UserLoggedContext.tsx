import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'

interface UserLogged {
  id: number
  email: string
  firstName: string
  lastName: string
  password: string
  role: string
}

interface UserLoggedContextType {
  userLogged: UserLogged
  fetchUser: (email?: string, password?: string) => Promise<void>
  putUser: (password: string) => Promise<void>
}

export const UserLoggedContext = createContext({} as UserLoggedContextType)

interface UserLoggedContextProviderProps {
  children: ReactNode
}

export function UserLoggedProvider({
  children,
}: UserLoggedContextProviderProps) {
  const [userLogged, setUserLogged] = useState<UserLogged>({} as UserLogged)
  const navigate = useNavigate()

  const fetchUser = useCallback(
    async (email?: string, password?: string) => {
      const response = await api.get('users')
      const users = response.data

      const user = users.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password,
      )

      if (userLogged.password === 'default') {
        navigate('/login/firstAccess')
        setUserLogged(user)
      } else if (user) {
        setUserLogged(user)
        console.log(user)
        navigate('/app/admin/projectsList')
      } else {
        console.log('Credenciais inválidas')
      }
    },
    [navigate, userLogged],
  )

  const putUser = useCallback(
    async (password: string) => {
      const response = await api.put(`users/`, { password })
      console.log(response.data)
      navigate('/app/admin/projectsList')
    },
    [navigate],
  )

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserLoggedContext.Provider value={{ userLogged, fetchUser, putUser }}>
      {children}
    </UserLoggedContext.Provider>
  )
}
