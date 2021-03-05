import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOGOUT,
  UserAuthenticationActionTypes,
  UserAuthenticationState,
} from "./types/userAuth";

const initialState: UserAuthenticationState = {
  currentUser: undefined,
  loading: false,
  error: "",
};

export function reducerUserAuth(
  state = initialState,
  action: UserAuthenticationActionTypes
): UserAuthenticationState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        currentUser: state.currentUser,
        loading: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        currentUser: action.payload,
        loading: false,
        error: ""
      };
    case LOGIN_FAILURE:
      return {
        currentUser: undefined,
        loading: false,
        error: action.error
      };
    case USER_LOGOUT:
      return {
        currentUser: undefined,
        loading: false,
        error: ""
      };
    default:
      return state;
  }
}
