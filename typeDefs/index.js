import { gql } from "apollo-server-core";
import { quoteTypeDefs } from "./quoteTypeDefs.js";
import { userTypeDefs } from "./userTypeDefs.js";

export const typeDefs = gql`
  ${userTypeDefs}
  ${quoteTypeDefs}
`;
