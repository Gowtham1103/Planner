import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AddPlan = () => {
    const navigate = useNavigate();
    const cancelBtn = () => {
        navigate("/home")
    }

    const [place,setPlace] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [budget,setbudget] = useState(0);

    const onSubmit = async (e) => {
            e.preventDefault();
            await axios.post("https://regal-form-production.up.railway.app/api.springboot/postplan",{
                place,
                date,
                time,
                budget
            })
            navigate("/home")

    }
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
                        <h3 className='text-center m-2'>Add Plan</h3>
                        <form onSubmit={onSubmit}>
                        <div className='mb-3'> 
                                <input type={"text"} 
                                className='form-control'
                                placeholder='Enter the place'
                                onChange={(e)=>{setPlace(e.target.value)}}
                                />
                        </div>
                        <div className='mb-3'> 
                                <input type={"date"} 
                                className='form-control'
                                onChange={(e)=>{setDate(e.target.value)}}
                                />
                        </div>
                        <div className='mb-3'> 
                                <input type={"time"} 
                                className='form-control'
                                onChange={(e)=>{setTime(e.target.value)}}
                                
                                />
                        </div>
                        <div className='mb-3'> 
                                <input type={"text"} 
                                className='form-control'
                                placeholder='Enter The Budget'
                                onChange={(e)=>{setbudget(e.target.value)}}
                                />
                                
                        </div>
                        <button type="submit" className='m-2 btn btn-outline-success ' >Add + </button>
                        <button type="submit" className='m-3 btn btn-outline-danger 'onClick={cancelBtn} >Cancel</button>
                        </form>
                </div>
                
            </div>
            
        </div>
      
    </div>
  )
}

export default AddPlan
