import React from 'react';

import {images} from '../../constants';

import {SubHeading} from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      
     <img src={images.chef}alt='chef'/> 
     </div>
     <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>At Ganesh Restaurant, we take immense pride in the culinary artistry and expertise of our team of talented chefs.</p>

        </div>
        <p className='p__opensans'>Our chefs are the heart and soul of Ganesh Restaurant, and their dedication to their craft is evident in every bite you take. Trained in the traditional techniques of Indian cooking and armed with a deep understanding of spices, flavors, and regional specialties, they create dishes that transport you to the vibrant streets and kitchens of India.</p>
      </div>
      <div className="app__chef-sign">
        <p>Driscoll Thapa</p>
        <p className='p__opensans'>Chef And Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
     </div>
    
  </div>
);

export default Chef;
