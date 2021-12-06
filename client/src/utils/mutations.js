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
