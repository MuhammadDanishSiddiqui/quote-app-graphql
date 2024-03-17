import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    maxlength: [15, "First name can not exceed 15 characters."],
    minlength: [3, "First name must be 3 characters long."],
  },
  last_name: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
    maxlength: [15, "Last name can not exceed 15 characters."],
    minlength: [3, "Last name must be 3 characters long."],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
    minlength: [8, "Password must contain atleast 8 characters"],
  },
});

export const User = new mongoose.model("User", userSchema);
