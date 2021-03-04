import { UserLogged } from "../models/UserLogged";
import {
  USER_LOGIN,
  USER_LOGOUT,
  UserAuthenticationActionTypes,
} from "./types/userAuth";

export function userLogin(
  user: UserLogged
): UserAuthenticationActionTypes {
  return {
    type: USER_LOGIN,
    payload: user,
  };
}

export function userLogout(): UserAuthenticationActionTypes {
  return {
    type: USER_LOGOUT,
  };
}
