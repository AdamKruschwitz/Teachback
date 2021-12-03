import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components'


function App() {
  return (
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
