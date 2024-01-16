import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import axios from 'axios'

const ViewUser = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const backHome = () =>{
        navigate("/home")
    }
    const [place,setPlace] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [budget,setbudget] = useState("");

    useEffect(()=>{
        loadUser()
    },[])

    const loadUser = async () =>{
        const result = axios.get(`https://few-parcel-production.up.railway.app/api.springboot/getplan/${id}`)
        setPlace((await result).data.place)
        setDate((await result).data.date)
        setTime((await result).data.time)
        setbudget((await result).data.budget)
        
    }
  

  


  return (
   <div>
    <Navbar/>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 boredr rounded p-4 mt-2 shadow'>
            <h3>Plan Overview</h3>
            <div className='card'>
                <div className='card-header'>
                    Details of plan id : 
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>Place:</b>
                            <span className='m m-4'>{place}</span>
                        </li>
                        <li className='list-group-item'>
                            <b>Date:</b>
                            <span className='m m-4'>{date}</span>
                        </li>
                        <li className='list-group-item'>
                            <b>Time:</b>
                            <span className='m m-4'>{time}</span>
                        </li>
                        <li className='list-group-item'>
                            <b>Budget:</b>
                            <span className='m m-4'>₹{budget}</span>
                        </li>
                    </ul>
                </div>
                <button className='btn btn-primary my-2 ' onClick={backHome}>back to Home</button>
            </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default ViewUser
