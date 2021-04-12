import PlayerTypes from './player.types';

const INITIAL_VALUE = {
	currentPodcast: {},
};

const playerReducer = (state = INITIAL_VALUE, action) => {
	switch (action.type) {
		case PlayerTypes.SET_CURRENT_PODCAST:
			return {
				currentPodcast: action.payload,
			};

		default:
			return state;
	}
};

export default playerReducer;
