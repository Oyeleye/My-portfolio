import React from 'react';
import './App.css';

import Home from './pages/Home';
import Error from './pages/Error';
import Motivation from './pages/Motivation';
import { Projects } from './pages/Projects';
import {Resume} from './pages/Resume';
import SingleProject from './pages/SingleProject';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return ( 
    <> 
   <Navbar />
   <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/resume' component={Resume}/>
      <Route exact path='/motivation'  component={Motivation}/>
      <Route exact path='/projects/:slug'  component={SingleProject} />
      <Route component={Error} />
    </Switch>

    </>
  );
   
}

export default App;
