// import action types
import {
	FETCH_DATA,
	FETCH_SUCCESS,
	FETCH_FAIL,
	POST_DATA,
	POST_SUCCESS,
	POST_FAIL,
	DELETE_DATA,
	DELETE_SUCCESS,
	DELETE_FAIL
} from '../actions';

// setup initialState
const initialState = {
	smurfs: [],
	isFetching: false,
	isPosting: false,
	errors: ''
};

// setup  an empty reducer
export const smurfReducer = (state = initialState, action) => {
	// setup swtich, cases, and default
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				isFetching: true,
				errors: ''
			};
		case FETCH_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				isFetching: false,
				errors: ''
			};
		case FETCH_FAIL:
			return {
				...state,
				isFetching: false,
				errors: action.payload
			};
		case POST_DATA:
			return {
				...state,
				isPosting: true,
				errors: ''
			};
		case POST_SUCCESS:
			return {
				...state,
				isPosting: false,
				smurfs: action.payload,
				errors: ''
			};
		case POST_FAIL:
			return {
				...state,
				isPosting: false,
				errors: action.payload
			};
		case DELETE_DATA:
			return {
				...state,
				isFetching: true,
				errors: ''
			};
		case DELETE_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				isFetching: false,
				errors: ''
			};
		case DELETE_FAIL:
			return {
				...state,
				errors: action.payload
			};
		default:
			return state;
	}
};

// export the reducer
// export default smurfReducer;
