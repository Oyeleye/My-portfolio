import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';
import Aos from 'aos';
import {FaAlignRight} from 'react-icons/fa';
import CloseIcon from '@material-ui/icons/Close';
import SmallHomeNavbar from '../components/SmallHomeNavbar';

export default function Navbar() {

        const scrollToBottom = () => window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior:'smooth'
        });

        const[isOpen, setIsOpen]= React.useState(false);

        const toggleNavLinks = () =>{
            setIsOpen (isOpen =>!isOpen);
        } 

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
                    onClick={toggleNavLinks}
                  >
                      {isOpen ? <CloseIcon className='nav-icon' data-aos='flip-right'/> : <FaAlignRight className='nav-icon' data-aos='flip-up'/> }
                  </button>
                </div>

                {isOpen? <SmallHomeNavbar /> : '' }
                <ul className={'nav-links'}>
                    <li>
                      <Link to='./' title='Home page'>Home</Link>
                    </li>
                    <li>
                      <Link to='./projects' title='Projects' >Projects</Link>
                    </li>
                    <li>
                      <Link to='./motivation' title='See motivation page' >Motivation</Link>
                    </li>
                    <li>
                      <Link to='./resume' title='Download resume'>Resume</Link>
                    </li>
                    <li>
                      <Link to='./' title='Change language'>Language</Link>
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

