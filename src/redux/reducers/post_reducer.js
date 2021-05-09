import {
	SET_POSTS_LOADING,
	SET_POSTS,
	ADD_POSTS,
	POSTS_OPERATION_FAILURE,
} from '../action_types';

const InitialState = {
	loading: false,
	posts: [],
	error: '',
};

const post_reducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_POSTS_LOADING:
			return {
				loading: true,
				posts: [],
				error: '',
			};

		case SET_POSTS:
			return {
				...state,
				loading: false,
				posts: action.payload,
			};

		case ADD_POSTS:
			return {
				...state,
				loading: false,
				posts: [...state.posts, action.payload],
			};

		case POSTS_OPERATION_FAILURE:
			return {
				...state,
				loading: false,
				err: action.payload,
			};

		default:
			return state;
	}
};

export default post_reducer;
