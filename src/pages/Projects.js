import React from 'react';
import Front from '../components/Front';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export const Projects = () => {
        return (
           <Front front='otherpagesFront'>
               <Banner title='My Projects'>
                  <Link to='/' className='btn-primary'>Return Home</Link>
               </Banner>
           </Front>
        );
}
