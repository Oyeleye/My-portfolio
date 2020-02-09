import React from 'react';
import './App.css';
import {Home} from './pages/Home';
import Error from './pages/Error';
import Motivation from './pages/Motivation';
import Projects from './pages/Projects';
import {Resume} from './pages/Resume';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return ( 
    <> 
   <Navbar />
   <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/projects/motivation' component={Resume}/>
      <Route exact path='/projects/motivation/:good'  component={Motivation}/>
      <Route component={Error} />
    </Switch>

    </>
  );
   
}

export default App;
