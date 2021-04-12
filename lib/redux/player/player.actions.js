import PlayerTypes from './player.types';

export const setCurrentPodcast = payload => ({
	type: PlayerTypes.SET_CURRENT_PODCAST,
	payload,
});
