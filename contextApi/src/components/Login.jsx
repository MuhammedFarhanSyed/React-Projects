import React ,{useContext, useState}from 'react'
import { UserContext } from '../App'


function Login() {


    const userData = useContext(UserContext)
    const handlesubmit = (e) => {
        e.preventDefault()
        if(userData.user && userData.password){
            alert(`Username: ${userData.user} Password: ${userData.password}`)
        }else{
            alert('Please fill in all fields')
        }
    }

  return (<>
    <div>Login</div>
    <input type="text" placeholder='username' value={userData.user}
    onChange={(e)=>userData.setUser(e.target.value)}/>
    <input type="password" placeholder='password' value={userData.password}
    onChange={(e)=>userData.setPassword(e.target.value)}/>
    <button onClick={handlesubmit}>Login</button>
    </>)
}

export default Login