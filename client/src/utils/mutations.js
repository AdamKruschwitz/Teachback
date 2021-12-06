import {gql} from '@apollo/client';

export const CREATE_ROOM = gql`
mutation CREATE_ROOM($tutorialId: ID!, $token: String!) {
    createRoom(tutorialId: $tutorialId, token: $token) {
        _id
        owner {
            username
        }
        tutorial {
            title
            author {
                username
                image
            }
            steps {
                content,
                comments {
                    content
                    author {
                        username
                    }
                }
            }
        }
    }
}
`