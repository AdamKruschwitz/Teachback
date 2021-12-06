import { gql } from "@apollo/client";

export const CREATE_TUTORIAL = gql`
  mutation createTutorial(
    $title: String!
    $author: String!
    $tags: [Tag]
    $category: String!
    $steps: [Step!]!
  ) {
    createTutorial(
      title: $title
      author: $author
      tags: $tags
      category: $category
      steps: $steps
    ) {
      _id
      title
      author
      tags
      category
      steps
    }
  }
`;

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
