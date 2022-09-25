import "./components/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'  
import { AuthProvider } from './context/authContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import VerifyPage from './pages/VerifyPage';
import ForgotpassPage from './pages/ForgotpassPage';
import HomePage from './pages/HomePage';
import ThomePage from './pages/ThomePage';
import Turf from "./components/Turf";
import BisunessPage from "./pages/BisunessPage";
import VendorLoginPage from "./pages/VendorLoginPage"
import AddTurf from "./components/AddTurf";
import Singleturfpage from './pages/Singleturfpage';
import TurfByCategory from "./components/TurfByCategory";
import SlotPage from "./pages/SlotPage";
// import Payment from "./components/Payment";
import VhomePage from "./pages/VhomePage";
import AddSlot from "./components/Vendor/AddSlot";
import VturfTable from "./components/Vendor/VturfTable";
import GetAllSlots from "./components/slot/GetAllSlots";
import UpdateTurf from "./components/Vendor/UpdateTurf";
import UpdateSlot from "./components/Vendor/UpdateSlot";
import VendorProfile from "./components/Vendor/VendorProfile";
import UpdateCategory from "./components/Mastar/UpdateCategory";
import Searchturf from "./components/Searchturf";

function App(){
  return (
    <div>

     <BrowserRouter>
     <AuthProvider>
      <Routes>
      <Route path='/Register' element ={<RegisterPage/>} />
      <Route path='/' element ={<LoginPage/>} />
      <Route path='/Nave' element ={<HomePage/>} />
      <Route path='/Verify' element ={<VerifyPage/>} />
      <Route path='/ForgotPassword' element ={<ForgotpassPage/>} />
      <Route path='/Bisuness' element ={<BisunessPage/>} />
      <Route path='/VendorLogin' element ={<VendorLoginPage/>} />


      <Route path='/singleturf/:cate_slug/:turf_slug' element ={<Singleturfpage/>} />
      <Route path='/TurfByCategory/:slug' element ={<TurfByCategory/>} />

      

      <Route path='/Thome' element ={<ThomePage/>} />
      <Route path='/Turf' element ={<Turf/>} />
      <Route path='/Search/:key' element ={<Searchturf/>} />

{/* vendpr */}
      <Route path='/getslot/:Turf_id' element ={<SlotPage/>} />
      <Route path='/getallslot/:Turf_id' element ={<GetAllSlots/>} />
      <Route path='/addturf' element ={<AddTurf/>} />
      <Route path='/vhome' element ={<VhomePage/>} />
      <Route path='/addslot' element ={<AddSlot/>} />
      <Route path='/turftable' element ={<VturfTable/>} />
      <Route path='/updateturf/:id' element ={<UpdateTurf/>} />
      <Route path='/updateslot/:id' element ={<UpdateSlot/>}/>
      <Route path="/vendorprofile" element ={<VendorProfile/>}/>
      <Route path="/allcategory/" element ={<UpdateCategory/>}/>
      {/* <Route path='/payment' element ={<Payment/>} /> */}


      {/* <Route path='/Category' element ={<CategoryPage/>} /> */}
    </Routes>
    </AuthProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;
