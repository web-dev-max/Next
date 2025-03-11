import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser {
    getUser {
      name
      email
      isAdmin
    }
  }
`;

export const REMOVE_USER = gql`
  mutation LogoutUser {
    logoutUser {
      message
    }
  }
`;