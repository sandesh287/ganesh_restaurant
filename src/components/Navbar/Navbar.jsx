import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return(
  <nav className="app_navbar">
    <div className="app_navbar-logo">
      <img src={images.gericht} alt='applogo' />
    </div>
    <ul className='app_navbar-links'>
    <li className='p__opensans abc'><a href="#home">Home</a></li>
      <li className='p__opensans abc'><a href="#about">About</a></li>
      <li className='p__opensans abc'><a href="#menu">Menu</a></li>
      <li className='p__opensans abc'><a href="#awards">Awards</a></li>
      <li className='p__opensans abc'><a href="#contact">Contact</a></li>
    </ul>
    <div className="app_navbar-login">
      <a href="#login" className='p__opensans abc'>Log In / Register</a>
      <div />
      <a href="/" className='p__opensans abc'>Book Table </a>
    </div>
    <div className="app_navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() =>setToggleMenu(true)} />
     
      {toggleMenu &&( 
      <div className="app_navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className='overlay_close 'onClick={()=>setToggleMenu(false)}/>

        <ul className='app_navbar-smallscreen-links'>
      <li className='p__opensans abc'><a href="#home">Home</a></li>
      <li className='p__opensans abc'><a href="#about">About</a></li>
      <li className='p__opensans abc'><a href="#menu">Menu</a></li>
      <li className='p__opensans abc'><a href="#awards">Awards</a></li>
      <li className='p__opensans abc'><a href="#contact">Contact</a></li>
    </ul>
      </div>
      )}  
    </div>
  </nav>
 )
 }

export default Navbar;
