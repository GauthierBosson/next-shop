import axios, { AxiosResponse } from 'axios'
import { useMutation, UseMutationResult } from 'react-query'

interface IUser {
  name: string
  email: string
  password: string
}

export const useCreateUser = (): UseMutationResult<AxiosResponse> => {
  return useMutation((newUser: IUser) => axios.post('/api/user', newUser))
}
