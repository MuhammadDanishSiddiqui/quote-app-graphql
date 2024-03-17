import { userResolvers } from "./userResolvers.js";
import { quoteResolvers } from "./quoteResolvers.js";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...quoteResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...quoteResolvers.Mutation,
  },
  User: {
    ...userResolvers.User,
  },
  Quote: {
    ...quoteResolvers.Quote,
  },
};
