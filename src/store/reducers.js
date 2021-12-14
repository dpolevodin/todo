import { combineReducers } from "redux";
import { affairsReducer as affairs } from "./affairs";

export const reducers = combineReducers({
  affairs,
});
