import React, { useEffect } from 'react';
import Front from '../components/Front';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import MyFeaturedProject from '../components/FeaturedProjects';
import Contact from '../components/Contact';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home () {
   useEffect(()=>{
      Aos.init({duration:2000});
   },[]);

   return (
     <> 
         <Front> 
            <Banner  data-aos='fade-up' title='OYELEYE OYEDAYO' subtitle='Full-Stack Developer'>
               <Link to='/projects' data-aos='fade-up' className='btn-primary'>
                  See Projects
               </Link>
               <h6>You are welcome</h6>
            </Banner>
            <ArrowUpwardIcon className='scrollup'/>
         </Front>
         <Portfolio/>
       <MyFeaturedProject />
       <Contact />
   
    </>
    );;
   
}

export default Home;