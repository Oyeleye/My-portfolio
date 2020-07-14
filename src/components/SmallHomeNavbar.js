import React, { useEffect } from 'react'
import Aos from 'aos';
import {FaAlignRight} from 'react-icons/fa';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';



export default function SmallNavbar() {
    useEffect(()=>{
      Aos.init({duration:2000});
    },[]);

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
                <ul className='smallnav-links smallshow-home-nav'>
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
