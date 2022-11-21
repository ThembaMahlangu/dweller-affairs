import '../header.css'
import React, { useState } from "react";
import Home from '../pages/Home'
import Accomodation from '../pages/Accomodation'
import FeedBack from '../pages/Feedback'
import About from '../pages/About'
import Register from '../pages/Register'
import Login from '../pages/Login'
import HowItWorks from './HowItWorks';

function Header() {
  return (
    <div className='container'>
      <div className='navbar'>
        <img src='../logo.jpg' alt='Logo' className='logo'></img>
        <nav>
          <ul>
            <li><link>{<Home/>}</link>Home</li>
            <li><link>{<HowItWorks/>}</link>How It Works</li>
            <li><link>{<Accomodation/>}</link>Accomodation</li>
            <li><link>{<FeedBack/>}</link>Feedback</li>
            <li><link>{<About/>}</link>About Us</li>
            <li><link>{<Register/>}</link>Register</li>
            <li><link>{<Login/>}</link>Login</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header;
