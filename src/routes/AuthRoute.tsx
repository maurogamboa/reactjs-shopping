import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { UserLogged } from "../models/UserLogged";
import { UserAuthenticationState } from "../store/types/userAuth";


export interface RouteParams {
  path: string,
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}


/**
 * Route wrapper for private routes that needs auth
 * @param params 
 */
export default function AuthRoute(params: RouteParams) {
  const user = useSelector<UserAuthenticationState, UserLogged | undefined>(
    (state) => state.currentUser,
    );
  return user ?  <Route {...params} /> : <Redirect to="/" /> ;
}