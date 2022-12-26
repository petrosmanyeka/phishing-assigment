import React from 'react'
import {BiBookOpen} from 'react-icons/bi'
import { FaBars, FaGlobe, FaUserCircle } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav1'>
        <div className='nav2'>
          <FaBars/>
          <img src='../ju.jpg'/> 
            <h2>OWASP Juice Shop</h2>
        </div>
        <div className='nav3'>
          <FaUserCircle/>
            <a href='#'>Account</a>
            <FaGlobe/>
        </div>
       
      
    </div>
  )
}

export default Navbar
