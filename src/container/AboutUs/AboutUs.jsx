import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G letter' />
    </div>
    <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'> Welcome to Ganesh Restaurant! At Ganesh Restaurant, we take immense pride in bringing you an authentic culinary experience that showcases the rich and diverse flavors of Indian cuisine. Situated in the heart of the city, our restaurant has become a beloved destination for food enthusiasts, locals, and tourists alike.</p>        
          <button type='button' className='custom__button'>Know More</button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt='anout_knife'/>
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>The history of Ganesh Restaurant is deeply rooted in the passion and dedication of its founders, Mr. Ganesh  and Mr. Driscoll. Their journey began over two decades ago when they embarked on a mission to introduce the flavors of Indian cuisine to a wider audience.</p>        
          <button type='button' className='custom__button'>Know More</button>
        </div>
    </div>
  </div>
);

export default AboutUs;
