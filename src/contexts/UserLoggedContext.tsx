import { ReactNode, createContext, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'
import { UserModel } from '../models/UserModel'

interface UserLoggedContextType {
  userLogged: UserModel
  fetchUser: (email?: string, password?: string) => Promise<void>
  putUser: (password: string) => Promise<void>
  putUserLogged: (newData: UserModel) => Promise<void>
  logOut: () => void
}

export const UserLoggedContext = createContext({} as UserLoggedContextType)

interface UserLoggedContextProviderProps {
  children: ReactNode
}

export function UserLoggedProvider({
  children,
}: UserLoggedContextProviderProps) {
  const [userLogged, setUserLogged] = useState<UserModel>({} as UserModel)
  const navigate = useNavigate()

  const fetchUser = useCallback(
    async (email?: string, password?: string) => {
      const response = await api.get('users')
      const users = response.data

      const UserLogged = users.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password,
      )

      if (UserLogged.password === 'default') {
        setUserLogged(UserLogged)
        navigate('/login/firstAccess')
      } else if (UserLogged) {
        setUserLogged(UserLogged)
        navigate('/app/projectsList')
      } else {
        console.log('Credenciais inválidas')
      }
    },
    [navigate],
  )

  const putUser = useCallback(
    async (newPassword: string) => {
      const updatedLoggedUser = {
        ...userLogged,
        password: newPassword,
      }

      await api.put(`users/${userLogged.id}`, updatedLoggedUser)

      setUserLogged(updatedLoggedUser)
      console.log(updatedLoggedUser)
      navigate('/app/projectsList')
    },
    [navigate, userLogged],
  )

  const putUserLogged = useCallback(
    async (newData: UserModel) => {
      const updatedLoggedUser = {
        ...newData,
      }

      await api.put(`users/${userLogged.id}`, updatedLoggedUser)

      setUserLogged(updatedLoggedUser)
    },
    [userLogged],
  )

  function logOut() {
    setUserLogged({} as UserModel)
    navigate('/')
  }

  return (
    <UserLoggedContext.Provider
      value={{ userLogged, fetchUser, putUser, putUserLogged, logOut }}
    >
      {children}
    </UserLoggedContext.Provider>
  )
}
