import React, { useEffect, useState, useContext} from 'react';
import Table from 'react-bootstrap/Table';
import { Row,Col } from 'react-bootstrap';
import axios from "../../constants/constants"
import Button from 'react-bootstrap/Button';
import authContext from '../../context/authContext'
import { useNavigate,Link } from 'react-router-dom';
import Vnavebar from './Vnavebar';

function VturfTable() {
    const {VendorAuthTokens} =useContext(authContext)
   
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false);
    const [turf,setTurf] = useState([])
    const getfurfbyvendor = () =>{
        setLoading(true);
        axios.get('vendor/turf_view_by_vendor',
        {headers:{Authorization:`Bearer ${VendorAuthTokens?.token}`}}).then(res=>{
          console.log('turf',res.data)
          setTurf(res.data)
          console.log(res.data)
        }).catch(e=>console.log(e))
        .finally(()=>setLoading(false))
      }
    
    useEffect(()=>{
        getfurfbyvendor()
      },[])
  return (

    <div>
      <Vnavebar/>
       {turf ? (
        <Row>
      {loading && <h4>loading...</h4>}
<h1 className='title mt-5'>Your Turfs</h1>
     
      <Col lg={12}>
 <Table striped bordered hover className='m-5 me-5'>
      <thead>
        <tr className=''>
          <th>No.</th>
          <th>Turf Name</th>
          <th>Price</th>
          <th>Size</th>
          <th>Category</th>
          <th>District</th>
          <th>City</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      {turf.map((obj)=>
      <tbody>
        <tr>
          <td>1</td>
          <td>{obj.turf_name}</td>
          {/* <td><img src={'http://127.0.0.1:8000'+obj.image}/></td> */}
          <td>{obj.price}</td>
          <td>{obj.size}</td>
          <td>{obj.category.category_name}</td>
          <td>{obj.district.district}</td>
          <td>{obj.city.city}</td>
          <td><Button variant="success" className="bookbtn me-5" onClick={()=>navigate(`/updateturf/${obj.id}`)}>EDIT</Button></td>
          {/* <td><Button variant="danger"onClick={(e) => deleteBook(obj.id,e)}>DELETE</Button></td> */}
        </tr>
      
      
      </tbody>
      )}
    </Table>
    </Col>



</Row>
) : (
       ''
      )}
    </div>
  )
}

export default VturfTable