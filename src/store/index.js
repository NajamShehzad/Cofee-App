import { combineReducers, createStore } from 'redux';
import user from './reducers/userInfo';

const store = createStore(combineReducers({
    user: user
}))

export default store