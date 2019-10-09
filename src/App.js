import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Welcome from './Welcome';
import Clock from './Clock';
function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Welcome} exact></Route>
      <Route path="/clock" component={Clock}></Route>
    </BrowserRouter>
    /* <div className="App">
      <header className="App-header">
        <div>
      {  { <img src={logo} className="App-logo" alt="logo" />
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
        </a>} }
        </div>
        <Welcome name='Lucas'></Welcome>
        <Clock></Clock>
      </header>
    </div> */
  );
  
}

export default App;
