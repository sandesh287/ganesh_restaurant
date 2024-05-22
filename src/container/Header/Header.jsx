import React from 'react';
import {SubHeading} from '../../components';

import {images} from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app_header app__wrapper section__padding' id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app_header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem'}}>Rain or shine, it's time to dine.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
    <img src={images.welcome} alt='welcome'/>
    </div>
  </div>
);

export default Header;
