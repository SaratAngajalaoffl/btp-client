import {
	SET_POSTS_LOADING,
	SET_POSTS,
	ADD_POSTS,
	POSTS_OPERATION_FAILURE,
} from '../action_types';
import { get_posts } from '../../utils/axios_funcs';

const get_posts_initiate = () => {
	return {
		type: SET_POSTS_LOADING,
	};
};

const set_posts = (posts) => {
	return {
		type: SET_POSTS,
		payload: posts,
	};
};

const add_posts = (posts) => {
	return {
		type: ADD_POSTS,
		payload: posts,
	};
};

const posts_failure = (error) => {
	return {
		type: POSTS_OPERATION_FAILURE,
		payload: error,
	};
};

const get_all_posts = () => {
	return async (dispatch) => {
		try {
			dispatch(get_posts_initiate());
			const data = await get_posts();
			dispatch(set_posts(data));
		} catch (err) {
			dispatch(posts_failure(err));
		}
	};
};

const add_to_posts = (posts) => {
	return async (dispatch) => {
		dispatch(add_posts(posts));
	};
};

export { get_all_posts, add_to_posts };
