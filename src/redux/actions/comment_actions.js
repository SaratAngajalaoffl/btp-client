import {
	SET_COMMENTS_LOADING,
	SET_COMMENTS,
	ADD_COMMENTS,
	COMMENTS_OPERATION_FAILURE,
} from '../action_types';
import { get_comments } from '../../utils/axios_funcs';

const get_comments_initiate = () => {
	return {
		type: SET_COMMENTS_LOADING,
	};
};

const set_comments = (comments) => {
	return {
		type: SET_COMMENTS,
		payload: comments,
	};
};

const add_comments = (comments) => {
	return {
		type: ADD_COMMENTS,
		payload: comments,
	};
};

const comments_failure = (error) => {
	return {
		type: COMMENTS_OPERATION_FAILURE,
		payload: error,
	};
};

const get_all_comments = () => {
	return async (dispatch) => {
		try {
			dispatch(get_comments_initiate());
			const data = await get_comments();
			dispatch(set_comments(data));
		} catch (err) {
			dispatch(comments_failure(err));
		}
	};
};

const add_to_comments = (comments) => {
	return async (dispatch) => {
		dispatch(add_comments(comments));
	};
};

export { get_all_comments, add_to_comments };
