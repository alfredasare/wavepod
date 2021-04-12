import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PodcastRowList from '@/components/podcast-row-list/podcastRowListComponent';
import Search from '@/components/search/searchComponent';

import { getChannelsStart } from '../../lib/redux/channel/channel.actions';
import { selectAllChannels } from '../../lib/redux/channel/channel.selectors';

const Podcasts = ({ getAllChannels, allChannels }) => {
	console.log(allChannels);

	useEffect(() => {
		getAllChannels();
	}, [allChannels]);

	return (
		<>
			<Search />
			<PodcastRowList />
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	allChannels: selectAllChannels,
});

const mapDispatchToProps = dispatch => ({
	getAllChannels: () => dispatch(getChannelsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);
