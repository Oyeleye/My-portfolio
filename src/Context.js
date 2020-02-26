import React, { Component } from 'react';
import items from './data';

const ProjectContext = React.createContext();
// <ProjectContext.Provider value={'hello'}

class ProjectProvider extends Component {
    state= {
        project:[],
        sortedProjects:[],
        featuredProjects:[],
        loading: true
    };
    //getData

    componentDidMount(){
        let projects = this.formatData(items);
        let featuredProjects = projects.filter(project => project.featured === true);
        this.setState({
            projects,featuredProjects,
            sortedProjects: projects,
            loading: false
        })
    }

    formatData(items){
       let tempItems = items.map(item =>{
           let id = item.sys.id
           let images = item.fields.images.map(image => image.fields.file.url);

           let project = {...item.fields,images,id}
           return project;
       });
              return tempItems
    
    }


    render() {
        return (
          < ProjectContext.Provider value={ {...this.state} }>
             {this.props.children}
          </ProjectContext.Provider>
        );
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer, ProjectContext };