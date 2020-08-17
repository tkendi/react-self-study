import { combineReducers } from "redux";
import loading from "./loading";
import search, { searching } from "./search";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  search,
  loading,
});

export function* rootSaga() {
  yield all([searching()]);
}

export default rootReducer;
