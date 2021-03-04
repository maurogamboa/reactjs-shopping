import {
  USER_LOGIN,
  USER_LOGOUT,
  UserAuthenticationActionTypes,
  UserAuthenticationState,
} from "./types/userAuth";

const initialState: UserAuthenticationState = {
  currentUser: undefined,
};

export function reducerUserAuth(
  state = initialState,
  action: UserAuthenticationActionTypes
): UserAuthenticationState {
  switch (action.type) {
    case USER_LOGIN:
      return {
        currentUser: action.payload,
      };
    case USER_LOGOUT:
      return {
        currentUser: undefined,
      };
    default:
      return state;
  }
}
