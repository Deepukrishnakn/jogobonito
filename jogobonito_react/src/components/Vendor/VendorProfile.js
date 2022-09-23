
import Vnavebar from './Vnavebar'
import '../../components/Vendor/Vhome.css'
import Nav from 'react-bootstrap/Nav';
import React, { useState,useEffect,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import authContext from '../../context/authContext'
import axios from "../../constants/constants"
import {Navigate, useNavigate} from 'react-router-dom'

function VendorProfile() {
  
  const {VendorAuthTokens} =useContext(authContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [vendor,setVendor] = useState('')

  
    const Navigate = useNavigate()
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [phone_number, setPhone_number] = useState("");

    const Getvendor=()=>{
      axios.get('vendor/vendor',{headers:{Authorization:`Bearer ${VendorAuthTokens}`} }).then(res=>{
        console.log(res.data)
        setFirst_name(res.data.first_name)
        setLast_name(res.data.last_name)
        setPhone_number(res.data.phone_number)
        setVendor(res.data)
        
       }).catch(e=>console.log(e))
    }


    const HandleSubmit = async(e) => {
      e.preventDefault()
        const VendorData = new FormData();
        VendorData.append('first_name',first_name)
        VendorData.append('last_name',last_name)
        VendorData.append('phone_number',phone_number)
     
    await axios.patch(`vendor/Allvendor/${vendor.id}/`,VendorData,    
    {headers:{Authorization:`Bearer ${VendorAuthTokens}`,  'content-type': 'multipart/form-data'} } ).then((response)=>{
      console.log(response.data)
      if (response.status===200){
        handleClose()
        Getvendor()
        console.log("success")
      }
    })  
    .catch((err)=>{
      console.log(err.response.data.detail,"erorr")
     console.log(VendorData)
    }) 
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
                <h2 className='m-3'>{vendor.first_name +'  '+ vendor.last_name}</h2>
            </div>

            <div className='col-md-6'>
            <Nav className="justify-content-center mt-5" activeKey="/home">
        <Nav.Item>
        <Button variant="" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form  onSubmit={HandleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter first name</Form.Label>
        <Form.Control type="text" placeholder="Enter First name" onChange={(e)=>setFirst_name(e.target.value)} value={first_name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>setLast_name(e.target.value)} value={last_name}>
        <Form.Label>Enter last name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>setPhone_number(e.target.value)} value={phone_number}>
        <Form.Label>Enter Phome number</Form.Label>
        <Form.Control type="text" placeholder="Enter Phome number" />
      </Form.Group> 
      <Button variant="primary" type="submit">
        Submit
      </Button>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
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