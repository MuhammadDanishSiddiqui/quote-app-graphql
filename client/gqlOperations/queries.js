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

export const GET_MY_PROFILE = gql`
  query getMyProfile {
    user: myProfile {
      _id
      first_name
      last_name
      email
      # password: String!
      quotes {
        quote
        user {
          first_name
        }
      }
    }
  }
`;
