import {combineReducers} from 'redux';
import postReducer from './PostReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
  posts: postReducer,
  users: UsersReducer
});
