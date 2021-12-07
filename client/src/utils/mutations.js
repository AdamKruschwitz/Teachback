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

export const CONNECT_TO_ROOM = gql`
mutation CONNECT_TO_ROOM($roomId: ID!) {
    connectToRoom(roomId: $roomId) {
        connectedUsers
    }
}
`
export const DISCONNECT_FROM_ROOM = gql`
mutation DISCONNECT_FROM_ROOM($roomId: ID!) {
    disconnectFromRoom(roomId: $roomId) {
        connectedUsers
    }
}
`

export const FINISH_STEP = gql`
mutation FINISH_STEP($roomId: ID!) {
    recordStepFinished(roomId: $roomId) {
        finishedUsers
    }
}
`

export const CANCEL_FINISHED_STEP = gql`
mutation CANCEL_FINISHED_STEP($roomId: ID!) {
    recordStepNotFinished(roomId: $roomId) {
        finishedUsers
    }
}
`