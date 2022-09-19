import React from 'react'
import Vnavebar from '../components/Vendor/Vnavebar'
import { Col, Row } from 'react-bootstrap'
import Vhome from '../components/Vendor/Vhome'

function VhomePage() {
  return (
    <div>
        
        <Vnavebar/>
        <Row>
            <Col lg={12}>
                <Vhome/>
            </Col>
        </Row>
    </div>
  )
}

export default VhomePage