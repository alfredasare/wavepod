import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { PlayButtonWithTime } from '@/components/buttons/play-with-duration/playWithDurationStyles';
import Equalizer from '@/components/svg/equalizer';
import PlayWithCircle from '@/components/svg/playWithCircle';
import usePlayer from '@/hooks/usePlayer';

import { setCurrentPodcast } from '../../../lib/redux/player/player.actions';
import { selectCurrentPodcast } from '../../../lib/redux/player/player.selectors';

const PlayWithDuration = ({
	duration,
	episode,
	setPodcastEpisode,
	channelName,
	channelImg,
	currentPodcast,
	// togglePlaying,
	// isPlaying
}) => {
	const { setPlaying, playing } = usePlayer();

	useEffect(() => {}, []);

	const handlePlay = e => {
		e.preventDefault();
		setPodcastEpisode({
			...episode,
			channelName,
			channelImg,
		});
		setPlaying(true);
	};

	const handlePause = e => {
		e.preventDefault();
		setPlaying(false);
	};

	return (
		<PlayButtonWithTime
			role='button'
			onClick={playing ? handlePause : handlePlay}
		>
			{playing && episode.id === currentPodcast.id ? (
				<>
					<Equalizer />
				</>
			) : (
				<>
					<PlayWithCircle />
				</>
			)}
			<span>{duration} min</span>
		</PlayButtonWithTime>
	);
};

PlayWithDuration.propTypes = {
	duration: PropTypes.string,
	episode: PropTypes.object,
	setPodcastEpisode: PropTypes.func,
	channelName: PropTypes.string,
	channelImg: PropTypes.string,
	// togglePlaying: PropTypes.func,
	// isPlaying: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
	currentPodcast: selectCurrentPodcast,
	// isPlaying: selectIsPlaying
});

const mapDispatchToProps = dispatch => ({
	setPodcastEpisode: episode => dispatch(setCurrentPodcast(episode)),
	// togglePlaying: id => dispatch(toggleIsPlaying(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayWithDuration);
