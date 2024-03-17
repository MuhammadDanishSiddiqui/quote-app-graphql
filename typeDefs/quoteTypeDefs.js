import { gql } from "apollo-server-core";

export const quoteTypeDefs = gql`
  type Quote {
    _id: ID!
    quote: String!
    userId: ID!
    user: User
  }
  type Query {
    quotes: [Quote]
  }
  type Mutation {
    createQuote(quote: String!): Quote
    deleteQuote(quoteId: String!): Quote
  }
`;
