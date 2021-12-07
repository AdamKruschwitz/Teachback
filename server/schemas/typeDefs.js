const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input SearchInput {
        title: String
        tagIDs: [ID!]
        categoryIDs: ID
    }

    input TutorialInput {
        _id: ID
        title: String!
        tagIDs: [ID!]
        categoryIDs: ID!
        stepIDs: [ID!]!
        searchable: Boolean
    }

    input UserInput {
        username: String!
        email: String!
        password: String!
        token: String!
        uid: String!
    }

    type User {
        username: String!
        email: String!
        image: String
        token: String!
        uid: String!
    }

    type Tutorial {
        _id: ID!
        title: String!
        author: User!
        tags: [Tag]
        category: String!
        steps: [Step!]!
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
        connectedUsers: [User!]!
        finishedUsers: [User!]!
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

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user(token: String!): User 
        users: [User]
        categories: [Category]
        tutorials(input: SearchInput): [Tutorial]
        tutorial(_id: ID!): Tutorial
        room(_id: ID!): Room
    }

    type Mutation {
        addUser(input: UserInput): Auth
        createTutorial(input: TutorialInput!): Tutorial
        updateTutorial(input: TutorialInput!): Tutorial
        addComment(stepId: ID!, content: String!): Step
        deleteComment(commentId: ID!): Step
        addRating(tutorialId: ID!, value: Int!): Tutorial
        deleteRating(ratingId: ID!): Tutorial
        createRoom(tutorialId: ID!, token: String!): Room
        connectToRoom(roomId: ID!): Room
        disconnectFromRoom(roomId: ID!): Room
        recordStepFinished(roomId: ID!): Room
        recordStepNotFinished(roomId: ID!): Room
        progressRoom(roomId: ID!): Room
    }

`
module.exports = typeDefs;