const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input SearchInput {
        title: String
        tags: [Tag!]
        category: Category
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
        tutorials(SearchInput): [Tutorial]
        tutorial(_id: ID!): Tutorial
        room(_id: ID!): Room
    }

    type Mutations {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    createTutorial(title: String!, author: String!, category: [ID]!, steps: [Step]!): Tutorial
    updateTutorial(_id: ID!, quantity: Int!): Tutorial
    addComment:
    deleteComment: 
    addRating: 
    deleteRating: 

    }




`
module.exports = typeDefs;