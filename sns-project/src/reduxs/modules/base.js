import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions';

const SET_HEADER_VISBILITY = 'base/SET_HEADER_VISIBILITY';    //헤더 렌더링 여부

export const setHeaderVisibility = createAction(SET_HEADER_VISBILITY);  //visiblie

const initialState = Map({
    header: Map({
        visible: true
    })
});

export default handleActions({
    [SET_HEADER_VISBILITY]: (state, action) => state.setIn(['header', 'visible'], action.payload)
}, initialState);