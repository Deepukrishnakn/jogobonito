import React, { useEffect, useState } from 'react';
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

function GetSlot() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const {Turf_id} = useParams();

  const [loading,setLoading] = useState(false);
  const [Slot,setSlot] = useState([])
  const getslot =  async () => {
  const { data } = await axios.get(`vendor/GetSlot/${Turf_id}/`)
  console.log(data)
  setSlot(data)
  }

  useEffect(()=>{
    getslot();
  },[])
  return (
    <>
      <Navebar/>
      <Header/>

      <Row>

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
        <Button variant="primary" onClick={handleShow}>
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
      </Modal>
      </Card.Body>
    </Card>
    </Col>

)}

    {/* <Col lg={3}>
<Card  className='m-5'>
      <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrGvP1llQLOgzXDXEUXcqx81jCS_P4uncdw&usqp=CAU' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
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
      </Modal>
      </Card.Body>
    </Card>
    </Col>





    <Col lg={3}>
<Card  className='m-5'>
      <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrGvP1llQLOgzXDXEUXcqx81jCS_P4uncdw&usqp=CAU' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
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
      </Modal>
      </Card.Body>
    </Card>
    </Col>




    <Col lg={3}>
<Card  className='m-5'>
      <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrGvP1llQLOgzXDXEUXcqx81jCS_P4uncdw&usqp=CAU' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
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
      </Modal>
      </Card.Body>
    </Card>
    </Col> */}
</Row>
    </>
  )
}

export default GetSlot