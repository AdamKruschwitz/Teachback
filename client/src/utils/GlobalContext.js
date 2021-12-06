import React, { createContext, useContext, useEffect } from 'react';
import { useGlobalReducer } from './reducers';
import { auth } from '../firebase'
import { PASSWORD_LOGIN } from './actions';

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const initialState = {
    loginOpen: false,
    user: null,
}

export function GlobalProvider({ value = [], ...props }) {
    const [state, dispatch] = useGlobalReducer(initialState);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(result => {
            if (result != null) {
                const token = result.refreshToken;
              const user = {
                  username: result.email,
                  email: result.email,
                  image: '',
                  toke: token
              }
              dispatch({type: PASSWORD_LOGIN, payload: user });
            }
        })
    
        return unsubscribe
      }, [])
    return <Provider value={[state, dispatch]} {...props} />;
  };

export function useGlobalContext() {
    return useContext(GlobalContext);
}