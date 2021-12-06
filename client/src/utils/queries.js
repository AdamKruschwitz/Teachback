import gql from 'graphql'
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

