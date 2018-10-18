import { combineReducers, createStore } from 'redux';
import user from './reducers/userInfo';
import currentUser  from './reducers/activeUser'

const store = createStore(combineReducers({
    user: user,
    currentUser
}))

export default store