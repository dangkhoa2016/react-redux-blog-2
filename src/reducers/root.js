import post from './post';
import posts from './posts';
import static_data from './static_data';
import { combineReducers } from "redux";

export default combineReducers({
  post,
  posts,
  static_data
});