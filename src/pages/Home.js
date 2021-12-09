import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import MyFeaturedProject from '../components/FeaturedProjects';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import ScrollToBottom from '../components/ScrollToBottom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NavBar from '../components/Navbar';
import BlackNavbar from '../components/BlackNavbar';


function Home () {
   useEffect(()=>{
      Aos.init({duration:2000});
   },[]);



   return (
      <> 
         <NavBar />
         <BlackNavbar />
         <Hero > 
            <Banner   title='OYELEYE OYEDAYO' subtitle='Full-Stack Developer'>
               <Link to='/projects' data-aos='fade-up' className='btn-primary'>
                  See Projects
               </Link>
            </Banner>
            <ScrollToBottom />
         </Hero>
         <ScrollToTop />
         <Portfolio/>
         <MyFeaturedProject />
         <Contact />
      </>
   );;
   
}

export default Home;