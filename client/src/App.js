// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route,  } from 'react-router-dom';
import { Header, Footer, Login } from './components';
import { Home, CreateTutorial, Browse, Profile, Room } from './pages';
import { GlobalProvider } from './utils/GlobalContext';
import AuthService from './utils/auth';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

function App() {

  const terminatingLink = createHttpLink({
    uri: "http://localhost:3001/graphql",
    // headers: {
    //     Authentication: "Bearer " + AuthService.getToken()
    // }
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('refresh_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    links: authLink.concat(terminatingLink),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>

  );
}

export default App;
