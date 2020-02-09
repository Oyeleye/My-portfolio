import React from 'react';
//import './App.css';
import {Home} from './pages/Home';
import Error from './pages/Error';
import Motivation from './pages/Motivation';
import Projects from './pages/Projects';

function App() {
  return ( 
    <> <Home/>
       <Error/>
       <Motivation/>
       <Projects/>
    </>
  );
   
  
}

export default App;
