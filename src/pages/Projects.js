import React, { Component } from 'react';
import Front from '../components/Front';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default class Projects extends Component {
    render() {
        return (
           <Front front='otherpagesFront'>
               <Banner title='My Projects'>
               <Link to='/' className='btn-primary'>Return Home</Link>
               </Banner>
           </Front>
        );
    }
}
