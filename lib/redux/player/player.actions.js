import PlayerTypes from './player.types';

export const setCurrentPodcast = payload => ({
	type: PlayerTypes.SET_CURRENT_PODCAST,
	payload,
});

export const toggleIsPlaying = id => ({
	type: PlayerTypes.TOGGLE_IS_PLAYING,
	payload: id,
});
