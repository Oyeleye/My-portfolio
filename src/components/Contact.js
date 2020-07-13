import React from 'react'
import { TextField, Checkbox, Button} from '@material-ui/core';
import Title from './Title';
import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';
import { Link }from 'react-router-dom';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutoSize from '@material-ui/core/TextareaAutoSize';
import Aos from 'aos';
import 'aos/dist/aos.css';




export default function Contact() {
    const useStyles = makeStyles(theme => ({
        sentMsgStyle: {
            color: 'blue'
        }
    })); 
    const classes = useStyles();

    const [clickMiddleName, setClickMiddleName] = React.useState(false);
    const [submitMessage, setSubmitMessage] = React.useState(false);

    const MiddleName = () => {
        return( 
         <span> Middle Name? </span>
        );
    };
    const MiddleNameTextField = () => {
        return(
            <TextField label='Middle Name' />
        );
    }
    const toggleMiddleName = () => {
        setClickMiddleName(clickMiddleName=>!clickMiddleName);
    };
    const SendMessage = () => {
        return(
            <h2>Send Message</h2>
        );
    }
    const MessageSent = () => {
        return(
            <h2 className={classes.sentMsgStyle}>Message Sent!</h2>
        )
    }
    const handleSubmitMessage = () => {
        setSubmitMessage(true);

    }
    React.useEffect(()=>{
        Aos.init({duration:2000});
      },[]);

    return (
        <section data-aos='flip-down' className='contact'>
            <Title title='Contact' />
                <div className='contact-center'>    
                    <div>
                        <h3> Let's Talk / Send Email </h3>
                        <p className='contact-links'>
                            <AddIcCallIcon/>
                            <a href='tel:+353 (83) 141 7085'> +353 (83) 141 7085 </a> 
                        </p>
                        <p className='contact-links'> 
                            <EmailIcon />
                            <a href='mailto:oyeleyeoyedayo@gmail.com' > oyeleyeoyedayo@gmail.com </a>
                        </p>
                    </div>
                
                    <div className='contact-message'>
                        <form className='contact-message-inner'>
                            {submitMessage? <MessageSent /> : <SendMessage />}
                            <TextField label='First Name' required/>
                            <Checkbox onClick={toggleMiddleName} color='primary'/> {clickMiddleName? <MiddleNameTextField /> : <MiddleName /> }
                            <br />
                            <TextField label='Last Name' required/>
                            <TextField label='Mobile No.' type='number' required/>
                            <br />
                            <TextField label='Email' required/>
                            <br />
                            Message
                            <br />
                            <TextareaAutoSize rowsMax={4}
                                aria-label='maximum height'
                                placeholder='Enter message. Stretch message area for longer texts' required></TextareaAutoSize>
                            <br />
                            <Button type='submit' onClick={handleSubmitMessage} color='primary' variant='contained'>Submit</Button>
                        </form>
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
