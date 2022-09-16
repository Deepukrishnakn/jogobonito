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
import Payment from "./components/Payment";


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


      <Route path='/getslot/:Turf_id' element ={<SlotPage/>} />
      <Route path='/addturf' element ={<AddTurf/>} />

      <Route path='/payment' element ={<Payment/>} />


      {/* <Route path='/Category' element ={<CategoryPage/>} /> */}
    </Routes>
    </AuthProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;
