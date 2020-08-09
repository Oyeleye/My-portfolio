
import React from 'react'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import { makeStyles } from '@material-ui/core/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import LanguageMenuDropdown from '../components/LanguageMenuDropdown';
import Clock from './Clock.js';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Link } from 'react-router-dom';

export default function BlackNavbar() {
    const useStyles = makeStyles(theme => ({
        language: {
            color: '#fff',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
        },
        contact: {
            cursor: 'pointer',
        },
        navIcon: {
            color:'#fff',
            cursor: 'pointer',
            marginBottom: '-0.2rem',
        },
        clockIcon: {
            marginLeft: '28rem',
            top: 72,
            color:'#f7f7f7',
            cursor: 'pointer',
            position: 'fixed',
        },
    })); 
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState(false);
    const [clockOpen, setClockOpen] = React.useState(false);


    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior:'smooth'
      });

    const showLanguage = () => {
        setIsOpen (true)
    }
    const hideLanguage = () => {
        setIsOpen (false)
    }
    const toggleClock = () =>{
        setClockOpen (clockOpen => !clockOpen);
    } 

    return (
        <nav className='black-navbar'>
            <div className='black-nav-center'>
                <div className='black-nav-header' >             
                    <AddIcCallIcon className='black-nav-icon'/>
                </div>
                    <span className='black-nav-links'>
                        <a href='tel:+353 (83) 141 7085'> +353 (83) 141 7085 </a>
                        <Link onClick={scrollToBottom} className={classes.contact} title='Click to go to contact'>Contact</Link>
                    </span>
                    <span className='language-nav' >
                        <Link  className={classes.language} onMouseOver={showLanguage} onMouseOut={hideLanguage}> 
                            En                           
                        </Link>
                        <Link>
                            <ArrowLeftIcon className={classes.navIcon} onMouseOver={showLanguage} onMouseOut={hideLanguage}/>
                        </Link>

                    </span>
                    <span className='hover-clock-icon'>
                        <AccessTimeIcon className={classes.clockIcon} onClick={toggleClock}/>
                    </span>
                    <span>
                        {clockOpen? <Clock /> : '' }
                    </span>
            </div>

            {isOpen? <LanguageMenuDropdown onMouseOver={showLanguage} onMouseOut={hideLanguage}/> : '' }               
        </nav>
    )
}