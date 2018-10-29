import { combineReducers, createStore } from 'redux';
import user from './reducers/userInfo';
import currentUser from './reducers/activeUser';
import location from './reducers/location';
import UserList from './reducers/userList';

const store = createStore(combineReducers({
    user: user,
    currentUser,
    geoLocation: location,
    UserList: UserList
}));

export default store