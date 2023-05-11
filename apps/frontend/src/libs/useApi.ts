import useSWR, { useSWRConfig } from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

interface ApiResponse<T> {
  loading: boolean,
  data?: T
  error?: Error
}

const baseUrl = 'http://localhost:3001/api/1'

export const useInvalidate = () => {
  const { mutate } = useSWRConfig()

  return (path: string) => {
    mutate(baseUrl + path)
  }
}

export const useApi = <T>(
  path: string
): ApiResponse<T> => {
  const { data, error } = useSWR(baseUrl + path, fetcher)

  return {
    data,
    error,
    loading: !data && !error
  }
}