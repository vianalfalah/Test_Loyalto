import { combineReducers, createStore, applyMiddleware } from "redux";
import { getGenres } from "../reducer/genres";
import { logger, promise } from "./middleware";

const reducer = combineReducers({
  getGenres,
});
const store = createStore(reducer, applyMiddleware(logger, promise));

export default store;
