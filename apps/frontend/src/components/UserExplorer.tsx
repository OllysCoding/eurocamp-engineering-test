import { useApi } from '../libs/useApi'
import type { UsersApiResponse } from '../libs/users';
import UserCreator from './UserCreator';

const UserExplorer = () => {
  const { data, error, loading } = useApi<UsersApiResponse>('/users');

  return <div>
    { error && <p>Failed to load users at this time, please refresh the page to try again</p> }
    { loading && <p>Loading users...</p> }
    { data && <><h3>View existing users:</h3>
      <ul>
        {data.data.map(user => {
          return (
            <li key={user.id}>
              {user.id} - {user.name} - {user.email}
            </li>
          )
        })}
      </ul>
    </>}
    <UserCreator />
  </div>
}

export default UserExplorer