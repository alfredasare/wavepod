import ChannelTypes from './channel.types';

const INITIAL_STATE = {
	channels: [],
	currentChannel: null,
	isLoading: false,
	error: null,
};

const channelReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ChannelTypes.GET_CHANNEL_DETAILS_START:
		case ChannelTypes.GET_CHANNELS_START:
			return {
				...state,
				isLoading: true,
				error: null,
			};

		case ChannelTypes.GET_CHANNELS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				channels: action.payload,
			};

		case ChannelTypes.GET_CHANNEL_DETAILS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				currentChannel: action.payload,
			};

		case ChannelTypes.GET_CHANNEL_DETAILS_FAILURE:
		case ChannelTypes.GET_CHANNELS_FAILURE:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default channelReducer;
