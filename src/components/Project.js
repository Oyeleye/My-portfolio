import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/defaultBcg.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Project( { project } ) {
    const { name, slug, images, price } = project;
        useEffect(()=>{
            Aos.init({duration:2000});
        },[]);
     
    return (
        
        <article className='project'>
            <div data-aos='fade-up' className='img-container'>
               <img src={images[0] || defaultImg} alt='single room'/>

                <Link to={`/rooms/${slug}`} className='btn-primary room-link project-btn1-center contact-logo'>
                    See code
                </Link>

                <Link to={`/rooms/${slug}`} className='btn-primary room-link project-btn2-center'>
                    View project
                </Link>
            </div> 
        </article>

    )
}
