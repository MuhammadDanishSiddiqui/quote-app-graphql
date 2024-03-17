import { gql } from "apollo-server-core";

export const userTypeDefs = gql`
  type User {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    # password: String!
    quotes: [Quote]
  }
  type Query {
    users: [User]
    getProfile(id: ID!): User
  }
  type Token {
    token: String
  }
  type Mutation {
    signUpUser(newUser: signUpUserInput!): User
    loginUser(user: loginUserInput!): Token
  }
  input signUpUserInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }
  input loginUserInput {
    email: String!
    password: String!
  }
`;
