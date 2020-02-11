import React from 'react';
import Front from '../components/Front';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';


export const Home = () => {
    return (
     <> 
         <Front> 
            <Banner  title='OYELEYE OYEDAYO' subtitle='Front-end Developer'>
               <Link to='/projects' className='btn-primary'>See Projects</Link>
            </Banner>
         </Front>
         <Portfolio/>
   
    </>
    );
   
}

