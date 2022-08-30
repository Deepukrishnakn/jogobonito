import React from 'react'
import './Turf.css';
import Header from './Header'
import Navebar from './Navebar'
import { Row,Col } from 'react-bootstrap';

function Turf() {
  return (
    <div>
        <Navebar/>
        <Header/>
        <Row>
            <Col lg={4}>
            <div className='turfContainer m-5'>
            <div className='turfWrapper'>
                <div className='turfstSearch'>
                    <h1 className='turfTitle'>Search</h1>
                </div>
                <div className='turfResult'>

                </div>
            </div>
        </div>
            </Col>
        </Row>
        
    </div>
  )
}

export default Turf