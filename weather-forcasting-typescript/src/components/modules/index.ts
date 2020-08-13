import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import weather, { weatherSaga } from "./weather";

const rootReducer = combineReducers({
  loading,
  weather,
});

export function* rootSaga() {
  yield all([weatherSaga()]);
}

export default rootReducer;
