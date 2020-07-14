import React from 'react'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import {Link} from 'react-router-dom';

export default function BlackNavbar() {
    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior:'smooth'
      });

    return (
        <nav className='black-navbar'>
            <div className='black-nav-center'>
                <div className='black-nav-header' >             
                    <AddIcCallIcon className='black-nav-icon'/>
                </div>
                    <ul className='black-nav-links'>
                        <a href='tel:+353 (83) 141 7085'> +353 (83) 141 7085 </a>
                        <a onClick={scrollToBottom} title='Click to go to contact'>Contact</a>
                </ul>

            </div>               
        </nav>
    )
}
