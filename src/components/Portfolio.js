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
               info: ''
           },
           {
               icon: <FaDatabase/>,
               title: 'DATABASE',
               info: 'PostgreSQL',
               info1: 'MySQL'
           },
           {
               icon: <FaCloud/>,
               title: 'DEPLOYMENT',
               info: ''
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
