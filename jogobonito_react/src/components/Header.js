import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate,Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
          <div className='headerContainer'>
            <div className='headerList'>

               <div className='headerlistItem'>
               <FontAwesomeIcon icon={faFutbol} />
               <Link to='/Bisuness'><span className='turfbtn'>Business</span></Link>
               </div>
          
               <div className='headerlistItem active'>
               <FontAwesomeIcon icon={faFutbol} />
               <Link to='/thome'><span className='turfbtn'>Home</span></Link>
               </div>
          
               <div className='headerlistItem'>
               <FontAwesomeIcon icon={faFutbol} />
               <Link to='/turf'><span className='turfbtn'>Turf</span></Link>
               </div>
          </div>

          <h1 className='headerTitle'> I learned all about life with a ball at my feet</h1>
          <p className='hederDesc'>
          I once cried because I had no shoes to play soccer, but one day, I met a man who had no feet.
          </p>
          <Link to='/Register'><button className='headerBtn'>Sign In / Sign Up</button></Link>
          <Form className="d-flex mt-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='me-5' variant="outline-success">Search</Button>
          </Form>
          </div>
          </div>

        

    
  )
}

export default Header
