import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components'


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/browse" />
        <Route path="/profile" />
        <Route path="/register" />
        <Route path="/room/:id" />
        <Route path="/tutorial/create" />
        <Route path="*" />
      </Routes>
    </div>
  );
}

export default App;
