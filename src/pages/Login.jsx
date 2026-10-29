import { useState } from 'react'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // stops the form from reloading the page

    if (username === 'det560' && password === 'airpower') {
      setError('')
      onLogin()
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <main>
      <h1>Operation Falcon Summit: USSF Control Panel</h1>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">Sign In</button>
        {error && <p role="alert">{error}</p>}
      </form>
    </main>
  )
}