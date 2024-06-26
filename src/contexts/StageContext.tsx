import { ReactNode, createContext, useCallback, useState } from 'react'
import { StageModel } from '../models/StagesModel'
import { api } from '../lib/axios'

interface AddStageParams {
  name: string
  description: string
  date: string
}

interface StageContextType {
  stages: StageModel[]
  fetchStages: () => Promise<void>
  postStage: (stage: AddStageParams) => Promise<void>
}

export const StageContext = createContext({} as StageContextType)

interface StageContextProviderProps {
  children: ReactNode
}

export function StageContextProvider({ children }: StageContextProviderProps) {
  const [stages, setStages] = useState<StageModel[]>([])

  const fetchStages = useCallback(async () => {
    const response = await api.get('stages')
    const stages = response.data

    setStages(stages)
  }, [])

  const postStage = useCallback(
    async ({ name, description, date }: AddStageParams) => {
      const fetch = await api.get('stages')

      const newStage: StageModel = {
        id: String(fetch.data.length + 1),
        name,
        description,
        date,
        status: 'Em andamento',
      }

      const response = await api.post('stages', newStage)
      if (response.status === 200) {
        setStages((prevStages) => [...prevStages, response.data])
      }
    },
    [],
  )

  return (
    <StageContext.Provider value={{ stages, fetchStages, postStage }}>
      {children}
    </StageContext.Provider>
  )
}
