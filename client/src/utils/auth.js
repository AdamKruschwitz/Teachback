import { ApolloLink, HttpLink, from } from '@apollo/client';

// Instaed of this, use localstorage when the user is logged in. That way we can access the data outside of a react object
import { useGlobalContext } from './GlobalContext';

const [state, _dispatch] = useGlobalContext();

const terminatingLink = new HttpLink({
    headers: {
        authUID: state.user.uid
    }
});

const links = from([ terminatingLink ]);

export default links;