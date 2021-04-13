import { createSelector } from 'reselect';

const selectChannels = state => state.channel;

export const selectAllChannels = createSelector(
	[selectChannels],
	channel => channel.channels,
);

export const selectCurrentChannel = createSelector(
	[selectChannels],
	channel => channel.currentChannel,
);

export const selectIsLoading = createSelector(
	[selectChannels],
	channel => channel.isLoading,
);

export const selectChannelError = createSelector(
	[selectChannels],
	channel => channel.error,
);
