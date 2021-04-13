import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PodcastDetailsContent from '@/components/podcast-details/podcastDetailsComponent';

import { getChannelDetailsStart } from '../../lib/redux/channel/channel.actions';
import {
	selectCurrentChannel,
	selectIsLoading,
} from '../../lib/redux/channel/channel.selectors';

const PodcastDetails = ({ getChannelDetails, isLoading, channelDetails }) => {
	const router = useRouter();
	const { channelId } = router.query;

	useEffect(() => {
		if (channelId) {
			getChannelDetails(channelId);
		}
	}, [channelId]);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	return (
		<>
			<PodcastDetailsContent
				channelId={channelId}
				channelDetails={channelDetails}
			/>
		</>
	);
};

PodcastDetails.propTypes = {
	isLoading: PropTypes.bool,
	getChannelDetails: PropTypes.func,
	channelDetails: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsLoading,
	channelDetails: selectCurrentChannel,
});

const mapDispatchToProps = dispatch => ({
	getChannelDetails: id => dispatch(getChannelDetailsStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PodcastDetails);
