import { SetStateAction, useState } from "react"
import { useInvalidate } from "../libs/useApi";

const UserCreator = () => {
  const invalidate = useInvalidate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const [result, setResult] = useState('');

  const updateField = (type: 'name' | 'email') => (e: { target: { value: string; }; }) => {
    if (type === 'name') {
      setName(e.target.value)
    } else {
      setEmail(e.target.value)
    }
  }

  const submit = () => {
    // We shouldn't trust that the 'disabled' state on the button will be respected
    // However this does mean duplicating our validation logic
    if (!name || !email) return setResultText('Please enter both a name & email')

    fetch('http://localhost:3001/api/1/users', {
      method: 'POST',
      body: JSON.stringify({
        name, email
      })
    }).then(response => {
      if (response.ok) {
        setEmail('')
        setName('')
        setResultText('Success!')
        // This is the key to SWR, our 'invalidate' wrapper
        // tells SWR that the data within our /users key is no longer
        // up-to-date, so it will re-fetch for us, automatically
        // refreshing the user data with our newly added user!
        invalidate('/users')

      } else {
        setResultText('Something went wrong, please try again')
      }
    })
  }

  const setResultText = (text: string) => {
    setResult(text)
    // TODO: These can overlap if the button is pressed quickly in quick succession
    // We should store the result of setTimeout in state which would allow us to cancel the
    // existing one
    setTimeout(() => setResult(''), 3000)
  }

  return (
    <div>
      <h3>Create user:</h3>
      <input placeholder="Enter name..." onChange={updateField('name')}></input>
      <input placeholder="Enter email..." onChange={updateField('email')}></input>
      <button type="button" disabled={ !name || !email } onClick={submit}>Create now!</button>
      { !!result && <p>{result}</p> }
    </div>
  )
}

export default UserCreator