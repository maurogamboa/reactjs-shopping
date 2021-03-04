import { UserLogged } from '../../models/UserLogged';


export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
interface UserLoginAction {
  type: typeof USER_LOGIN
  payload: UserLogged
}

interface UserLogoutAction {
  type: typeof USER_LOGOUT
}

export interface UserAuthenticationState {
  currentUser: UserLogged | undefined
}

export type UserAuthenticationActionTypes = UserLoginAction | UserLogoutAction;