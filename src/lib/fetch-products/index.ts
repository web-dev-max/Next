import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    getAllProducts {
      id
      name
      price
      description
      category
      image
      amount
    }
  }
`;