import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js'
import Frontpage from './components/Front Page/Frontpage.js'
import BioPage from './components/Bio Page/BioPage.js'
import Languages from './components/Languages/Languages.js'
import Contact from './components/Contact Stuff/Contact.js'
 import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom';


const App = () => {

  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path = "/Frontpage" component = {Frontpage}/>
      <Route path= "/BioPage" component={BioPage}/>
      <Route path= "/Languages" component={Languages}/>
      <Route path= "/Contact" component={Contact}/>
      
    </div>
    </Router>
  );
};

export default App;
