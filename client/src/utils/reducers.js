import { TOGGLE_LOGIN_DIALOG, GITHUB_LOGIN, GOOGLE_LOGIN, PASSWORD_LOGIN, USER_LOGOUT, UPDATE_EMAIL, UPDATE_PASSWORD } from './actions';
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

        case PASSWORD_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                user: null
            }
        case UPDATE_EMAIL:
            return {
                ...state,
                user: action.payload
            }
        case UPDATE_PASSWORD:
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