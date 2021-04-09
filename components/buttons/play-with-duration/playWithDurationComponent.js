import PropTypes from 'prop-types';

import { PlayButtonWithTime } from '@/components/buttons/play-with-duration/playWithDurationStyles';
import PlayWithCircle from '@/components/svg/playWithCircle';

const PlayWithDuration = ({ duration }) => {
	return (
		<PlayButtonWithTime role='button'>
			<PlayWithCircle />
			<span>{duration} min</span>
		</PlayButtonWithTime>
	);
};

PlayWithDuration.propTypes = {
	duration: PropTypes.string,
};

export default PlayWithDuration;
