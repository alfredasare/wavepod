import PlayerTypes from './player.types';

export const setCurrentPodcast = payload => ({
	type: PlayerTypes.SET_CURRENT_PODCAST,
	payload,
});

export const toggleIsPlaying = playing => ({
	type: PlayerTypes.TOGGLE_IS_PLAYING,
	payload: playing,
});

export const resetIsPlaying = () => ({
	type: PlayerTypes.RESET_IS_PLAYING,
});
