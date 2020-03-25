import {createAction, handleActions} from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

//요청 액션을 위한 payload설정

export const startLoading = createAction(
    START_LOADING,
    requestType => requestType,
);

export const finishLoading = createACtion(
    FINISH_LOADING,
    requestType => requestType,
);

const initializeState = {};

const loading = handleActions (
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        [FINISH_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false
        }),
    },
    initializeState,
);

export default loading;
