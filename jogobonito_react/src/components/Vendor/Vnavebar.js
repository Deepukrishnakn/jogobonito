import React, { useEffect, useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate,Link } from 'react-router-dom';
import AuthProvider from '../../context/authContext'
import logo from "../../img/logo.png";

function Vnavebar() {


  
    let {vendorlogout} = useContext(AuthProvider)
    const navigate = useNavigate()
    
  return (
    <div>
 <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href=""> <span className='logo' onClick={()=>navigate('/vhome/')}><img alt='' className='logo' src={logo} /></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href=""onClick={()=>navigate('/vhome/')}>Home</Nav.Link>
            <Nav.Link href="" onClick={()=>navigate('/addturf/')}>Add Turf</Nav.Link>
            <Nav.Link href="" onClick={()=>navigate('/addSlot/')}>Add Slot</Nav.Link>
            <Nav.Link href="" onClick={()=>navigate('/turftable/')}>Turfs</Nav.Link>
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href=""> <Link to='/VendorLogin'>Login</Link></NavDropdown.Item>
              <NavDropdown.Item href="" onClick={vendorlogout}>
                Log out
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Profile
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Vnavebar