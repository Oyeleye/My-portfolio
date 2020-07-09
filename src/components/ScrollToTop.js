import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useWindowScroll } from 'react-use';

export default function ScrollToTop () {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        if (pageYOffset > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [pageYOffset]);
    
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth'});
    if (!visible) {
        return (false);
    }

    return (
        <div>
            <ArrowUpwardIcon className='scrollup' onClick={scrollToTop} />
        </div>
    )
}
