import { TOGGLE_LOGIN_DIALOG } from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch(action.type) {
        case TOGGLE_LOGIN_DIALOG:
            return {
                ...state,
                loginOpen: !state.loginOpen
            }
            break;
        default: 
            return state;
            break;
    }
}

export function useGlobalReducer(initialState) {
    return useReducer(reducer, initialState);
}