import { useState } from "react"
import UserExplorer from './UserExplorer'

const Explorer = () => {
  const [state, setState] = useState(0)

  return <div>
    <h1>Backoffice Data Explorer</h1>
    <p>Welcome to your back-office data explorer, where you can view all of our users private information, without any security checks!</p>
    <UserExplorer />
  </div>
}

export default Explorer