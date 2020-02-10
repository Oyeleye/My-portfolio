import React from 'react';
import Front from '../components/Front';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';


export const Resume = () => {
    return (
        <Front front='otherpagesFront'> 
           <Banner title='My Resume'>
               <Link to='/' className='btn-primary'>Return Home</Link>
           </Banner>
        </Front>
   );
}
