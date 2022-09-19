import React, { useEffect, useState, useContext} from 'react';
import { Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Header from '../Header';
import Navebar from '../Navebar';
import '../slot/Slot.css'
import Card from 'react-bootstrap/Card';
import axios from "../../constants/constants"
import { useParams } from 'react-router-dom';
import '../List.css'
import authContext from '../../context/authContext'

function GetSlot() {
  let {authTokens,} = useContext(authContext)
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

  const {Turf_id} = useParams();

  const [loading,setLoading] = useState(false);
  const [Slot,setSlot] = useState([])
  const getslot =  async () => {
  const { data } = await axios.get(`vendor/GetSlot/${Turf_id}/`,
  {headers:{Authorization:`Bearer ${authTokens?.token}`}}).then((response)=>{
    if (response.status===200){
      console.log("success")            
      setSlot(response.data)
    }
  }).catch((err)=>{
    console.log(err.response.data.detail,"erorr").finally(()=>setLoading(false))
    
  })}
  
  

//   const loadScript = (src) => {
// return new Promise((resolve) =>{
//   const script = document.createElement('script')
//   script.src = src

//   script.onabort = () => {
//     resolve(true)
//   }


//   script.onerror = () => {
//      resolve(false)
//   }

//   document.body.appendChild(script)
// })
//   }

// const displayRazorpay = async (price) => {
//   const res = await loadScript('http://checkout.razorpay.com/v1/checkout.js')
// }
// if (!src) {
//   alert('You are offline ')
//   return
// }

// const options = {
//   key: 'rzp_test_FqfpAM5lIo4SFl',
//   currency: "INR",
//   price: price * 100,
//   name: 'deepu',

//   handler: function (response){

//     alert(response.rezorpay_payment_id)
//     alert("payment success")
//   },
//   prefill:{
//     name: 'deepu'
//   }
//   // if(response.rezorpay_payment_id)
// };
//     const paymentObject = new window.Razorpzy(options)
//     paymentObject.open()

  useEffect(()=>{
    getslot()
  },[])
  return (
    <>
      <Navebar/>
      <Header/>

      <Row>
      {loading && <h4>loading...</h4>}
<h1 className='title mt-5'>Find Your Time</h1>
        {Slot.map((obj)=>
      <Col lg={3}>
<Card  className='m-5'>
      <Card.Img variant="top" src={'http://127.0.0.1:8000'+obj.turf.image} />
      <Card.Body>
        <Card.Title>{obj.turf.turf_name}</Card.Title>
        <Card.Text>
        Date: {obj.Date}
        </Card.Text>
        <Card.Text>
        Date: {obj.Time}
        </Card.Text>
        <Button variant="primary">
Edit
</Button>
      </Card.Body>
    </Card>
    </Col>

)}

</Row>
    </>
  )
}

export default GetSlot


{/* <Button variant="primary" onClick={handleShow}>
Launch demo modal
</Button>

<Modal show={show} onHide={handleClose} animation={false}>
<Modal.Header closeButton>
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button>
</Modal.Footer>
</Modal> */}