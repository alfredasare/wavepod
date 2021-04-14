import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { PlayButtonWithTime } from '@/components/buttons/play-with-duration/playWithDurationStyles';
import Equalizer from '@/components/svg/equalizer';
import PlayWithCircle from '@/components/svg/playWithCircle';
import usePlayer from '@/hooks/usePlayer';

import {
	setCurrentPodcast,
	toggleIsPlaying,
} from '../../../lib/redux/player/player.actions';
import {
	selectCurrentPodcast,
	selectIsPlaying,
} from '../../../lib/redux/player/player.selectors';

const PlayWithDuration = ({
	duration,
	episode,
	setPodcastEpisode,
	channelName,
	channelImg,
	currentPodcast,
	togglePlaying,
	isPlaying,
}) => {
	const { setPlaying } = usePlayer();

	const audio = document.querySelector('#wavepod-audio');

	const handlePlay = e => {
		e.preventDefault();
		setPodcastEpisode({
			...episode,
			channelName,
			channelImg,
		});

		if (isPlaying === false && episode.id === currentPodcast.id) {
			setPlaying(true);
			togglePlaying(true);
		} else if (episode.id !== currentPodcast.id) {
			audio.addEventListener('loadedmetadata', () => {
				setPlaying(true);
				togglePlaying(true);
			});
		} else {
			setPlaying(false);
			togglePlaying(false);
		}
	};

	return (
		<PlayButtonWithTime role='button' onClick={handlePlay}>
			{isPlaying && episode.id === currentPodcast.id ? (
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
	togglePlaying: PropTypes.func,
	isPlaying: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
	currentPodcast: selectCurrentPodcast,
	isPlaying: selectIsPlaying,
});

const mapDispatchToProps = dispatch => ({
	setPodcastEpisode: episode => dispatch(setCurrentPodcast(episode)),
	togglePlaying: playing => dispatch(toggleIsPlaying(playing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayWithDuration);
