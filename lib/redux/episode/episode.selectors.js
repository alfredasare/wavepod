import { createSelector } from 'reselect';

const selectEpisode = state => state.episode;

export const selectCurrentEpisode = createSelector(
	[selectEpisode],
	episode => episode.currentEpisode,
);

export const selectIsLoading = createSelector(
	[selectEpisode],
	episode => episode.isLoading,
);

export const selectEpisodeError = createSelector(
	[selectEpisode],
	episode => episode.error,
);
