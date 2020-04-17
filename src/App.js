import React from 'react';
//import logo from './joseBautista.jpeg';
import './App.css';
import Frontpage from './components/Front Page/Frontpage.js'

import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';


const App = () => {

  return (
    <div className="App">
      
      <Frontpage/>
    </div>
  );
};

export default App;
