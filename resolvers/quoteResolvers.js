import { quotes, users } from "../db.js";
import { Quote } from "../models/quote.js";
import { User } from "../models/user.js";

export const quoteResolvers = {
  Query: {
    quotes: async () => await Quote.find(),
  },
  Quote: {
    user: async (parent) => {
      const user = await User.findById(parent.userId);
      return user;
    },
  },
  Mutation: {
    createQuote: async (_, { quote }, { user }) => {
      try {
        if (!user?._id) {
          throw new Error("You must be logged in");
        }
        const userExits = await User.findById(user?._id);
        if (!userExits) {
          throw new Error("Invalid jwt or jwt has been expired");
        }
        const newQuoteCreate = new Quote({
          quote,
          userId: user?._id,
        });
        await newQuoteCreate.save();
        return newQuoteCreate;
      } catch (error) {
        console.error("Error in create quote resolver:", error);
        throw error;
      }
    },
    deleteQuote: async (_, { quoteId }, { user }) => {
      try {
        if (!user?._id) {
          throw new Error("You must be logged in");
        }
        const userExits = await User.findById(user?._id);
        if (!userExits) {
          throw new Error("Invalid jwt or jwt has been expired");
        }
        const quoteToDelete = await Quote.findById(quoteId);
        if (!quoteToDelete) {
          throw new Error("Quote not found");
        }
        if (quoteToDelete.userId != user._id) {
          throw new Error("You are not authenticated");
        }
        await Quote.findByIdAndDelete(quoteId);
        return quoteToDelete;
      } catch (error) {
        console.error("Error in create quote resolver:", error);
        throw error;
      }
    },
  },
};
