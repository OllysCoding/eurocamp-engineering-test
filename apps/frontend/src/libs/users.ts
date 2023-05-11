
export type UsersApiResponse = {
  data: User[]
}

export type User = {
  id: string,
  name: string,
  email: string
}