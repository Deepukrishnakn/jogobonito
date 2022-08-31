import React,{useContext} from 'react'
import './navebar.css'
import logo from "../img/logo.png";
import { useNavigate,Link } from 'react-router-dom';
import AuthProvider from '../context/authContext';

function Navebar() {
  let {userLogout} = useContext(AuthProvider)
  return (
    <div className='navebar'>
<dive className='navContainer'>
    <span className='logo'><img alt='' className='logo' src={logo} /></span>
    <dive className="naveItem">
        <button className='naveButton' onClick={userLogout}>Logout</button>
        <Link to='/'><button className='naveButton'>Login</button></Link>
    </dive>
</dive>

    </div>
  )
}

export default Navebar