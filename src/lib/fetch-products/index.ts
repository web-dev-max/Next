import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    getAllProducts {
      id
      name
      price
      description
      image
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProductById($id: ID!) {
    getProductById(id: $id) {
      id
      name
      price
      description
      image
      amount
    }
  }
`;