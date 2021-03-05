import { ThunkAction } from "redux-thunk";
import { UserLogged } from "../../models/UserLogged";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const USER_LOGOUT = "USER_LOGOUT";

interface UserLoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface UserLoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: UserLogged;
}

interface UserLogoutFailureAction {
  type: typeof LOGIN_FAILURE;
  error: string;
}

interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}

export interface UserAuthenticationState {
  currentUser: UserLogged | undefined;
  loading: boolean;
  error: string;
}

export type UserAuthenticationActionTypes =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLogoutFailureAction
  | UserLogoutAction
  | any
