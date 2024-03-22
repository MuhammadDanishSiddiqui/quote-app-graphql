import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    quotes {
      quote
      user {
        first_name
        last_name
      }
    }
  }
`;
