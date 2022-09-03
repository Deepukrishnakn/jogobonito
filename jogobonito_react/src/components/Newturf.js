import React, { useState,useEffect } from 'react'
import './Newturf.css'
import { Col,Row } from 'react-bootstrap';
import axios from "../constants/constants"

function Newturf() {

    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([])
  
  useEffect(()=>{
  
      setLoading(true);
    axios.get('vendor/turfviewset').then(res=>{
      console.log('turf',res.data)
      setData(res.data)
    }).catch(e=>console.log(e))
    .finally(()=>setLoading(false))
  },[]);

  return (
    
    <div className='Newturf m-5'>

        <Row>
        {loading && <h4>loading...</h4>}
        <h1 className='title mb-5'>Find Your Turf</h1>
        {data.map((obj)=>
        <Col lg={3}>
        <div className='newturfItem'>
            <img src={obj.image} alt={obj.image}/>
            <div className='newturfTitle'>
                <h1>Name:{obj.turf_name}</h1>
                <h1>Size:{obj.size}</h1>
                <h2>Rent/h:{obj.price}</h2>
            </div>
        </div>
        </Col>
)}
        {/* <Col lg={3}>
        <div className='newturfItem'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2NTHkVQGD08--oGDDKa8mHOIkC8g_b_bJw&usqp=CAU' alt='' className='newturfImg'/>
            <div className='newturfTitle'>
                <h1>Royal Turf</h1>
                <h2>1600</h2>
            </div>
        </div>
        </Col>

        <Col lg={3}>
        <div className='newturfItem'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-7Cu9QN2zxdkpoPDMYD_K2dH5-1zR6cWxORHm6QwR2Ii3y6NOKsIao1QO8xn-ULlpd8&usqp=CAU' alt='' className='newturfImg'/>
            <div className='newturfTitle'>
                <h1>Royal Turf</h1>
                <h2>1600</h2>
            </div>
        </div>
        </Col>
        <Col lg={3}>
        <div className='newturfItem'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj-co7DJJujIlcG9ADw8piwB-sgKEZD3aqw&usqp=CAU' alt='' className='newturfImg'/>
            <div className='newturfTitle'>
                <h1>Royal Turf</h1>
                <h2>1600</h2>
            </div>
        </div>
        </Col>

        <Col lg={3}>
        <div className='newturfItem'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZj-co7DJJujIlcG9ADw8piwB-sgKEZD3aqw&usqp=CAU' alt='' className='newturfImg'/>
            <div className='newturfTitle'>
                <h1>Royal Turf</h1>
                <h2>1600</h2>
            </div>
        </div>
        </Col>


        <Col lg={3}>
        <div className='newturfItem'>
            <img src='https://www.sporteeno.com/wp-content/uploads/2021/07/mobs2.jpg' alt='' className='newturfImg'/>
            <div className='newturfTitle'>
                <h1>Royal Turf</h1>
                <h2>1600</h2>
            </div>
        </div>
        </Col>

        <Col lg={3}>
        <div className='newturfItem'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2NTHkVQGD08--oGDDKa8mHOIkC8g_b_bJw&usqp=CAU' alt='' className='newturfImg'/>
            <div className='newturfTitle'>
                <h1>Royal Turf</h1>
                <h2>1600</h2>
            </div>
        </div>
        </Col>

        <Col lg={3}>
        <div className='newturfItem'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-7Cu9QN2zxdkpoPDMYD_K2dH5-1zR6cWxORHm6QwR2Ii3y6NOKsIao1QO8xn-ULlpd8&usqp=CAU' alt='' className='newturfImg'/>
            <div className='newturfTitle'>
                <h1>Royal Turf</h1>
                <h2>1600</h2>
            </div>
        </div>
        </Col> */}
       
        </Row>
    </div>
  )
}

export default Newturf