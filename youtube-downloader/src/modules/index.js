import { combineReducers } from "redux";
import loading from "./loading";
import search, { searchSaga } from "./search";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  search,
  loading,
});

export function* rootSaga() {
  yield all([searchSaga()]);
}

export default rootReducer;
