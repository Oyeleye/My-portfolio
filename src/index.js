import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
//import './index.css';
import App from './App';
import { ProjectProvider } from './Context';

ReactDOM.render(
  <ProjectProvider>
     <Router>
       <App /> 
     </Router>
  </ProjectProvider>,
document.getElementById('root')
);

