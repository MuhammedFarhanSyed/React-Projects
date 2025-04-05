import React ,{useContext, useState}from 'react'
import userContext from '../context/context'

function Login() {
   const [user , setUser] = useState(null)
   const [password , setPassword] = useState(null)


   
    const handlesubmit = (e) => {}

  return (<>
    <div>Login</div>
    <input type="text" placeholder='username' value={user}
    onChange={(e)=>setUser(e.target.value)}/>
    <input type="password" placeholder='password' value={password}
    onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={handlesubmit}>Login</button>
    </>)
}

export default Login