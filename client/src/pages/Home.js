import React from 'react';


import { Login, SearchBar, Category } from '../components';

const Home = function() {
    return(
        <div>
            <Category />
            <Login />
            <SearchBar />
        </div>
    )
}

export default Home;