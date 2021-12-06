// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Login } from './components';
import { Home, CreateTutorial, Browse, Profile, Room } from './pages';
import { GlobalProvider, useGlobalContext } from './utils/GlobalContext';
import { auth } from './firebase'

function App() {
  const [user, setUser] = useState(null)
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      console.log(userAuth)
    } else {

    }
  })
  return unsubscribe
}, [])

  return (
    <div>
      <GlobalProvider>
        <Header />
        <Login />
        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/browse" element={ <Browse /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/room/:id" element={ <Room /> } />
          <Route path="/tutorial/create" element={ <CreateTutorial /> } />
          <Route path="*" element={ <Home /> } />
        </Routes>
        <Footer />
      </GlobalProvider>
    </div>

  );
}

export default App;
