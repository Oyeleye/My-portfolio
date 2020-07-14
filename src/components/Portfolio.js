import React, { useEffect } from 'react'
import Title from './Title';
import { FaLaptop, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio () {
    useEffect(()=>{
        Aos.init({duration:2000});
     },[]);
     
    return (
        <section className='portfolio'>
            <Title title='portfolio' />
                <div className='portfolio-center' data-aos='fade-up'>
                        <article className='portfolio'>
                            <span><FaLaptop/></span>
                            <h6>FRONTEND</h6>
                            <p>HTML5</p>
                            <p>CSS3 | SASS</p>
                            <p>JavaScript</p>
                            <p>React | Redux</p>
                        </article>
                        <article className='portfolio'>
                            <span><FaServer/></span>
                            <h6>SERVER</h6>
                            <p></p>
                            <p></p>
                        </article>
                        <article className='portfolio'>
                            <span><FaDatabase/></span>
                            <h6>DATABASE</h6>
                            <p>PostgreSQL</p>
                            <p>MySQL</p>
                        </article>
                        <article className='portfolio'>
                            <span><FaCloud/></span>
                            <h6>DEPLOYMENT</h6>
                            <p>Firebase</p>
                            <p>Netlify</p>
                        </article> 
                </div>
            </section>
    )
}
