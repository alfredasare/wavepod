import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import EpisodeDetailsContent from '@/components/episode-details/episodeDetailsComponent';

import { getEpisodeStart } from '../../../lib/redux/episode/episode.actions';
import {
	selectCurrentEpisode,
	selectIsLoading,
} from '../../../lib/redux/episode/episode.selectors';

const EpisodeDetailsPage = ({ episode, isLoading, getEpisode }) => {
	const router = useRouter();
	const { episodeId } = router.query;

	useEffect(() => {
		if (episodeId) {
			getEpisode(episodeId);
		}
	}, [episodeId]);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	return (
		<>
			<EpisodeDetailsContent episode={episode} isLoading={isLoading} />
		</>
	);
};

EpisodeDetailsPage.propTypes = {
	isLoading: PropTypes.bool,
	episode: PropTypes.object,
	getEpisode: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsLoading,
	episode: selectCurrentEpisode,
});

const mapDispatchToProps = dispatch => ({
	getEpisode: id => dispatch(getEpisodeStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetailsPage);
