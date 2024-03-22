// import { quotes, users } from "../db.js";
import { User } from "../models/user.js";
import { Quote } from "../models/quote.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index.js";

export const userResolvers = {
  Query: {
    users: async () => await User.find(),
    getProfile: async (_, { id }) => {
      const user = await User.findById(id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
    myProfile: async (_, args, { user }) => {
      try {
        if (!user?._id) {
          throw new Error("You must be logged in");
        }
        const userExits = await User.findById(user?._id);
        if (!userExits) {
          throw new Error("Invalid jwt or jwt has been expired");
        }
        return userExits;
      } catch (error) {
        console.error("Error in getting my profile:", error);
        throw error;
      }
    },
  },
  User: {
    quotes: async (parent) => await Quote.find({ userId: parent._id }),
  },
  Mutation: {
    signUpUser: async (_, { newUser }) => {
      try {
        const existingUser = await User.findOne({ email: newUser.email });

        if (existingUser) {
          throw new Error("User already exists with that email");
        }

        const hashedPassword = await bcrypt.hash(newUser.password, 8);

        const newRegister = new User({
          ...newUser,
          password: hashedPassword,
        });

        await newRegister.save();

        return newRegister;
      } catch (error) {
        console.error("Error in signUpUser resolver:", error);
        throw error;
      }
    },
    loginUser: async (_, { user }) => {
      const isUserExit = await User.findOne({ email: user.email });
      if (!isUserExit) {
        throw new Error("Invalid credentials");
      }
      const isMatch = await bcrypt.hash(user.password, isUserExit.password);
      if (!isMatch) {
        throw new Error("Invalid credentials");
      }
      const token = jwt.sign({ _id: isUserExit._id }, JWT_SECRET);
      return { token };
    },
  },
};
