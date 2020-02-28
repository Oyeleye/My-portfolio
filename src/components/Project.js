import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/defaultBcg.jpeg';

export default function Project( { project } ) {
   const{name, slug, images, price} = project;

    return (
        <article className='project'>
            <div className='img-container'>
            <img src={images[0] || defaultImg} alt='single project' />

            </div> 
        </article>
    )
} 
