import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useContext } from 'react';
import axios from "../constants/constants"
import AuthContext from '../context/authContext';
import { Navigate, useNavigate} from 'react-router-dom'

function Verify() {
  const navigate = useNavigate()
    const [code, setCode] = useState('')
    const {phone_number} =useContext(AuthContext)
    const verifyHandler=async(e)=>{
        e.preventDefault()
        await axios.post('account/otpverify/',{
            code:code,
            phone_number:phone_number
          }).then((response)=>{
            console.log(response.data)
            if (response.data.is_active){
              navigate('/')
            }
          }) 
      }
 
  return (
    <div className='m-5'>
    <Form onSubmit={verifyHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter the OTP</Form.Label>
        <Form.Control type="text" placeholder="" value={code} onChange={(e)=>
               setCode(e.target.value)
                }/>
      </Form.Group>

    
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <div  style={{'textAlign':'center'}}>
      <Button variant="success" className='sub-button' type="submit" >
        Submit
      </Button>
      </div>
    
    </Form></div>
  );
}

export default Verify;