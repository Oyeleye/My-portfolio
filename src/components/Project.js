import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/defaultBcg.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Project( { project } ) {
    const { name, slug, images, price, codeUrl, projectUrl } = project;
        useEffect(()=>{
            Aos.init({duration:2000});
        },[]);
     
    return (
        
        <article className='project'>
            <div data-aos='fade-up' className='img-container'>
               <img src={images[0] || defaultImg} alt='single project'/>
                <a href={`${codeUrl}`} className='btn-primary  project-btn1-center contact-logo'>
                    See code
                </a>
                <a href={`${projectUrl}`} className='btn-primary  project-btn2-center'>
                    View project
                </a>
            </div>
            <p className='project-info'>{name}</p> 
        </article>

    )
}
