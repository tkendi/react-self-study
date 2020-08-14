import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as weatherAPI from "../../lib/api/weather";
import { takeLatest } from "redux-saga/effects";

export const [
  WEATHER,
  WEATHER_SUCCESS,
  WEATHER_FAILURE,
] = createRequestActionTypes("weather/WEATHER");

export const weatherRead = createAction(
  WEATHER,
  ({ nx, ny }: weatherAPI.Props) => ({
    nx,
    ny,
  })
);

const readWeatherSaga = createRequestSaga(WEATHER, weatherAPI.weather);
export function* weatherSaga() {
  yield takeLatest(WEATHER, readWeatherSaga);
}

interface weatherState {
  weather: {
    nx: any;
    ny: any;
  };
  data: any;
  error: any;
}

const initialState: weatherState = {
  weather: {
    nx: 0,
    ny: 0,
  },
  data: {},
  error: null,
};

const weather = handleActions(
  {
    [WEATHER_SUCCESS]: (state: any, { payload: data }) => ({
      ...state,
      data,
    }),
    [WEATHER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default weather;

export interface DefaultRootState {}
