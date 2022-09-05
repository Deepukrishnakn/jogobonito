import React,{useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthContext from '../context/authContext';
import axios from "../constants/constants"
import {useNavigate,Link} from 'react-router-dom'
function BusinessRegistretion() {


  const navigate = useNavigate()
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [err,setErr]= useState('')
  const [turf_name, setTurf_name] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')
  const [turf_address, setTurf_address] = useState('')
  const [description, setDescription] = useState('')
  // const [image, setImage] = useState()
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirm_password] = useState('')
  // const [phone_number, setPhone_number] = useState('')
 
  const [detail,setDetail]= useState('')

  

  const [first_nameErr, setFirst_nameErr] = useState({})
  const [last_nameErr, setLast_nameErr] = useState({})
  const [emailErr, setEmailErr] = useState({})
  const [phone_numberErr, setPhone_numberErr] = useState({})
  const [passwordErr, setPasswordErr] = useState({})
  const [confirm_passwordErr, setConfirm_passwordErr] = useState({})
  const [turf_nameErr, setturf_nameErr] = useState({})
  const [cityErr, setcityErr] = useState({})
  const [districtErr, setdistrictErr] = useState({})
  

  // api call for user registaretion

  const vendorRegisterHandler = async(e)=>{
    e.preventDefault()
    const isValid = formValidation()
    if (isValid){
    await axios.post('vendor/vendorRegister/',{
      first_name:first_name,
      last_name:last_name,
      email:email,
      phone_number:phone_number,
      password:password,
      confirm_password:confirm_password,
      turf_name:turf_name,
      district:district,
      city:city,
      turf_address:turf_address,
      description:description,
    }).then((response)=>{
      console.log(response.data)
      if (response.data.phone_number){

        navigate('/Thome')
      }else{
       console.log("ok")
      }
    }).catch((err)=>{
      console.log(err.response.data.detail)
      setDetail(null)
      setErr(err.response.data.detail)
    })
  }}


    // formValidation.......

    const formValidation=()=>{ 
    
      const first_nameErr={}
      const last_nameErr ={}
      const emailErr={}
      const phone_numberErr={}
      const passwordErr={}
      const confirm_passwordErr={}
      let isValid = true

      if (!first_name){
        first_nameErr.short_fname = '*first name is a required field'
        isValid = false
      }else if(first_name.trim().length <3){
        first_nameErr.short_fname = '*first name is too short'
        isValid = false
      }

      if (!last_name){
      last_nameErr.short_lname = '*last name is a required field'
      isValid = false
    }else if(last_name.trim().length <1){
      last_nameErr.short_lname = '*last name is too short'
      isValid = false
    }

    if (!email){
      emailErr.short_email= '*email is a required field'
      isValid = false
    }

    if (!phone_number){
      phone_numberErr.short_mobile= '*mobile no. is a required field'
      isValid = false
    }else if(phone_number.trim().length != 10){
      phone_number.short_mobile= '*enter a valid mobile no!.'
      isValid = false
    }else if( /^[a-zA-Z()]+$/.test(phone_number)){
      phone_numberErr.short_mobile= '*enter a valid mobile no!.'
      isValid = false
    }

    if(!password ){
      passwordErr.short_password= '*password is a required field!'
      isValid = false
    }else if(password.length <8  ) {
      passwordErr.short_password= '*minimum 8 characters are required for password'
      isValid = false
    }
     if(!confirm_password){
      confirm_passwordErr.short_cpassword= '* required field!'
      isValid = false
    }
     else if(password!=confirm_password){
      confirm_passwordErr.password_mismatch= '*passwords does not match'
      isValid = false
    }
    if(!turf_name){
      turf_nameErr.short_cpassword= '* required field!'
      isValid = false
    }
    if(!district){
      districtErr.short_cpassword= '* required field!'
      isValid = false
    }
    if(!city){
      cityErr.short_cpassword= '* required field!'
      isValid = false
    }

    setFirst_nameErr(first_nameErr)
    setLast_nameErr(last_nameErr)
    setEmailErr(emailErr)
    setPhone_numberErr(phone_numberErr)
    setPasswordErr(passwordErr)
    setConfirm_passwordErr(confirm_passwordErr)
    setturf_nameErr(turf_nameErr)
    setcityErr(cityErr)
    setdistrictErr(districtErr)

    return isValid
  }



  return (
    <div>


<Form className=' m-5' onSubmit={vendorRegisterHandler}>
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
        <Form.Control name='last_namme' type="text" placeholder="Enter Last Name" onChange={(e)=>setLast_name(e.target.value)} value={last_name} />
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Turf Name</Form.Label>
        <Form.Control name='turf_name' type="text" placeholder="Enter Turf Name" onChange={(e)=>setTurf_name(e.target.value)} value={turf_name} />
        {Object.keys(turf_nameErr).map((key)=>{
                return <div style={{color:'red'}} >{turf_nameErr[key]}</div>
              })}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter District</Form.Label>
        <Form.Control name='district' type="text" placeholder="Enter District" onChange={(e)=>setDistrict(e.target.value)} value={district} />
        {Object.keys(districtErr).map((key)=>{
                return <div style={{color:'red'}} >{districtErr[key]}</div>
              })}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter City</Form.Label>
        <Form.Control name='city' type="text" placeholder="Enter Turf City" onChange={(e)=>setCity(e.target.value)} value={city} />
        {Object.keys(cityErr).map((key)=>{
                return <div style={{color:'red'}} >{cityErr[key]}</div>
              })}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Turf address</Form.Label>
        <Form.Control name='turf_address' type="text" placeholder="Enter Turf address" onChange={(e)=>setTurf_address(e.target.value)} value={turf_address} />
        {Object.keys(cityErr).map((key)=>{
                return <div style={{color:'red'}} >{cityErr[key]}</div>
              })}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter description</Form.Label>
        <Form.Control name='description' type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)} value={description} />
        {Object.keys(cityErr).map((key)=>{
                return <div style={{color:'red'}} >{cityErr[key]}</div>
              })}
      </Form.Group>
{/* 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control name='image' type="file" placeholder="" onChange={(e)=>setImage(e.target.value)} value={image} /> 
        
        {Object.keys(cityErr).map((key)=>{
                return <div style={{color:'red'}} >{cityErr[key]}</div>
              })}
      </Form.Group> */}

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