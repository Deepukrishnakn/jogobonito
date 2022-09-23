import React, { useEffect, useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate,Link } from 'react-router-dom';
import AuthProvider from '../../context/authContext'
import logo from "../../img/logo.png";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
import authContext from '../../context/authContext'
import axios from "../../constants/constants"
import Modal from 'react-bootstrap/Modal';

function Vnavebar() {

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow1(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);


  const {VendorAuthTokens} =useContext(authContext)

  const [cate_name, setCatename] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

    let {vendorlogout} = useContext(AuthProvider)
    const navigate = useNavigate()


    const categorydelete = async (id,e) => {
      e.preventDefault();
      await axios.delete(`vendor/category/${id}/`,{headers:{Authorization:`Bearer ${VendorAuthTokens}`} })
      .then((response)=>{
        if (response.status===200){
          console.log("success")            
          handleClose1()
        }
    handleClose()
      }).catch((err)=>{
        console.log(err.response.data.detail,"erorr")
        
      })}

      const [cate,setCate] = useState([])
      const categoryCall=()=>{
        axios.get('vendor/category').then(res=>{
          console.log(res.data)
          setCate(res.data)
         }).catch(e=>console.log(e))
      }
  
    // const districtCall=()=>{
    //   axios.get('vendor/district').then(res=>{
    //    console.log(res.data)
    //     setDistrict(res.data)
    //   }).catch(e=>console.log(e))
    // }
      
    // const cityCall=()=>{
    //   axios.get('vendor/city').then(res=>{
    //    console.log(res.data)
    //     setCity(res.data)
    //   }).catch(e=>console.log(e))
    // }
      
    // const subcatcall=()=>{
    //   axios.get('vendor/subcate',{headers:{Authorization:`Bearer ${VendorAuthTokens}`,  'content-type': 'multipart/form-data'} } ).then(res=>{
    //    console.log(res.data)
    //     setSubcate(res.data)
    //   }).catch(e=>console.log(e))
    // }

    const CategoryHandleSubmit = async(e) => {
        const cateData = new FormData();
        cateData.append('category_name',cate_name)
        cateData.append('slug',slug)
        cateData.append('description',description)
        cateData.append('cat_image',image,)

    await axios.post('vendor/category/',cateData,    
    {headers:{Authorization:`Bearer ${VendorAuthTokens}`, 'content-type': 'multipart/form-data'} } ).then((response)=>{
      console.log(response.data)
      if (response.status===200){
        handleClose1()
        console.log("success")
      }
    })  
    .catch((err)=>{
      console.log(err.response.data.detail,"erorr")
     console.log(cateData)
    }) 
}

const SubcateHandleSubmit = async(e) => {
  const cateData = new FormData();
  cateData.append('category_name',cate_name)
  cateData.append('slug',slug)
  cateData.append('description',description)
  cateData.append('cat_image',image,)

await axios.post('vendor/subcate/',cateData,    
{headers:{Authorization:`Bearer ${VendorAuthTokens}`, 'content-type': 'multipart/form-data'} } ).then((response)=>{
console.log(response.data)
if (response.status===200){
  handleClose1()
  console.log("success")
}
})  
.catch((err)=>{
console.log(err.response.data.detail,"erorr")
console.log(cateData)
}) 
}
    

useEffect(() => {
  categoryCall()
}, [])

  return (
    <div>
 <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href=""> <span className='logo' onClick={()=>navigate('/vhome/')}><img alt='' className='logo' src={logo} /></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='me-5 vnave' href="" onClick={()=>navigate('/addturf/')}>Add Turf</Nav.Link>
            <Nav.Link className='me-5 vnave' href="" onClick={()=>navigate('/addSlot/')}>Add Slot</Nav.Link>
            <Nav.Link className='me-5 vnave' href="" onClick={()=>navigate('/turftable/')}>Turfs</Nav.Link>
            <NavDropdown className='vnave me-5' title="Account" >
          
              <NavDropdown.Item href="" className='vnave'> <Link to='/VendorLogin'>Login</Link></NavDropdown.Item>
              <NavDropdown.Item href="" lassName='me-5 vnave' onClick={vendorlogout}>
                Log out
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item lassName='me-5 vnave' href="#Vendorprofile" onClick={()=>navigate('/Vendorprofile/')}>
               Profile
              </NavDropdown.Item>
            </NavDropdown>
          
            <Button variant="light" onClick={handleShow} className='me-5'>
        Add Feadures
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><span className='logo' onClick={()=>navigate('/vhome/')}><img alt='' className='logo' src={logo} /></span></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
        <Button variant='light' className='me-5 ' href="" onClick={()=>navigate('/addturf/')}>Add Turf</Button><br/><br/><br/>
            <Button  variant='light'  className='me-5 ' href="" onClick={()=>navigate('/addSlot/')}>Add Slot</Button><br/><br/><br/>
            <Button  variant='light'  className='me-5 ' href="" onClick={()=>navigate('/turftable/')}>Turfs</Button><br/><br/><br/>

          
            <Button variant="" onClick={handleShow1}>
        Update
      </Button>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form  onSubmit={CategoryHandleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Category name</Form.Label>
        <Form.Control type="text" placeholder="Enter Category name" onChange={(e)=>setCatename(e.target.value)} value={cate_name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>setSlug(e.target.value)} value={slug}>
        <Form.Label>Enter slug name</Form.Label>
        <Form.Control type="text" placeholder="Enter slug name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>setDescription(e.target.value)} value={description}>
        <Form.Label>Enter description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>upload image1</Form.Label>
              <Form.Control name='image' type="file" placeholder="upload image1" onChange={(e)=>setImage(e.target.files[0])}/>
            </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
          </Form>

        </Modal.Body>
        {/* <Button variant="danger" className="bookbtn"  onClick={(e) => categorydelete(cate.id,e)}>DELETE</Button> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
     

    
      <Button variant="" onClick={handleShow2}>
        Update
      </Button>

      <Modal show={show1} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form  onSubmit={SubcateHandleSubmit}>

          {/* <br/> <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enter Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category_id}
          label="Enter Category"
          onChange={(e)=>setCategory_id(e.target.value)} 
        >
          {data.map((obj)=>
          <MenuItem value={obj.id}>{obj.category_name}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box><br/> */}

      <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>setSlug(e.target.value)} value={slug}>
        <Form.Label>Enter slug name</Form.Label>
        <Form.Control type="text" placeholder="Enter slug name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>setDescription(e.target.value)} value={description}>
        <Form.Label>Enter description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" />
      </Form.Group> 

      <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>upload image1</Form.Label>
              <Form.Control name='image' type="file" placeholder="upload image1" onChange={(e)=>setImage(e.target.files[0])}/>
            </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
          </Form>

        </Modal.Body>
        {/* <Button variant="danger" className="bookbtn"  onClick={(e) => categorydelete(cate.id,e)}>DELETE</Button> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
     


        </Offcanvas.Body>
      </Offcanvas>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Vnavebar