import EpisodeTypes from './episode.types';

const INITIAL_STATE = {
	currentEpisode: null,
	isLoading: false,
	error: null,
};

const episodeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EpisodeTypes.GET_EPISODE_START:
			return {
				...state,
				isLoading: true,
				error: null,
			};

		case EpisodeTypes.GET_EPISODE_SUCCESS:
			return {
				...state,
				isLoading: false,
				currentEpisode: action.payload,
				error: null,
			};

		case EpisodeTypes.GET_EPISODE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default episodeReducer;
