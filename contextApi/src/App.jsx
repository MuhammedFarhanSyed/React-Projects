import { useState , createContext } from 'react'
import './App.css'
import Login from './components/Login'

const UserContext = createContext()
function App() {
  
  const [user , setUser] = useState(null)
  const [password , setPassword] = useState(null)

  return (
    <>
    <UserContext.Provider value={{user , setUser , password , setPassword}}>
      <Login/>
    </UserContext.Provider>
     
    </>
  )
}

export default App
export { UserContext }
