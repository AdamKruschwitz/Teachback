import { TOGGLE_LOGIN_DIALOG, GITHUB_LOGIN } from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch(action.type) {
        case TOGGLE_LOGIN_DIALOG:
            return {
                ...state,
                loginOpen: !state.loginOpen
            }
            break;
        case GITHUB_LOGIN: 
            return {
                ...state,
                user: action.payload
            }
        default: 
            return state;
            break;
    }
}

export function useGlobalReducer(initialState) {
    return useReducer(reducer, initialState);
}