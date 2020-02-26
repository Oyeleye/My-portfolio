import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/defaultBcg.jpeg';
import featuredProjectsImg1 from '../images/details-1.jpeg';
import featuredProjectsImg2 from '../images/details-2.jpeg';
import featuredProjectsImg3 from '../images/details-3.jpeg';
import featuredProjectsImg4 from '../images/details-4.jpeg';
import Loading from './Loading';

class Project extends Component {
    s
 render() { 
    return (
      <>
        <Loading />
        <article className='project'>
            <div className='img-container'>
               <Link to='./projects'>
               <img src={featuredProjectsImg1 || defaultImg} alt='single project' />
               </Link>
            </div>
            <div className='img-container'>
               <Link to='./projects'>
               <img src={featuredProjectsImg2 || defaultImg} alt='single project' />
               </Link>
            </div>
            <div className='img-container'>
               <Link to='./projects'>
               <img src={featuredProjectsImg3 || defaultImg} alt='single project' />
               </Link>
            </div>
            <div className='img-container'>
               <Link to='./projects'>
               <img src={featuredProjectsImg4 || defaultImg} alt='single project' />
               </Link>
            </div>

        </article>
      </>
    )
}
}
export default Project;