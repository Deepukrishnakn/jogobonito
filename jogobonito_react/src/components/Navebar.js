import React from 'react'
import './navebar.css'
import logo from "../img/logo.png";

function Navebar() {
  return (
    <div className='navebar'>
<dive className='navContainer'>
    <span className='logo'><img alt='' className='logo' src={logo} /></span>
    <dive className="naveItem">
        <button className='naveButton'>Logout</button>
        <button className='naveButton'>Login</button>
    </dive>
</dive>

    </div>
  )
}

export default Navebar