import React from 'react'
import { TextField, Checkbox, Button} from '@material-ui/core';
import Title from './Title';
import githublogo from '../images/githublogo.png';
import linkedin from '../images/linkedin.png';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
//import { makeStyles } from '@material-ui/core/styles';
import TextareaAutoSize from '@material-ui/core/TextareaAutoSize';
import { useState } from 'react';


export default function Contact() {

    const [userData, setUserData]= useState({
        firstName:"",
        middleName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        message: ""
    })

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value });
    };

    //connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const {firstName, middleName, lastName, mobileNo, email, message} = userData;

        if(firstName && lastName && mobileNo && email && message) {
            const res = await fetch(
                "https://my-portfolio-caa21.firebaseio.com/userDataRecords.json", 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        middleName,
                        lastName,
                        mobileNo,
                        email,
                        message,
                    }),
                }    
            );
                if (res) {
                    setUserData({
                        firstName:"",
                        lastName: "",
                        mobileNo: "",
                        email: "",
                        message: ""
                    });
                    alert("Message sent");
                } else {
                    alert("Plz, fill in the fields");
                }
        } else {
            alert("Plz, fill in the fields");
        }
    };

/*
    const useStyles = makeStyles(theme => ({
        sentMsgStyle: {
            color: 'blue'
        }       
    }));


    const classes = useStyles();
*/
    const [clickMiddleName, setClickMiddleName] = React.useState(false);
//    const [submitMessage, setSubmitMessage] = React.useState(false);


    const MiddleName = () => {
        return( 
         <span> Middle Name (Optional) </span>
        );
    };
    const MiddleNameTextField = () => {
        return(
            <TextField label='Middle Name'
                name="middleName" 
                value={userData.middleName}
                onChange={postUserData}
            />
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
/*    const MessageSent = () => {
        return(
            <h2 className={classes.sentMsgStyle}>Please, fill in the field(s).</h2>
        )
    }
*/
    /*
    const handleSubmitMessage = () => {
        setSubmitMessage(true);

    } */

    const year = new Date().getFullYear();

    return (
        <section className='contact'>
            <Title title='Contact' />
                <div className='contact-center'>    
                    <div>
                        <h3> Let's Talk / Send Email </h3>
                        <p className='contact-links'>
                            <AddIcCallIcon />
                            <a href='tel:+353 (83) 141 7085'> +353 (83) 141 7085 </a> 
                        </p>
                        <p className='contact-links'> 
                            <EmailIcon />
                            <a href='mailto:oyeleyeoyedayo@gmail.com' > oyeleyeoyedayo@gmail.com </a>
                        </p>
                        <div className='links'>
                            <Button variant='contained' href='https://docs.google.com/document/d/1B9yvUT7O55_EVRIZqvGxOm2iv_FVWQpe0wBPJakVAKQ/export?format=pdf'>
                                Click to download resume/cv
                            </Button>
                        </div>
                    </div>
                
                    <div className='contact-message'>
                        <form className='contact-message-inner'>
                            {<SendMessage />}
                            <TextField label='First Name' required
                                name="firstName"
                                value={userData.firstName}
                                onChange={postUserData}
                            />
                            <Checkbox onClick={toggleMiddleName} color='primary'/> {clickMiddleName? <MiddleNameTextField /> : <MiddleName /> }
                            <br />
                            <TextField label='Last Name' required
                                name="lastName"
                                value={userData.lastName}
                                onChange={postUserData}
                            />
                            <TextField label='Mobile No.' type='number' required
                                name="mobileNo"
                                value={userData.mobileNo}
                                onChange={postUserData}
                            />
                            <br />
                            <TextField label='Email' required
                                name="email"
                                value={userData.email}
                                onChange={postUserData}
                            />
                            <br />
                            Message
                            <br />
                            <TextareaAutoSize rowsMax={4}
                                aria-label='maximum height'
                                placeholder='Enter message' required
                                name="message"
                                value={userData.message}
                                onChange={postUserData}
                            >
                            
                            </TextareaAutoSize>
                            <br />
                            <Button type='submit' onClick={submitData} color='primary' variant='contained'>Submit</Button>
                        </form>
                    </div>
                </div>
                <div className='copyright'>
                    <div className=''>
                        Copyright © {year} Oyeleye. All rights reserved
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
