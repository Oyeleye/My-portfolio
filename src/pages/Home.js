import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import MyFeaturedProject from '../components/FeaturedProjects';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SmallHomeNavbar from '../components/SmallHomeNavbar';

function Home () {
   useEffect(()=>{
      Aos.init({duration:2000});
   },[]);

   return (
     <> 
         <SmallHomeNavbar/>
         <Hero> 
            <Banner  data-aos='fade-up' title='OYELEYE OYEDAYO' subtitle='Full-Stack Developer'>
               <Link to='/projects' data-aos='fade-up' className='btn-primary'>
                  See Projects
               </Link>
               <h6>You are welcome</h6>
            </Banner>
            <ScrollToTop />
         </Hero>
         <Portfolio/>
         <MyFeaturedProject />
         <Contact />
   
    </>
    );;
   
}

export default Home;