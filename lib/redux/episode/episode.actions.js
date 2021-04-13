import EpisodeTypes from './episode.types';

export const getEpisodeStart = id => ({
	type: EpisodeTypes.GET_EPISODE_START,
	payload: id,
});

export const getEpisodeSuccess = episode => ({
	type: EpisodeTypes.GET_EPISODE_SUCCESS,
	payload: episode,
});

export const getEpisodeFailure = error => ({
	type: EpisodeTypes.GET_EPISODE_FAILURE,
	payload: error,
});
