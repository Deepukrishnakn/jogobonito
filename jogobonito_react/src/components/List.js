import React, { useState ,useEffect } from 'react'
import './List.css'
import axios from "../constants/constants"

function List() {

  const [loading,setLoading] = useState(false);
  const [data,setData] = useState([])

  useEffect (()=>{
    setLoading(true);
    axios.get('vendor/turfviewset').then(res=>{
      console.log('turf',res.data.results)
      setData(res.data)
    }).catch(e=>console.log(e))
    .finally(()=>setLoading(false))
  },[]);

  return (
    <div>
       {loading && <h4>loading...</h4>}
{data.map((obj)=>
<div className='list mt-5 me-5 '>
      <img src={obj.image2} alt='' className='listImg'/>
      <div className='listDesc'>
      <h1 className='listTile'>Turf Name: {obj.turf_name}</h1>
        <span className='listSize'>Turf Size: {obj.size}</span>
        <span className='listDesc'>Turf Desc: good</span>
        <span className='listcity'>Turf City: Kochi</span>
        <span className='listPrice'>Price: {obj.price}</span>
      </div>
      <div className='BookingBtn'>
      <button className='bookbtn'>See Availability</button>
    </div>
    </div>

)}
{/* 
    <div className='list me-5'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCqQHTNlzdhpmDgCrBrUb7h8i-h7txqEasrruCtyL-mwDnQDrEuCwojKcODpyExdKE9M&usqp=CAU' alt='' className='listImg'/>
      <div className='listDesc'>
      <h1 className='listTile'>Turf Name: Royal Turf</h1>
        <span className='listSize'>Turf Size: 7 x 7</span>
        <span className='listDesc'>Turf Desc: good</span>
        <span className='listcity'>Turf City: Kochi</span>
        <span className='listPrice'>Price: 12000</span>
      </div>
      <div className='BookingBtn'>
      <button className='bookbtn'>See Availability</button>
    </div>
    </div>

    <div className='list me-5'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCqQHTNlzdhpmDgCrBrUb7h8i-h7txqEasrruCtyL-mwDnQDrEuCwojKcODpyExdKE9M&usqp=CAU' alt='' className='listImg'/>
      <div className='listDesc'>
      <h1 className='listTile'>Turf Name: Royal Turf</h1>
        <span className='listSize'>Turf Size: 7 x 7</span>
        <span className='listDesc'>Turf Desc: good</span>
        <span className='listcity'>Turf City: Kochi</span>
        <span className='listPrice'>Price: 12000</span>
      </div>
      <div className='BookingBtn'>
      <button className='bookbtn'>See Availability</button>
    </div>
    </div>
  
    <div className='list me-5'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCqQHTNlzdhpmDgCrBrUb7h8i-h7txqEasrruCtyL-mwDnQDrEuCwojKcODpyExdKE9M&usqp=CAU' alt='' className='listImg'/>
      <div className='listDesc'>
      <h1 className='listTile'>Turf Name: Royal Turf</h1>
        <span className='listSize'>Turf Size: 7 x 7</span>
        <span className='listDesc'>Turf Desc: good</span>
        <span className='listcity'>Turf City: Kochi</span>
        <span className='listPrice'>Price: 12000</span>
      </div>
      <div className='BookingBtn'>
      <button className='bookbtn'>See Availability</button>
    </div>
    </div> */}

    </div>
  )
}

export default List