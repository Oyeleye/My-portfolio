import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import AllProjects from '../components/AllProjects';
import NavbarOtherPages from '../components/NavbarOtherPages';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Projects = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);

        return (
      <>   
          <NavbarOtherPages/>  
          <Hero hero='otherpagesHero'>
              <Banner title='My Projects'>
                <Link to='/' data-aos='fade-up' className='btn-primary'>Return Home</Link>
              </Banner>
          </Hero>
          <AllProjects />
      </>
        );
}
