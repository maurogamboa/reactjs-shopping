import { createStore, applyMiddleware } from "redux"
import { reducerUserAuth } from "./reducers"
import thunk from "redux-thunk";
import api from "../services/api"

const apiInstance = new api();

export default createStore(
  reducerUserAuth, 
  applyMiddleware(thunk.withExtraArgument(apiInstance))
);