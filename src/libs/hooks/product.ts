import axios, { AxiosError } from 'axios'
import { useQuery, UseQueryResult } from 'react-query'
import { Product } from '@prisma/client'

export const useSearchProducts = (
  searchParam: string
): UseQueryResult<Product[], AxiosError> => {
  return useQuery(['getProducts', searchParam], () =>
    axios.get(`/api/product/search/${searchParam}`).then((res) => res.data)
  )
}

export const useGetOneProduct = (
  searchParam: string
): UseQueryResult<Product, AxiosError> => {
  return useQuery(['getOneProduct', searchParam], () =>
    axios.get(`/api/product/${searchParam}`)
  )
}
