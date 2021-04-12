import ChannelTypes from './channel.types';

export const getChannelsStart = () => ({
	type: ChannelTypes.GET_CHANNELS_START,
});

export const getChannelsSuccess = channels => ({
	type: ChannelTypes.GET_CHANNELS_SUCCESS,
	payload: channels,
});

export const getChannelsFailure = error => ({
	type: ChannelTypes.GET_CHANNELS_FAILURE,
	payload: error,
});

export const getChannelDetailsStart = id => ({
	type: ChannelTypes.GET_CHANNEL_DETAILS_START,
	payload: id,
});

export const getChannelDetailsSuccess = channel => ({
	type: ChannelTypes.GET_CHANNEL_DETAILS_SUCCESS,
	payload: channel,
});

export const getChannelDetailsFailure = error => ({
	type: ChannelTypes.GET_CHANNEL_DETAILS_FAILURE,
	payload: error,
});
