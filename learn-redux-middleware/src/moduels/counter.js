import {createAction, handleActions} from 'redux-actions';

const INCREASE = createAction(INCREASE);
const DECREASE = createAction(DECREASE);

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = 0; 

const counter = handleActions (
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initialState
);

export default counter;
