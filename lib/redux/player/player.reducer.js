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
				isPlaying:
					action.payload === state.currentPodcast.id ? !state.isPlaying : true,
			};

		default:
			return state;
	}
};

export default playerReducer;
