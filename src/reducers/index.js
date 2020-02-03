import { combineReducers } from 'redux';
import comicsReducer from './comics';
import charactersReducer from './characters'
import creatorsReducer from './creators'
import eventsReducer from './events'
import filtersReducer from './filters'

export default combineReducers({
    comics: comicsReducer,
    characters: charactersReducer,
    creators: creatorsReducer,
    events: eventsReducer,
    filters: filtersReducer
});