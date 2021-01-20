import { combineReducers, createStore, applyMiddleware } from "redux";
import { getGenres } from "../action/genres";
const reducer = combineReducers({
  getGenres,
});
const store = createStore(reducer, applyMiddleware());

export default store;
