import {gql} from '@apollo/client'
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
    query GET_ROOM($roomId: ID!) {
        room(_id: $roomId) {
            currentStep
            tutorial {
                title
                author {
                    username
                }
                steps {
                    content
                    comments {
                        content
                        author {
                            username
                        }
                    }
                }
                category {
                    name
                }
                tags {
                  name
                }
            }
            owner {
                username
            }
        }
    }
`
