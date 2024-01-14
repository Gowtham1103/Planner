import { Route, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import Login from "./components/Login"
import AddPlan from "./components/plan/AddPlan"
import EditPlan from "./components/plan/EditUser"
import ViewUser from "./components/plan/ViewUser"

function App() {
 
  return (
    <>
   

   <Routes>
    <Route path="/Planner" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/addPlan" element={<AddPlan/>}/>
    <Route path="/edit/:id" element={<EditPlan/>}/>
    <Route path="/view/:id" element={<ViewUser/>}/>
   </Routes>
      
    </>
  )
}

export default App
