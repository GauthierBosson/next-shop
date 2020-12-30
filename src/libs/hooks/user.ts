import axios, { AxiosError, AxiosResponse } from 'axios'
import { useMutation, UseMutationResult } from 'react-query'

interface IUser {
  name: string
  email: string
  password: string
}

export const useCreateUser = (): UseMutationResult<AxiosResponse, AxiosError> => {
  return useMutation((newUser: IUser) => axios.post('/api/user', newUser))
}
