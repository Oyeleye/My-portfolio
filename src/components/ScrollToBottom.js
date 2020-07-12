import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useWindowScroll } from 'react-use';



export default function ScrollToBottom() {

    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior:'smooth'
     });

    return (
        <div className='scroll-to-bottom' onClick={scrollToBottom}>
            <KeyboardArrowDownIcon className=' icon' />
        </div>
    )
}
