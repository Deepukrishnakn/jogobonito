import React,{useState,useContext,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthContext from '../context/authContext';
import axios from "../constants/constants"
import {useNavigate,Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function AddTurf() {
  const {VendorAuthTokens} =useContext(AuthContext)

 
    const [turfName, setTurfname] = useState("");
    const [slug, setSlug] = useState("");
    const [size, setSize] = useState("");
    const [description, setDescription] = useState("");
    const [price, setprice] = useState("");
    const [image, setImage] = useState();
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();
    const [category_id, setCategory_id] = useState("");
    const [subCategory_id, setSubCategory_id] = useState("");
    const [district_id, setDistrict_id] = useState("");
    const [city_id, setCity_id] = useState("");
    const [is_available, setIs_available] = useState("");
    const [category,setCategory] = useState([])

    const HandleSubmit = async(e) => {
      e.preventDefault()
        console.log(turfName)
        const turfData = new FormData();
        turfData.append('turf_name',turfName)
        turfData.append('slug',slug)
        turfData.append('size',size)
        turfData.append('description',description)
        turfData.append('price',price)
        turfData.append('image',image,)
        turfData.append('image1',image1)
        turfData.append('image2',image2)
        turfData.append('image3',image3)
        turfData.append('category',category_id)
        turfData.append('SubCategory',subCategory_id)
        turfData.append('district',district_id)
        turfData.append('city',city_id)
        turfData.append('is_available',is_available)
    await axios.post('vendor/postturf/',turfData,    
    {headers:{Authorization:`Bearer ${VendorAuthTokens?.token}`,  'content-type': 'multipart/form-data'} } ).then((response)=>{
      console.log(response.data)
      if (response.status===200){
        console.log("success")
      }
    })  
    .catch((err)=>{
      console.log(err.response.data.detail,"erorr")
     console.log(turfData)
    }) 

   
 
  axios.get('vendor/category').then(res=>{
    // console.log(res.data)
    
    setCategory(res.category)
  }).catch(e=>console.log(e))
  
}
    
        return (
          <div>
{category.map((obj) =>
  <h1>{obj.slug}</h1>
)}
          
      
      <Form className=' m-5' onSubmit={HandleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter turf Name</Form.Label>
              <Form.Control name='turfName' type="text" placeholder="Enter turf name" onChange={(e)=>setTurfname(e.target.value)} value={turfName} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter slug</Form.Label>
              <Form.Control name='slug' type="text" placeholder="Enter slug " onChange={(e)=>setSlug(e.target.value)} value={slug} />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>turf Size</Form.Label>
              <Form.Control name='size' type="text" placeholder="Enter turf Size" onChange={(e)=>setSize(e.target.value)} value={size} />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>description</Form.Label>
              <Form.Control name='description' type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)} value={description} />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Price</Form.Label>
              <Form.Control name='price' type="text" placeholder="Enter Price" onChange={(e)=>setprice(e.target.value)} value={price} />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>upload image1</Form.Label>
              <Form.Control name='image' type="file" placeholder="upload image1" onChange={(e)=>setImage(e.target.files[0])}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>upload image2</Form.Label>
              <Form.Control name='image1' type="file" placeholder="upload image2" onChange={(e)=>setImage1(e.target.files[0])}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>upload image3</Form.Label>
              <Form.Control name='image2' type="file" placeholder="upload image3" onChange={(e)=>setImage2(e.target.files[0])}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>upload image4</Form.Label>
              <Form.Control name='image3' type="file" placeholder="upload image4" onChange={(e)=>setImage3(e.target.files[0])}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter City</Form.Label>
              <Form.Control name='city_id' type="text" placeholder="Enter City" onChange={(e)=>setCity_id(e.target.value)} value={city_id} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter district</Form.Label>
              <Form.Control name='district_id' type="text" placeholder="Enter district" onChange={(e)=>setDistrict_id(e.target.value)} value={district_id} />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter category</Form.Label>
              <Form.Control name='category_id' type="text" placeholder="Enter category" onChange={(e)=>setCategory_id(e.target.value)} value={category_id} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter subCategory</Form.Label>
              <Form.Control name='subCategory_id' type="text" placeholder="Enter subcategory" onChange={(e)=>setSubCategory_id(e.target.value)} value={subCategory_id} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Is is available</Form.Label>
              <Form.Control name='is_available' type="text" placeholder="Enter is available" onChange={(e)=>setIs_available(e.target.value)} value={is_available} />
            </Form.Group>
      
            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter</Form.Label>
              <Form.Control name='turf_address' type="text" placeholder="Enter Turf address" onChange={(e)=>setTurf_address(e.target.value)} value={turf_address} />
            </Form.Group> */}
    
      {/* 
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control name='image' type="file" placeholder="" onChange={(e)=>setImage(e.target.value)} value={image} /> 
              
              {Object.keys(cityErr).map((key)=>{
                      return <div style={{color:'red'}} >{cityErr[key]}</div>
                    })}
            </Form.Group> */}
      
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Link className='ms-5 mb-3 mt-3' to='/'> SignIn</Link>
          </Form>
      
      
      
          </div>
        )
      }
      

export default AddTurf