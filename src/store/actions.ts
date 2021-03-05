import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { UserLogged } from "../models/UserLogged";
import CoreApi from "../services/api";
import jwt_decode from "jwt-decode";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOGOUT,
  UserAuthenticationActionTypes,
} from "./types/userAuth";

function later(delay: number) {
  return new Promise(function(resolve) {
      setTimeout(resolve, delay);
  });
}
export function loginRequestAsync(username: string, password: string) : ThunkAction<void, {}, CoreApi, AnyAction> {
  return async (dispatch, getState, api) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    try {
      await later(1000);
      const response = await api.post<{token: string}>("http://localhost:8000/signin", {
        username,
        password,
      }); 
      const decoded = jwt_decode<UserLogged>(response.data.token);
      console.log(response);
      dispatch(loginSuccess(decoded));
    } catch (error) {
      dispatch(loginFailure(error));
    }

  }
} 

export function loginSuccess(
  user: UserLogged
): UserAuthenticationActionTypes {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}

export function loginFailure(
  error: string
): UserAuthenticationActionTypes {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

export function userLogout(): UserAuthenticationActionTypes {
  return {
    type: USER_LOGOUT,
  };
}
