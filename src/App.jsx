import { useState } from 'react'
import Login from './pages/Login'
import SpaceOps from './pages/SpaceOps'
import './App.css'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // If isLoggedIn is True, show <SpaceOps />. Else, show <Login />
  return isLoggedIn ? (
    <SpaceOps/>
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  )
}
