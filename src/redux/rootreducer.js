import { combineReducers } from 'redux';
import comments_reducer from './reducers/comments_reducer';
import post_reducer from './reducers/post_reducer';

export default combineReducers({
	posts: post_reducer,
	comments: comments_reducer,
});
