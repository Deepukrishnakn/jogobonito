import React,{useState,useEffect} from 'react'
import './Singleturf.css'
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/Header'
import Navebar from '../components/Navebar'
import axios from "../constants/constants"
import { useParams } from 'react-router-dom';


function Singleturf() {


const [turfdetails, setTurfDetails] = useState([])

const { cate_slug,turf_slug } = useParams();

const getSingleTurf =  async () => {
  const { data } = await axios.get(`vendor/Turf_details/${cate_slug}/${turf_slug}`)
  console.log(data)
  setTurfDetails(data)
}

useEffect(() => {
  getSingleTurf();
},[])


  return (
    <div>

<Navebar/>
<Header/>

<div className='singleturfcontainer'>
  <div className='singleturfwrapper'>
    <h1 className='singleturftitle'>{turfdetails.turf_name}</h1>
    <div className='turfaddress'>
      {/* <FontAwesomeIcone icone={faLocationDot}/> */}
        <span>address</span>
    </div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={turfdetails.image}
          alt={turfdetails.image}
        />
        <Carousel.Caption>
          <h3>{turfdetails.turf_name}</h3>
          <p>{turfdetails.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static7.depositphotos.com/1066611/793/i/950/depositphotos_7932088-stock-photo-taj-mahal-in-india.jpg"
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
       <h2 className="priceh2"> <b>${turfdetails.price}</b> For one match</h2>
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