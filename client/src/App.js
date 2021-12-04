// import logo from './logo.svg';
import './App.css';
import React from 'react';
<<<<<<< HEAD
import TutorialInput from './components/TutorialInput';


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
    <TutorialInput />
=======
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, CreateTutorial, Browse, Profile, Room, Category } from './pages';

function App() {
  return (
    <div>
      <Header />
      <Category />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/browse" element={ <Browse /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/room/:id" element={ <Room /> } />
        <Route path="/tutorial/create" element={ <CreateTutorial /> } />
        <Route path="*" element={ <Home /> } />
      </Routes>
      <Footer />
    </div>

>>>>>>> main
  );
}

export default App;
