import React,{useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthContext from '../context/authContext';
import axios from "../constants/constants"
import {useNavigate,Link} from 'react-router-dom'
function BusinessRegistretion() {
  return (
    <div>


<Form className=' m-5' onSubmit={registerHandler}>
{  err &&(<> <h6 style={{color:'red'}}>{err}</h6>  <br/></>) }
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter First Name</Form.Label>
        <Form.Control name='first_name' type="text" placeholder="Enter First Name" onChange={(e)=>setFirst_name(e.target.value)} value={first_name} />
        {Object.keys(first_nameErr).map((key)=>{
                return <div style={{color:'red'}} >{first_nameErr[key]}</div>
              })}
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Last Name</Form.Label>
        <Form.Control name='last_namme' type="text" placeholder="Enter Last Namesword" onChange={(e)=>setLast_name(e.target.value)} value={last_name} />
        {Object.keys(last_nameErr).map((key)=>{
                return <div style={{color:'red'}} >{last_nameErr[key]}</div>
              })}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        {Object.keys(emailErr).map((key)=>{
                return <div style={{color:'red'}} >{emailErr[key]}</div>
              })}
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control name='mobile' type="text" placeholder="Enter Phone Number" onChange={(e)=>setPhone_number(e.target.value)} value={phone_number} />
        {Object.keys(phone_numberErr).map((key)=>{
                return <div style={{color:'red'}} >{phone_numberErr[key]}</div>
              })}
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        {Object.keys(passwordErr).map((key)=>{
                return <div style={{color:'red'}} >{passwordErr[key]}</div>
              })}
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control name='confirm_password' type="password" placeholder="Enter Confirm Password" onChange={(e)=>setConfirm_password(e.target.value)} value={confirm_password} />
        {Object.keys(confirm_passwordErr).map((key)=>{
                return <div style={{color:'red'}} >{confirm_passwordErr[key]}</div>
              })}
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link className='ms-5 mb-3 mt-3' to='/'> SignIn</Link>
    </Form>



    </div>
  )
}

export default BusinessRegistretion