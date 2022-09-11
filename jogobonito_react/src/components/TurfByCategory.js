import React,{useState,useEffect} from 'react'
import './Singleturf.css'
import Header from '../components/Header'
import Navebar from '../components/Navebar'
import axios from "../constants/constants"
import { useParams } from 'react-router-dom';


function TurfByCategory() {


    const [turfdetails, setTurfDetails] = useState([])

    const { slug } = useParams();
    
    const getSingleTurf =  async () => {
      const { data } = await axios.get(`vendor/turfs/${slug}`)
      console.log(data)
      setTurfDetails(data)
    }
    
    useEffect(() => {
      getSingleTurf();
    },[])
    
    

  return (
    <div>
        
 <Navebar/>
<Header/>

{turfdetails.map((obj)=>
<div className='list mt-5 me-5 '>
<img src={obj.image} alt='' className='listImg'/>
      <div className='listDesc'>
      <h1 className='listTile'>Turf Name: {obj.turf_name}</h1>
        <span className='listSize'>Turf Size: {obj.size}</span>
        <span className='listDesc'>Turf Desc: {obj.description}</span>
        <span className='listcity'>Turf City: {obj.city}</span>
        <span className='listPrice'>Price: {obj.price}</span>
      </div>
      <div className='BookingBtn'>
      <button className='bookbtn'>See Availability</button>
    </div>
    </div>
)}
    </div>
  )
}

export default TurfByCategory