import { createContext } from 'react';

const defaultContext = {
    loginOpen: false
}

export const GlobalContext = createContext(defaultContext);

