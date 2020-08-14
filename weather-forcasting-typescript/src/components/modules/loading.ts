//import { createAction, handleActions } from "redux-actions";
import {createAction} from 'typesafe-actions'
import {handleActions} from 'redux-actions'

const START_LOADING = "loading/START_LOADING" as const;
const FINISH_LOADING = "loading/FINISH_LOADING" as const;

// export const startLoading = createAction(
//   START_LOADING,
//   (requestType: any) => requestType
// );
// export const finishLoading = createAction(
//   FINISH_LOADING,
//   (requestType: any) => requestType
// );

export const startLoading = createAction(
  START_LOADING,
  (requestType: any) => requestType
)

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType: any) => requestType
)

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action: any) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action: any) => ({
      ...state,
      [action.payload]: true,
    }),
  },
  initialState
);

export default loading;
