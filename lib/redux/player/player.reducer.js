import PlayerTypes from './player.types';

const INITIAL_VALUE = {
	isPlaying: false,
	currentPodcast: {},
};

const playerReducer = (state = INITIAL_VALUE, action) => {
	switch (action.type) {
		case PlayerTypes.SET_CURRENT_PODCAST:
			return {
				...state,
				currentPodcast: action.payload,
			};

		case PlayerTypes.TOGGLE_IS_PLAYING:
			return {
				...state,
				isPlaying: action.payload,
			};

		case PlayerTypes.RESET_IS_PLAYING:
			return {
				...state,
				isPlaying: false,
			};

		default:
			return state;
	}
};

export default playerReducer;
