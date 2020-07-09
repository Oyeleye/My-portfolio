import React, { useEffect } from 'react';
import Front from '../components/Front';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import MyFeaturedProject from '../components/FeaturedProjects';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Projects = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);

        return (
      <>     
           <Front front='otherpagesFront'>
               <Banner title='My Projects'>
                  <Link to='/' data-aos='fade-up' className='btn-primary'>Return Home</Link>
               </Banner>
           </Front>
           <MyFeaturedProject />
      </>
        );
}
