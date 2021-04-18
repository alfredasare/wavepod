import SearchTypes from './search.types';

export const searchStart = query => ({
	type: SearchTypes.SEARCH_START,
	payload: query,
});

export const searchSuccess = results => ({
	type: SearchTypes.SEARCH_SUCCESS,
	payload: results,
});

export const searchFailure = error => ({
	type: SearchTypes.SEARCH_FAILURE,
	payload: error,
});
