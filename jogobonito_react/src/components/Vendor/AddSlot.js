import React,{useContext,useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Vnavebar from './Vnavebar';
import authContext from '../../context/authContext'
import axios from "../../constants/constants"

function AddSlot() {

  const {VendorAuthTokens} =useContext(authContext)

  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [Slot_No, setSlot_No] = useState("");
  const [is_available, setIs_available] = useState("False")


  const HandleSubmit = async(e) => {
    
    e.preventDefault()
      const slotData = new FormData();
      slotData.append('Date',Date)
      slotData.append('Time',Time)
      slotData.append('Slot_No',Slot_No)
      slotData.append('is_available',is_available)
      
  await axios.post('vendor/addSlot/',slotData,    
  {headers:{Authorization:`Bearer ${VendorAuthTokens?.token}`,  'content-type': 'multipart/form-data'} } ).then((response)=>{
    console.log(response.data)
    if (response.status===200){
      console.log("success")
    }
  })  
  .catch((err)=>{
    console.log(err.response.data.detail,"erorr")
   console.log(slotData)
  }) 
}

  console.log(is_available)
  const handleCheck=()=>{
    if(is_available==='True'){
      setIs_available('False')
    }else{
      setIs_available('True')
    }
  }

  
  return (
    <div>
<Vnavebar/>
<h1 className='title mb-5 mt-5'>Add Your Turf</h1>
<Form className='m-5' onSubmit={HandleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Date</Form.Label>
        <Form.Control type="date" placeholder="Enter Date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Time</Form.Label>
        <Form.Control type="time" placeholder="Time" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter slot number</Form.Label>
        <Form.Control type="text" placeholder="Slot Numbber" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check is available" onChange={handleCheck} value={is_available} />
    </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default AddSlot