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

export const GET_USER = gql`
    query getUser {
        user {
            username
            email
            image
            token
        }
    }
`;


export const GET_CURRENT_STEP = gql`
    query GET_CURRENT_STEP($id: ID!) {
        room(_id: $id) {
            currentStep {
                comments {
                    content
                    author {
                        username
                    }
                }
            content
            }
        }
    }
`

export const GET_ROOM = gql`
    query GET_ROOM($id: ID!) {
        room(_id: $id) {
            currentStep {
                content
                comments {
                    content
                    author {
                        username
                    }
                }
            }
            tutorial {
                title
                author {
                    username
                }
                categories
                tags
            }
            owner {
                username
            }
        }
    }
`
