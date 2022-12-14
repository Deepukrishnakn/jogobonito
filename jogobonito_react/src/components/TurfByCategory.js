import React,{useState,useEffect} from 'react'
import './Singleturf.css'
import Header from '../components/Header'
import Navebar from '../components/Navebar'
import axios from "../constants/constants"
import { useParams } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
import './List.css'
import { useNavigate,Link } from 'react-router-dom';
import Footer from '../components/Footer'
import '../components/home.css'
import Pagination from '../components/Pagination';
import Alert from 'react-bootstrap/Alert';
// mui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function TurfByCategory() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

    const navigate = useNavigate()
    const [turfbycategory, setturfbycategory] = useState([])

    const { slug } = useParams();
    
    const getTurfbyCategory =  async () => {
      const { data } = await axios.get(`vendor/turfs/${slug}`)
      console.log(data)
      setturfbycategory(data)
    }

    const [district_id, setDistrict_id] = useState("");
    const [city_id, setCity_id] = useState("");
    const [category_id, setCategory_id] = useState("");
  
  
    const [category,setCategory] = useState([])
    const categoryCall=()=>{
      axios.get('vendor/category').then(res=>{
        console.log(res.data)
        setCategory(res.data)
       }).catch(e=>console.log(e))
    }
  
      const [district,setDistrict] = useState([])
      const districtCall=()=>{
        axios.get('vendor/district').then(res=>{
         console.log(res.data)
          setDistrict(res.data)
        }).catch(e=>console.log(e))
      }
        
      const [city,setCity] = useState([])
      const cityCall=()=>{
        axios.get('vendor/city').then(res=>{
         console.log(res.data)
          setCity(res.data)
        }).catch(e=>console.log(e))
      }
  
      const filterDistHandler=(e)=>{
        console.log(e,'dfdf')
        axios.get(`vendor/Turfs_District/${e}`).then(res=>{
          console.log('turfdfdfd',res.data.results)
          console.log('dfd',res.data)
          setturfbycategory(res.data,)
        })
      }
  
      const filterCityHandler=(e)=>{
        console.log(e,'dfdf')
        axios.get(`vendor/Turfs_City/${e}`).then(res=>{
          console.log('turfdfdfd',res.data.results)
          console.log('dfd',res.data)
          setturfbycategory(res.data,)
        })
      }
  
      const filterCategoryHandler=(e)=>{
        console.log(e,'dfdf')
        axios.get(`vendor/turfs/${e}`).then(res=>{
          console.log('category',res.data.results)
          console.log('dfd',res.data)
          setturfbycategory(res.data,)
        })
      }

    useEffect(()=>{
      districtCall()
      cityCall()
      categoryCall()
      getTurfbyCategory()
    },[]);
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - indexOfLastPost;
    const currentPost = turfbycategory.slice(indexOfFirstPost, indexOfLastPost);
    // change page 
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
        
 <Navebar/>
<Header/>
<Row>
<h1 className='title mt-5'>Find Your Turf</h1>
{currentPost.length ==0  ?  <Alert variant='danger' className='m-5'>
Sorry Turf is Not available !!!
        </Alert>:''}
            <Col lg={4} sm={12} md={6}>
            <h1 className='title mt-5'>Filter Your Turf</h1>
            <div className='turfContainer m-5'>
            <div className='turfWrapper'>
                <div className='turfstSearch'>
                    <h1 className='turfTitle'>Filters</h1><br/>

          
        <h1 className='filtertitle'>District</h1>   <br/>   
       <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enter district</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={district_id}
          label="Enter district">
          {district.map((obj)=>
          <MenuItem    onClick={()=>filterDistHandler(obj.id)} value={obj.id}>{obj.district}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box> <br/>

    <h1 className='filtertitle'>City</h1><br/>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enter city</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city_id}
          label="Enter city">
          {city.map((obj)=>
          <MenuItem onClick={()=>filterCityHandler(obj.id)} value={obj.id}>{obj.city}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box><br/>

    <h1 className='filtertitle'>Category</h1>
    <br/> <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enter Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category_id}
          label="Enter Category">
          {category.map((obj)=>
          <MenuItem onClick={()=>filterCategoryHandler(obj.slug)} value={obj.slug}>{obj.category_name}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box><br/>
                </div>
            </div>
        </div>
            </Col>
  <Col lg={8}>

{turfbycategory.map((obj)=>
<div className='list mt-5 me-5 '>
  <img src={'http://127.0.0.1:8000'+obj.image} alt='uyguy' className='listImg'/>
      <div className='listDesc'>
      <h1 className='listTile'>Turf Name: {obj.turf_name}</h1>
        <span className='listSize'>Turf Size: {obj.size}</span>
        <span className='listDesc'>Turf District: {obj.category.category_name}</span>
        <span className='listcity'>Turf City: {obj.city.city}</span>
        <span className='listcity'>Turf District: {obj.district.district}</span>
        <span className='listPrice'>Price: {obj.price}</span>
      </div>
      <div className='BookingBtn'>
      <button className='bookbtn' onClick={()=>navigate(`/singleturf/${obj.category.slug}/${obj.slug}/`)}>See Availability</button>
    </div>
    </div>
)}
    
    </Col>
</Row>

<Pagination postsPerPage={postsPerPage} 
totalPosts={turfbycategory.length}
paginate={paginate}
/>
<div className='FooterContainer'>
  <Footer/>
</div>
    </div>
  )
}

export default TurfByCategory