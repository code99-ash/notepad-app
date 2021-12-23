import { combineReducers } from 'redux';
import noteReducer from './note';

const reducers = combineReducers({
    notes: noteReducer
})

export default reducers;