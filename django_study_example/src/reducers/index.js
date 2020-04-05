import {combineReducers} from 'redux'
import ListReducer from './reducer_lists';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    lists: ListReducer,
    form: formReducer
});

export default rootReducer;