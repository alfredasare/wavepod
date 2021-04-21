import Head from 'next/head';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PodcastRowList from '@/components/podcast-row-list/podcastRowListComponent';
import Search from '@/components/search/searchComponent';

import { getChannelsStart } from '../../lib/redux/channel/channel.actions';
import { selectIsLoading } from '../../lib/redux/channel/channel.selectors';

const Podcasts = ({ getAllChannels, isLoading }) => {
	useEffect(() => {
		getAllChannels();
	}, []);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	return (
		<>
			<Head>
				<title>Podcast Channels | Wavepod</title>
			</Head>
			<Search />
			<PodcastRowList />
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsLoading,
});

const mapDispatchToProps = dispatch => ({
	getAllChannels: () => dispatch(getChannelsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);
