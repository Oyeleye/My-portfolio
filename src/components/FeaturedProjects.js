import React, { Component } from 'react'
import {ProjectContext} from '../Context';
import Loading from './Loading';
import Project from './Project';
import Title from './Title';

export default class FeaturedProjects extends Component {
   static contextType = ProjectContext;
       render() {
           let { loading, featuredProjects : projects } = this.context;
           projects = projects.map(project => {
              return <Project key={project.id} project={project} />
           })
                 return (
                   <>
                      <section className='featured-projects'>
                         <Title title='featured-projects' />
                         <div className='featured-projects-center'>
                               {loading ? <Loading /> : projects}
                         </div>
                      </section>
                   </>
                 );   
       }
}
