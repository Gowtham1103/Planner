import React, { useEffect, useState } from 'react'
import axios from "axios";
import Navbar from '../layout/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
 

const Home = () => {
    const navigate = useNavigate();
    const [plans,setPlans]=useState([])
    const {id} = useParams();



    const loadPlans = async () =>{
        const result = await axios.get("https://few-parcel-production.up.railway.app/api.springboot/getplans")
        setPlans(result.data)
    }
    useEffect(()=>{
      loadPlans()
  },[])

    const editBtn = (id) =>{
        navigate(`/edit/${id}`)
    }
    const deleteBtn = async (id) =>{
      await axios.delete(`https://few-parcel-production.up.railway.app/api.springboot/deleteplan/${id}`)
      loadPlans()
    }
    const viewBtn = (id) =>{
      navigate(`/view/${id}`)
    }
  return (
    <div>
        <Navbar/>
        <div className='container'>
        
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Place</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">budget</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {plans.map((item,index)=>(
     <tr key={index}>
        <td>{index+1}.</td>
        <td>{item.place}</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
        <td>₹{item.budget} </td>
        <td>
            <button className='btn btn-primary mx-1' onClick={()=>viewBtn(item.id)}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg></button>
            <button className='btn btn-outline-primary mx-1' onClick={()=>editBtn(item.id)}> <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg></button>
            <button className='btn btn-danger mx-1' onClick={()=>deleteBtn(item.id)}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg></button>
        </td>
     </tr>
    ))}
  </tbody>
</table>

        </div>
      
    </div>
    </div>
  )
}

export default Home
