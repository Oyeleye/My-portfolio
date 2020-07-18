
import React from 'react'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import LanguageMenuDropdown from '../components/LanguageMenuDropdown';

export default function BlackNavbar() {
    const useStyles = makeStyles(theme => ({
        navIcon: {
            color: '#fff',
            cursor: 'pointer',

  
        },
        contact: {
            cursor: 'pointer',
        },
        language: {
            marginLeft: '16rem',
            paddingBottom: '1rem',
            color:'#fff',
            cursor: 'pointer',
        }
    })); 
    const classes = useStyles();
    
    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior:'smooth'
      });
      const[isOpen, setIsOpen]= React.useState(false);  

      const toggleNavLinks = () =>{
          setIsOpen (isOpen =>!isOpen);
      } 

    return (
        <nav className='black-navbar'>
            <div className='black-nav-center'>
                <div className='black-nav-header' >             
                    <AddIcCallIcon className='black-nav-icon'/>
                </div>
                    <span className='black-nav-links'>
                        <a href='tel:+353 (83) 141 7085'> +353 (83) 141 7085 </a>
                        <a onClick={scrollToBottom} className={classes.contact} title='Click to go to contact'>Contact</a>
                    </span>
                    <div className='language-nav'>
                        
                        <a onClick={toggleNavLinks } className={classes.language} > 
                            En                           
                        </a>
                        <a>
                            <ArrowLeftIcon className={classes.navIcon} onClick={toggleNavLinks }/>
                        </a>
                    </div>

            </div>

            {isOpen? <LanguageMenuDropdown /> : '' }               
        </nav>
    )
}