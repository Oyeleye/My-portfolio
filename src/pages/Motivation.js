import React from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

function Motivation() {
    return (
        <>
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
            <div>
               <Banner title='Motivation Statement' subtitle='Read below'>
                   <Link to='/' className='btn-primary'>Return Home</Link>
               </Banner>
            </div>
            <div>
               <h2> 
                Title
               </h2>
               <p>Write statement or IMPORT IT AS A COMPONENT</p>
            </div>
        </div>
        </>
        
    );
}

export default Motivation;