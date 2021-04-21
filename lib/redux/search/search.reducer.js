import SearchTypes from './search.types';

const INITIAL_STATE = {
	results: [],
	isLoading: true,
	error: null,
	query: '',
};

const searchReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SearchTypes.SEARCH_START:
			return {
				...state,
				isLoading: true,
				error: null,
				query: action.payload,
			};

		case SearchTypes.SEARCH_SUCCESS:
			return {
				...state,
				results: action.payload,
				isLoading: false,
			};

		case SearchTypes.SEARCH_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default searchReducer;
