import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';



export default function SmallNavbar() {


    const[isOpen, setIsOpen]= React.useState(false);

    const toggleNavLinks = () =>{
        setIsOpen (isOpen =>!isOpen);
    }  

    const scrollToBottom = () => window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior:'smooth'
    });

    return (
        
        <nav className='smallnavbar'>
            <div className='smallnav-center'>
            <button type='button' 
                className='smallnav-btn'
                onClick={toggleNavLinks}
            >
                {isOpen? <CloseIcon className='smallnav-icon'/> : <FormatAlignRightIcon className='smallnav-icon'/> }
            </button>
                <ul className={isOpen ? 'smallnav-links smallshow-nav' : 'smallnav-links'}>
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
                      <Link to='./' onClick={scrollToBottom}>Contact</Link>
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
                    <li className='smallnav-links2'>
                      <Link to='./'>En</Link> 
                      <Link to='./'>Fi</Link>
                      <Link to='./'>De</Link>
                    </li>
                </ul>
             </div>   
        </nav>
        
    )
}
