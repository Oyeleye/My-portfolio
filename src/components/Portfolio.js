import React, { Component } from 'react'
import Title from './Title';
import { FaLaptop, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

export default class Portfolio extends Component {
   state= {
       portfolio: [
           {
               icon: <FaLaptop/>,
               title: 'FRONTEND',
               info: 'HTML5',
               info1: 'CSS3 | SASS',
               info2: 'JavaScript',
               info3: 'React | Redux'
           },
           {
               icon: <FaServer/>,
               title: 'SERVER',
               info: 'NodeJS',
               info1: 'Express'
           },
           {
               icon: <FaDatabase/>,
               title: 'DATABASE',
               info: 'PostgreSQL',
               info1: 'MySQL',
               info2: 'MongoDB'
           },
           {
               icon: <FaCloud/>,
               title: 'DEPLOYMENT',
               info: 'Firebase',
               info1: 'AWS',
               info2: 'Netlify'
           },
       ]
   }
    render() {
        return (
            <section className='portfolio'>
               <Title title='portfolio' />
                 <div className='portfolio-center'>
                     {this.state.portfolio.map((item, index)=> {
                         return (
                             <article key={index} className='portfolio'>
                                 <span>{item.icon}</span>
                                 <h6>{item.title}</h6>
                                 <p>{item.info}</p>
                                 <p>{item.info1}</p>
                                 <p>{item.info2}</p>
                                 <p>{item.info3}</p>
                             </article> 
                         );
                     })}
                 </div>
            </section>
        );
    }
}
