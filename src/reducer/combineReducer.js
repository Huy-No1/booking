import { combineReducers } from 'redux';
import AnouncementReducer from './anouncementReducer.js';
import FilmReducer from './filmReducer.js';
import UserReducer from './userReducer'
const Reducer = combineReducers({
    AnouncementReducer,
    FilmReducer,
    UserReducer

});

export default Reducer;