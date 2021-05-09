import {
	SET_COMMENTS_LOADING,
	SET_COMMENTS,
	ADD_COMMENTS,
	COMMENTS_OPERATION_FAILURE,
} from '../action_types';

const InitialState = {
	loading: false,
	comments: [],
	error: '',
};

const comments_reducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_COMMENTS_LOADING:
			return {
				loading: true,
				comments: [],
				error: '',
			};

		case SET_COMMENTS:
			return {
				...state,
				loading: false,
				comments: action.payload,
			};

		case ADD_COMMENTS:
			return {
				...state,
				loading: false,
				comments: [...state.comments, action.payload],
			};

		case COMMENTS_OPERATION_FAILURE:
			return {
				...state,
				loading: false,
				err: action.payload,
			};

		default:
			return state;
	}
};

export default comments_reducer;
