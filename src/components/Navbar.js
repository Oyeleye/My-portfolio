import React, { Component } from 'react';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';


export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };
      
    render() {
        return (
          <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                  <Link to='/'>
                  <img src={logo} alt='My Portfolio'/>
                  </Link>
                   <button 
                     type='button' 
                     className='nav-btn'
                     onClick={this.handleToggle}
                     >
                     <FaAlignRight className='nav-icon'/>
                   </button>
                </div>
                <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
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
