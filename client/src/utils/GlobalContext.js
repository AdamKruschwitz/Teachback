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
      // console.log(auth);
      // console.log(auth);
      //   if(auth.currentUser) {
          
      //     const user = {
      //       username: auth.currentUser.email,
      //       email: auth.currentUser.email,
      //       image: '',
      //       // Change to use User.uid instead of github token
      //       // https://firebase.google.com/docs/reference/js/v8/firebase.User#uid
      //       token: auth.currentUser.refreshToken
      //   }
      //   dispatch({type: PASSWORD_LOGIN, payload: user });
      //   }
        const unsubscribe = auth.onAuthStateChanged(result => {
            if (result != null) {

              // console.log(result);
              const token = result.refreshToken;
              const user = {
                  username: result.email,
                  email: result.email,
                  image: '',
                  // Change to use User.uid instead of github token
                  // https://firebase.google.com/docs/reference/js/v8/firebase.User#uid
                  token: token
              }
              console.log(user);
              dispatch({type: PASSWORD_LOGIN, payload: user });
            }
        })
    
        return unsubscribe
      }, [dispatch])
    return <Provider value={[state, dispatch]} {...props} />;
  };

export function useGlobalContext() {
    return useContext(GlobalContext);
}