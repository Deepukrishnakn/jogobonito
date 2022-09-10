import React from 'react'
import './Turf.css';
import './Category.css';
import Header from './Header'
import Navebar from './Navebar'
import { Row,Col } from 'react-bootstrap';
import List from './List';

function Turf() {
  return (
    <div>
        <Navebar/>
        <Header/>
        <Row>
        <h1 className='title mt-5'>Find Your Turf</h1>
            <Col lg={4} sm={12} md={6}>
            <h1 className='title mt-5'>Filters Your Turf</h1>
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
                <List/>
            </Col>
        </Row>
        
    </div>
  )
}

export default Turf