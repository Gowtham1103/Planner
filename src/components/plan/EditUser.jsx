import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const EditPlan = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const cancelBtn = () => {
        navigate("/home")
    }
    
    const [place,setPlace] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [budget,setbudget] = useState("");


    const onSubmit = async (e) => {
            e.preventDefault();
            await axios.put(`https://few-parcel-production.up.railway.app/api.springboot/updateplan/${id}`,{
                place,
                date,
                time,
                budget
            })
            navigate("/home")

    }
    useEffect(()=>{
        loadPlan()
    },[])

    

    const loadPlan = async () =>{
        const dataById = await axios.get(`https://few-parcel-production.up.railway.app/api.springboot/getplan/${id}`)
        setPlace(dataById.data.place)
        setDate(dataById.data.date)
        setTime(dataById.data.time)
        setbudget(dataById.data.budget)

    }
    
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
                        <h3 className='text-center m-2'>Edit Plan</h3>
                        <form onSubmit={onSubmit}>
                        <div className='mb-3'> 
                                <input type={"text"} 
                                className='form-control'
                                placeholder='Enter the place'
                                onChange={(e)=>{setPlace(e.target.value)}}
                                value={place}
                                
                                />
                        </div>
                        <div className='mb-3'> 
                                <input type={"date"} 
                                className='form-control'
                                onChange={(e)=>{setDate(e.target.value)}}
                                value={date}
                                />
                        </div>
                        <div className='mb-3'> 
                                <input type={"time"} 
                                className='form-control'
                                onChange={(e)=>{setTime(e.target.value)}}
                                value={time}
                                />
                        </div>
                        <div className='mb-3'> 
                                <input type={"text"} 
                                className='form-control'
                                placeholder='Enter The Budget'
                                onChange={(e)=>{setbudget(e.target.value)}}
                                value={budget}
                                />
                                
                        </div>
                        <button type="submit" className='m-2 btn btn-outline-success ' >Change </button>
                        <button type="submit" className='m-3 btn btn-outline-danger 'onClick={cancelBtn} >Back</button>
                        </form>
                </div>
                
            </div>
            
        </div>
      
    </div>
  )
}

export default EditPlan
