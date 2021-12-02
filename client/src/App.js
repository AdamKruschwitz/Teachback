import logo from './logo.svg';
import './App.css';
import React from 'react';
import { auth } from './firebase'
import Login from './components/Login'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <Router>
        {/* <Login /> */}
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
      </header>
      </Router>
    </div>
  );
  }

export default App;
