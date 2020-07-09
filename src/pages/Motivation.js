import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Motivation() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);

    return (
        <>
        <div className='animation-area'>
            <ul className='box-area'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className='motivation-center'>
               <Banner title='Motivation Statement' subtitle='Read below'>
                   <Link to='/' data-aos='fade-up' className='btn-primary'>Return Home</Link>
               </Banner>
            </div>
            <div>
               <h2> 
                Title
               </h2>
               <p>Write statement or IMPORT IT AS A COMPONENT</p>
            </div>
        </div>
        </>
        
    );
}

export default Motivation;