import mongoose from "mongoose";
import { DB } from "../config/index.js";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to data base");
  })
  .catch((err) => {
    console.log("Not connected to data base", err);
  });
