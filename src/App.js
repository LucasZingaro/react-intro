import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';

function App() {
  return (
/*     React.createContext('div',{className:'App'},
      React.createContext('div',{className:'App-header'},
        React.createContext(Welcome,{name:'Render'})
    )) */
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Welcome name='Lucas'></Welcome>
        <Clock></Clock>
      </header>
      
    </div>
  );
  
}

export default App;
