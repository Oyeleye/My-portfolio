import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';

export default class Navbar extends Component {
      
    render() {
        return (
          <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                  <Link to='/'>
                  <img src={logo} alt='My Portfolio'/>
                  </Link>
                </div>
                <ul className={'nav-links'}>
                    <li>
                      <Link to='./'>Home</Link>
                    </li>
                    <li>
                      <Link to='./projects'>Projects</Link>
                    </li>
                    <li>
                      <Link to='./motivation'>Motivation</Link>
                    </li>
                    <li>
                      <Link to='./resume'>Resume</Link>
                    </li>
                    <li>
                      <a href='https://github.com/Oyeleye' >
                         <img src={githublogo} alt='My Portfolio'/>
                      </a>   
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/in/oyedayo-oyeleye-a985b9bb/' >
                         <img src={linkedin} alt='My Portfolio'/>
                      </a>   
                    </li>
                </ul>
             </div>   
          </nav>
        );
    }
}
