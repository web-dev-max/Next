import { Maybe } from "yup";

export interface IUser {
   name?: Maybe<string | undefined>;
   email: string;
   password: string;
}