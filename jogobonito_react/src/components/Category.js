import React from 'react'
import './Category.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col,Row } from 'react-bootstrap';

function Category() {
  return (
   
    // <div className='category'>
    //   <div className='categoryItem'>
    //     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrGvP1llQLOgzXDXEUXcqx81jCS_P4uncdw&usqp=CAU' alt='' className='categoryImg'/>
    //     <div className='categoryTitle'>
    //       <h1>Mud Turf</h1>
    //       <h2>555</h2>
    //     </div>
    //   </div>

    //   <div className='categoryItem'>
    //     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrGvP1llQLOgzXDXEUXcqx81jCS_P4uncdw&usqp=CAU' alt='' className='categoryImg'/>
    //     <div className='categoryTitle'>
    //       <h1>Mud Turf</h1>
    //       <h2>555</h2>
    //     </div>
    //   </div>


    //   <div className='categoryItem'>
    //     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrGvP1llQLOgzXDXEUXcqx81jCS_P4uncdw&usqp=CAU' alt='' className='categoryImg'/>
    //     <div className='categoryTitle'>
    //       <h1>Mud Turf</h1>
    //       <h2>555</h2>
    //     </div>
    //   </div>



    <div>
<Row>
  <h1 className='title'>Categories</h1>
  <Col lg={4}>
<Card  className='m-5'>
      <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrGvP1llQLOgzXDXEUXcqx81jCS_P4uncdw&usqp=CAU' alt='' className='categoryImg' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Col>


    <Col lg={4}>
<Card  className='m-5'>
      <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrGvP1llQLOgzXDXEUXcqx81jCS_P4uncdw&usqp=CAU' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Col>



    <Col lg={4}>
<Card  className='m-5'>
      <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrGvP1llQLOgzXDXEUXcqx81jCS_P4uncdw&usqp=CAU' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Col>

    </Row>
    </div>
  )
}

export default Category