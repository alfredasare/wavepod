import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectSearchResults = createSelector(
	[selectSearch],
	search => search.results,
);

export const selectSearchIsLoading = createSelector(
	[selectSearch],
	search => search.isLoading,
);

export const selectSearchError = createSelector(
	[selectSearch],
	search => search.error,
);

export const selectSearchQuery = createSelector(
	[selectSearch],
	search => search.query,
);
