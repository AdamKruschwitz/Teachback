import { gql } from '@apollo/client';

export const QUERY_TUTORIALS = gql`
  query getTutorials {
    tutorials {
        _id
        title
        author
        tags
        category
        steps 
    }
  }
`;