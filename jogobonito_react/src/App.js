import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'  
import { AuthProvider } from './context/authContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import VerifyPage from './pages/VerifyPage';
import ForgotpassPage from './pages/ForgotpassPage';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <AuthProvider>
      <Routes>
      <Route path='/Register' element ={<RegisterPage/>} />
      <Route path='/' element ={<LoginPage/>} />
      <Route path='/Home' element ={<Home/>} />
      <Route path='/Verify' element ={<VerifyPage/>} />
      <Route path='/ForgotPassword' element ={<ForgotpassPage/>} />
    </Routes>
    </AuthProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;
