import React,{useState,useContext,useEffect} from 'react'
import './Turf.css';
import './Category.css';
import Header from './Header'
import Navebar from './Navebar'
import { Row,Col } from 'react-bootstrap';
import List from './List';
// mui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "../constants/constants"


function Turf() {

    const [district,setDistrict] = useState([])
    const districtCall=()=>{
        axios.get('vendor/district').then(res=>{
         console.log(res.data)
          setDistrict(res.data)
        }).catch(e=>console.log(e))
      }
        
      useEffect(()=>{
        
        districtCall()
        
      },[]);

  return (
    <div>
        <Navebar/>
        <Header/>
        <Row>
        <h1 className='title mt-5'>Find Your Turf</h1>
            <Col lg={4} sm={12} md={6}>
            <h1 className='title mt-5'>Filter Your Turf</h1>
            <div className='turfContainer m-5'>
            <div className='turfWrapper'>
                <div className='turfstSearch'>
                    <h1 className='turfTitle'>Filters</h1>
                
                    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enter district</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          label="Enter district">
          {district.map((obj)=>
          <MenuItem value={obj.id}  onClick={()=>navigate(`/singleturf/${obj.category.slug}/${obj.slug}/`)}>{obj.district}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box> <br/>
                </div>
            </div>
        </div>
            </Col>
            <Col lg={8}>
                <List/>
            </Col>
        </Row>
        
    </div>
  )
}

export default Turf