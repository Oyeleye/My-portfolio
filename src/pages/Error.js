import React from 'react';
import Front from '../components/Front';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'; 

export default function Error() {
    return (
        <Front>
           <Banner className='banner' title='ERROR!'>
              <Link to='/' className='btn-primary'>Return Home</Link>
           </Banner>
        </Front>
    );
}
