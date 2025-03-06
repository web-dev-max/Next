import { gql } from "@apollo/client";

export const LOGIN_AUTH = gql`
    mutation LoginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            user {
                id
                name
                email
                isAdmin
            }
            token
        }
    }
`;

export const REGISTER_USER = gql`
    mutation RegisterUser($name: String!, $email: String!, $password: String!) {
        registerUser(name: $name, email: $email, password: $password, isAdmin: false) {
            user {
                id
                name
                email
                isAdmin
            }
            token
        }
    }
`;