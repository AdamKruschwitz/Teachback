import { TOGGLE_LOGIN_DIALOG, GITHUB_LOGIN, GOOGLE_LOGIN } from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch(action.type) {
        case TOGGLE_LOGIN_DIALOG:
            return {
                ...state,
                loginOpen: !state.loginOpen
            }

        case GITHUB_LOGIN: 
            return {
                ...state,
                user: action.payload
            }

        case GOOGLE_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        
        default: 
            return state;
    }
}

export function useGlobalReducer(initialState) {
    return useReducer(reducer, initialState);
}