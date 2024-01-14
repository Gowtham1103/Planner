import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const addPlan = () =>{
     navigate("/addPlan")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Trip Planner</a>
   <button className='btn btn-outline-light' onClick={addPlan}>+ Add Plan</button>
   </div>
</nav>
  )
}

export default Navbar
