
import Vnavebar from './Vnavebar'
import '../../components/Vendor/Vhome.css'
import Nav from 'react-bootstrap/Nav';
import React, { useState,useEffect,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import authContext from '../../context/authContext'
import axios from "../../constants/constants"

function VendorProfile() {

  const {VendorAuthTokens} =useContext(authContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [vendor,setVendor] = useState('')

    const Getvendor=()=>{
      axios.get('vendor/vendor',{headers:{Authorization:`Bearer ${VendorAuthTokens}`} }).then(res=>{
        console.log(res.data)
        setVendor(res.data)
        
       }).catch(e=>console.log(e))
    }

useEffect(() => {
  Getvendor()
}, [])


  return (
    <>

<Vnavebar/>

          
<div className='container vendor-profile'>
        <div className='row'>
            <div className='col-md-4'>
                <img className='proimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAOFKU7ypGZZY3_HADJafnSctPMFkCizHPw&usqp=CAU' alt='' srcSet=''/>
                <h2>{vendor.first_name +'  '+ vendor.last_name}</h2>
            </div>

            <div className='col-md-6'>
            <Nav className="justify-content-center mt-5" activeKey="/home">
        <Nav.Item>
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{vendor.first_name}</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">Or right-aligned</p>

            </div>

        </div>
</div>

    </>
  )
}

export default VendorProfile