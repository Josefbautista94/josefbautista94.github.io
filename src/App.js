import React from 'react';
import logo from './joseBautista.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>My name is Jose and im going to master react! </code> 
        </p>
        <a
          className="App-link"
          href="https://github.com/Josefbautista94"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out!
        </a>
      </header>
    </div>
  );
}

export default App;
