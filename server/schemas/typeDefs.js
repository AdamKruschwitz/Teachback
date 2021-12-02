const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
        steps: [Steps]!
        ratings: [Rating]!
        searchable: Boolean    
    }

    type Category {
        _id: ID!
        name: String!
    }

    type Tag {
        _id: ID!
        name: String!
    }

    type Room {
        _id: ID!
        owner: 
        tutorial: 
        currentStep: 
    }

    type Step {
        content: String!
        comments: [Comment]
    }

    type Rating {
        _id: ID!
        user: [ID]
        value: Int
    }

    type Comment {
        _id: ID!
        author: 
        content: String!;
    }

   




`
module.exports = typeDefs;