import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/index.js";

export const authenticate = async (req) => {
  const token = req.headers.authorization;
  if (token) {
    const { _id } = jwt.verify(token, JWT_SECRET);
    return { _id };
  }
  return null;
};
