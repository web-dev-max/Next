import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser {
    getUser {
      id
      name
      email
      image
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

export const DELETE_USER = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) {
      message
    }
  }
`;