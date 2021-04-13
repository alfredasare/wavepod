import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PlayButtonWithTime } from '@/components/buttons/play-with-duration/playWithDurationStyles';
import PlayWithCircle from '@/components/svg/playWithCircle';

import { setCurrentPodcast } from '../../../lib/redux/player/player.actions';

const PlayWithDuration = ({
	duration,
	episode,
	setPodcastEpisode,
	channelName,
	channelImg,
}) => {
	const handlePlay = e => {
		e.preventDefault();
		setPodcastEpisode({
			...episode,
			channelName,
			channelImg,
		});
	};

	return (
		<PlayButtonWithTime role='button' onClick={handlePlay}>
			<PlayWithCircle />
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
};

const mapDispatchToProps = dispatch => ({
	setPodcastEpisode: episode => dispatch(setCurrentPodcast(episode)),
});

export default connect(null, mapDispatchToProps)(PlayWithDuration);
