import {combineReducers} from 'redux';
import auth, { authSaga } from './auth'
import {all} from 'redux-saga'
import loading from './loading'

const rootReducer = combineReducers({
    auth,
    loading,
})

export function * rootSaga() {
    yield all (([authSaga()]))
}

export default rootReducer;
