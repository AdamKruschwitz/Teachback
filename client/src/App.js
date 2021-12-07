// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route,  } from 'react-router-dom';
import { Header, Footer, Login } from './components';
import { Home, CreateTutorial, Browse, Profile, Room } from './pages';
import { GlobalProvider } from './utils/GlobalContext';
import AuthService from './utils/auth';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// DEBUG
import { GET_ROOM } from './utils/queries'

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
    uri: '/graphql',
    cache: new InMemoryCache()
  });

  // client.query({
  //   query: gql`
  //   query test($roomId: ID!) {
  //     room(id: $roomId) {
  //       tutorial {
  //         title
  //       }
  //       currentStep
  //     }
  //   }
  //   `,
  //   variables: {
  //     roomId: "61af16a4af28057e9b70c7f3"
  //   }
  // }).then(result => console.log("this is the query result", result))
  // .catch(error => console.log("this is the query error", error));

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
