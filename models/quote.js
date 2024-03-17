import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: [true, "Quote is required"],
    trim: true,
  },
  userId: {
    type: String,
    required: [true, "UserId is required"],
    trim: true,
  },
});

export const Quote = new mongoose.model("Quote", quoteSchema);
