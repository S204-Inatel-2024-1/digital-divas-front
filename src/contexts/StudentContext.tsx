// import {
//   ReactNode,
//   createContext,
//   useState,
//   useCallback,
//   useEffect,
// } from 'react'
// import { api } from '../lib/axios'
// import { UserModel } from '../models/UserModel'

// interface StudentContextType {
//   students: UserModel[]
//   fetchStudents: () => Promise<void>
//   postStudent: (student: UserModel) => Promise<void>
// }

// export const StudentContext = createContext({} as StudentContextType)

// interface StudentContextProviderProps {
//   children: ReactNode
// }

// export function StudentProvider({ children }: StudentContextProviderProps) {
//   const [students, setStudents] = useState<UserModel[]>([])

//   const fetchStudents = useCallback(async () => {
//     const response = await api.get('students')
//     setStudents(response.data)
//   }, [])

//   const postStudent = useCallback(async (student: UserModel) => {
//     const response = await api.post('students', student)
//     setStudents((prevStudents) => [...prevStudents, response.data])
//   }, [])

//   useEffect(() => {
//     fetchStudents()
//   }, [fetchStudents])

//   return (
//     <StudentContext.Provider value={{ students, fetchStudents, postStudent }}>
//       {children}
//     </StudentContext.Provider>
//   )
// }
