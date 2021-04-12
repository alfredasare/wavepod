import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PodcastRowList from '@/components/podcast-row-list/podcastRowListComponent';
import Search from '@/components/search/searchComponent';

import { setCurrentPodcast } from '../../lib/redux/player/player.actions';
import { selectCurrentPodcast } from '../../lib/redux/player/player.selectors';

const Podcasts = ({ currentPodcast, setCurrentPodcast }) => {
	console.log(currentPodcast);

	useEffect(() => {
		setCurrentPodcast({
			name: 'Alfred',
		});
	}, []);

	return (
		<>
			<Search />
			<PodcastRowList />
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	currentPodcast: selectCurrentPodcast,
});

const mapDispatchToProps = dispatch => ({
	setCurrentPodcast: podcast => dispatch(setCurrentPodcast(podcast)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);
