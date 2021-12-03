// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './components/SearchBar/Search'

import { Header } from './components'
import Footer from './components/Footer/index'


function App() {
  return (
    
    <div>
    <Header />
    <Search />
    <Footer />
    </div>

  );
}

export default App;
