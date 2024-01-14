import React, { useState } from 'react'
import "./login.css"
import Home from './pages/Home';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [key,setkey] = useState("");
    const [errorMessage,setErrorMessage] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if(key==="Gp2017#"){
            navigate("/home")
        }
        else{
            setErrorMessage("incorrect key !")
        }
    }
  return (
<form onSubmit={handleSubmit}>
<div className="container-l">
    <div className="loginBox">
      <p className='heading'>Enter the key to access</p>
      <input type="text" placeholder="Enter the key" className="inputField" 
        onChange={(e)=>setkey(e.target.value)}
      />
      <button className="fancyButton">Submit</button>
      <p className='error'>{errorMessage}</p>
    </div>
  </div>
</form>
  )
}

export default Login
