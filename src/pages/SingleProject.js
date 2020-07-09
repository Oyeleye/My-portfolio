import React, { Component } from 'react';
import defaultBcg from '../images/defaultBcg.jpeg';
import Front from '../components/Front';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../Context';


export default class SingleProjects extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType=ProjectContext;
       //componentDidMount(){}

    render() {
        const {getProject} = this.context;
        const project = getProject(this.state.slug);
        if(!project) {
            return (<div className='error'>
                      <h3>no such project could be found...</h3>
                      <Link to='/projects' className='btn-primary'>
                       back to projects  
                      </Link>
                   </div>
            );
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = project
        return (
            <Front front='projectsFront'>  
            <Banner title={`${name} project`}>
                <Link to='/projects' className='btn-primary'>
                    back to projects
                </Link> 
            </Banner>
            </Front>
        );
    }
}
