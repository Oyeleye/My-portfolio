import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import NavbarOtherPages from '../components/NavbarOtherPages';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Motivation() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);

    return (
        <>
        <NavbarOtherPages/>
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
            <div className='motivation-text' >
                <p>
                    I am very passionate about learning, developing and designing solidly tested solutions. 
                    I have contributed to open source projects, worked on engineering teams, and always stay 
                    attuned to the newest framework. 
                    I was an Intern University Teacher of Computer Learning at the University of Turku, Finland, 
                    (2018 - 2019). During that time, I taught graduate students HTML5, CSS3 and JavaScript, and how they can be incorporated into 
                    teaching-learning process. 
                </p>
            </div>
        </div>

        </>
        
    );
}

export default Motivation;