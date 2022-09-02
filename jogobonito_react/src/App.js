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


      <Route path='/Thome' element ={<ThomePage/>} />
      <Route path='/Turf' element ={<Turf/>} />


      {/* <Route path='/Category' element ={<CategoryPage/>} /> */}
    </Routes>
    </AuthProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;
