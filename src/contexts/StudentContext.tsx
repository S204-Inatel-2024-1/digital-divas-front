import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { api } from '../lib/axios'
import { Student } from '../models/StudentModel'

interface StudentContextType {
  students: Student[]
  fetchStudents: () => Promise<void>
}

export const StudentContext = createContext({} as StudentContextType)

interface StudentContextProviderProps {
  children: ReactNode
}

export function StudentProvider({ children }: StudentContextProviderProps) {
  const [students, setStudents] = useState<Student[]>([])

  const fetchStudents = useCallback(async () => {
    const response = await api.get('students')
    setStudents(response.data)
  }, [])

  useEffect(() => {
    fetchStudents()
  }, [fetchStudents])

  return (
    <StudentContext.Provider value={{ students, fetchStudents }}>
      {children}
    </StudentContext.Provider>
  )
}
