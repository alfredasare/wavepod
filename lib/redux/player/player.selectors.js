import { createSelector } from 'reselect';

const selectPlayer = state => state.player;

export const selectCurrentPodcast = createSelector(
	[selectPlayer],
	player => player.currentPodcast,
);

export const selectIsPlaying = createSelector(
	[selectPlayer],
	player => player.isPlaying,
);
