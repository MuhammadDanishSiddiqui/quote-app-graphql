import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation signUpUser($newUser: signUpUserInput!) {
    user: signUpUser(newUser: $newUser) {
      first_name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($user: loginUserInput!) {
    user: loginUser(user: $user) {
      token
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation createQuote($quote: String!) {
    quote: createQuote(quote: $quote) {
      _id
      quote
      userId
    }
  }
`;
