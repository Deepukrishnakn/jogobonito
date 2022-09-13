import React,{useState,useEffect} from 'react'
import './Singleturf.css'
import Header from '../components/Header'
import Navebar from '../components/Navebar'
import axios from "../constants/constants"
import { useParams } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
import './List.css'
import { useNavigate,Link } from 'react-router-dom';

function TurfByCategory() {


    const navigate = useNavigate()
    const [turfbycategory, setturfbycategory] = useState([])

    const { slug } = useParams();
    
    const getTurfbyCategory =  async () => {
      const { data } = await axios.get(`vendor/turfs/${slug}`)
      console.log(data)
      setturfbycategory(data)
    }
    
    useEffect(() => {
      getTurfbyCategory();
    },[])
    
    

  return (
    <div>
        
 <Navebar/>
<Header/>
<Row>
<h1 className='title mt-5'>Find Your Turf</h1>
            <Col lg={4} sm={12} md={6}>
            <h1 className='title mt-5'>Filter Your Turf</h1>
            <div className='turfContainer m-5'>
            <div className='turfWrapper'>
                <div className='turfstSearch'>
                    <h1 className='turfTitle'>Filters</h1>
                
                {/* <div className=' m-5'>
                    <label>District</label>
                    <input className='' type="text"></input>
                    
                    <label>City</label>
                    <input className='' type="text"></input>
                    
                    <label>Size</label>
                    <input className='' type="text"></input>
                    </div> */}
                </div>
            </div>
        </div>
            </Col>
  <Col lg={8}>

{turfbycategory.map((obj)=>
<div className='list mt-5 me-5 '>
  <img src={'http://127.0.0.1:8000'+obj.image} alt='uyguy' className='listImg'/>
      <div className='listDesc'>
      <h1 className='listTile'>Turf Name: {obj.turf_name}</h1>
        <span className='listSize'>Turf Size: {obj.size}</span>
        <span className='listDesc'>Turf Desc: {obj.description}</span>
        <span className='listcity'>Turf City: {obj.city.city}</span>
        <span className='listcity'>Turf District: {obj.district.district}</span>
        <span className='listPrice'>Price: {obj.price}</span>
      </div>
      <div className='BookingBtn'>
      <button className='bookbtn' onClick={()=>navigate(`/singleturf/${obj.category.slug}/${obj.slug}/`)}>See Availability</button>
    </div>
    </div>
)}
    
    </Col>
</Row>
    </div>
  )
}

export default TurfByCategory