import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/defaultBcg.jpeg';
import PropTypes from 'prop-types';

export default function Project( { project } ) {
   const{name, slug, images, price} = project;

    return (
        <article className='project'>
            <p className='project-info'>{name}</p>
            <div className='img-container'>     
               <img src={images[0] || defaultImg} alt='single project' />

            <Link to={`/projects/${slug}`} className='btn-primary project-link'> see project </Link> 
            </div> 
        </article>
    )
} 

Project.propTypes = {
    project: PropTypes.exact( {
          name: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
          images: PropTypes.arrayOf(PropTypes.string).isRequired,
          price: PropTypes.number.isRequired
    } )
}