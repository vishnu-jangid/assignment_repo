import { combineReducers } from "redux";
import user from './main/reducer'

const appReducer = combineReducers({ user });

export default (state, action) => {
  return appReducer(state, action);
};