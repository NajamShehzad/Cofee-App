import { combineReducers, createStore } from 'redux';
import user from './reducers/userInfo';
import currentUser  from './reducers/activeUser';
import location from './reducers/location';

const store = createStore(combineReducers({
    user: user,
    currentUser,
    geoLocation:location
}))

export default store