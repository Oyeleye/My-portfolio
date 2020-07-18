import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

export default function LanguageMenuDropdown() {
  const[isOpen, setIsOpen]= React.useState(false);  

  const useStyles = makeStyles(theme => ({
    navLanguage: {
        color: '#fff',
        cursor: 'pointer',
    }
  })); 
  const classes = useStyles();
    const toggleNavLinks = () =>{
        setIsOpen (isOpen =>!isOpen);
    } 
  
      return (
          <>
          <nav className='languagenavbar' >
              <div className='languagenav-center'>
                  <ul className='languagenav-links languageshow-nav'>
                      <li>
                        <a to='./projects' className={classes.navLanguage}>En</a>
                      </li>
                      <li>
                        <a to='./motivation' className={classes.navLanguage}>De</a>
                      </li>
                      <li>
                        <a to='./resume' className={classes.navLanguage}>Fi</a>
                      </li>
                  </ul>
               </div>   
          </nav>
          </>
          
      )
  }
  