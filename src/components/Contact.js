import React, { useEffect } from 'react'
import { TextField, Checkbox, Button} from '@material-ui/core';
import Title from './Title';
import logo from '../images/logo.svg';
import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';
import { Link }from 'react-router-dom';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);

    return (
        <section data-aos='flip-down' className='contact'>
            <Title title='Contact' />
                <div className='contact-center'>    
                    <div>
                        <h3> Let's Talk / Send Email </h3>
                        <p>
                            <AddIcCallIcon/>
                            +353 (83) 141 7085 
                        </p>
                        <p> 
                            <EmailIcon />
                            oyeleyeoyedayo@gmail.com 
                        </p>
                    </div>
                
                    <div className='contact-message'>
                        <div className='contact-message-inner'>
                            <h2> Send message </h2>
                            <TextField label='First Name*' />
                            <Checkbox color='primary'/> Middle Name?
                            <br />
                            <TextField label='Last Name*' />
                            <TextField label='Mobile No.*' />
                            <br />
                            <TextField label='Email*' />
                            <TextField label='Message*' />
                            <br />
                            <br />
                            <Button color='primary' variant='contained'>Submit</Button>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <div className=''>
                        Copyright © 2020 Oyeleye. All right reserved
                    </div>
                      
                    <div className=''>
                        Design : Oyeleye Technologies | Full-Stack Engineer.
                    </div>
                </div>
                <div className='contact-logo'>
                    <a href='https://github.com/Oyeleye' >
                         <img src={githublogo} alt='My Portfolio'/>
                    </a>   
                    <a href='https://www.linkedin.com/in/oyedayo-oyeleye-a985b9bb/' >
                         <img src={linkedin} alt='My Portfolio'/>
                    </a>
                </div>
        </section>
    )
}
