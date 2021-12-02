const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input SearchInput {
        title: String
        tags: [Tag!]
        category: Category
    }

    input LoginInput {
        email: String!
        password: String!
    }

    input TutorialInput {
        _id: ID
        title: String!
        tags: [Tag!]
        category: Category!
        steps: [Step!]!
        searchable: Boolean
    }

    input UserInput {
        username: String!
        email: String!
        password: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        image: String!
    }

    type Tutorial {
        _id: ID!
        title: String!
        author: String!
        tags: [Tag]
        category: String!
        steps: [Steps!]!
        ratings: [Rating!]
        searchable: Boolean    
    }

    type Category {
        _id: ID!
        name: String!
    }

    type Tag {
        _id: ID!
        name: String!
        frequency: Int
    }

    type Room {
        _id: ID!
        owner: User!
        tutorial: Tutorial!
        currentStep: Step!
    }

    type Step {
        content: String!
        comments: [Comment!]!
    }

    type Rating {
        _id: ID!
        user: User!
        value: Int!
    }

    type Comment {
        _id: ID!
        author: User!
        content: String!
    }

    type Query {
        user: User 
        categories: [Category]
        tutorials(input: SearchInput): [Tutorial]
        tutorial(_id: ID!): Tutorial
        room(_id: ID!): Room
    }

    type Mutations {
    addUser(input: UserInput): Auth
    login(input: LoginInput!): Auth
    createTutorial(input: TutorialInput!): Tutorial
    updateTutorial(input: TutorialInput!): Tutorial
    addComment(stepId: ID!, content: String!): Step
    deleteComment(commentId: ID!): Step
    addRating:(tutorialId: ID!, value: Int!): Tutorial
    deleteRating:(ratingId: ID!): Tutorial
    }

`
module.exports = typeDefs;