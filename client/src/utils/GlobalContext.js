import React, { createContext, useContext } from 'react';
import { useGlobalReducer } from './reducers';

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const initialState = {
    loginOpen: false,
    user: null,
}

export function GlobalProvider({ value = [], ...props }) {
    const [state, dispatch] = useGlobalReducer(initialState);
  
    return <Provider value={[state, dispatch]} {...props} />;
  };

export function useGlobalContext() {
    return useContext(GlobalContext);
}