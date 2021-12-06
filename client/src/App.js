// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Login } from './components';
import { Home, CreateTutorial, Browse, Profile, Room } from './pages';
import { GlobalProvider, useGlobalContext } from './utils/GlobalContext';
import { ApolloClient, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (

    <div>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </div>

  );
}

export default App;
