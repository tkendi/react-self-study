import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as searchAPI from "../lib/api/search";
import { takeLatest } from "redux-saga/effects";

const [SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE] = createRequestActionTypes(
  "search/SEARCH"
);

export const findSearch = createAction(SEARCH, ({ text }) => text);

const findSearchSaga = createRequestSaga(SEARCH, searchAPI.search);
export function* searchSaga() {
  yield takeLatest(SEARCH, findSearchSaga);
}

const initialState = {
  data: {},
  error: "",
  text: "",
};

const search = handleActions(
  {
    [SEARCH_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      data,
    }),
    [SEARCH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default search;
