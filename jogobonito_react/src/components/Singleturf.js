import React from 'react'
import './Singleturf.css'
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/Header'
import Navebar from '../components/Navebar'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faLocationDot} from "@fortawesome/free-solid-svg-icones"
function Singleturf() {
  return (
    <div>

<Navebar/>
<Header/>
<div className='singleturfcontainer'>
  <div className='singleturfwrapper'>
    <h1 className='singleturftitle'>title</h1>
    <div className='turfaddress'>
      {/* <FontAwesomeIcone icone={faLocationDot}/> */}
        <span>address</span>
    </div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2022/09/02/13/35/mountains-7427623__340.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static7.depositphotos.com/1066611/793/i/950/depositphotos_7932088-stock-photo-taj-mahal-in-india.jpg" alt="" className="turfsingleimg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="turfdetailstext">
          <p className="turfdes">ttttttttttttttttttttttt
          ttttttttttttttttttttttttttttt
          </p>
        </div>
    <div className="turfdetails">
     
        <div className="turfdetailsprice">  
       <h2 className="priceh2"> <b>$945</b> Fore one match</h2>
        </div>
          <h1 className="priceh1">Perfect for play soccer</h1>
          <span className='turfdetailspan'>
            review..............
          </span>
          <h2>
          
            <button className="bookbtn">Reserve or Book Now </button>
          </h2>
      
    </div>
  </div>
</div>
</div>
  )
}

export default Singleturf