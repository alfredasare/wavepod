import Link from 'next/link';
import PropTypes from 'prop-types';

import PlayWithDuration from '@/components/buttons/play-with-duration/playWithDurationComponent';
import useFormatDate from '@/hooks/useFormatDate';
import useFormatTime from '@/hooks/useFormatTime';

import {
	DateUploaded,
	EpisodeItemWrapper,
	EpisodeSummary,
	EpisodeTitle,
} from './episodeItemStyles';

const EpisodeItem = ({ channelId, episode }) => {
	const { time } = useFormatTime(episode.url);
	const { days } = useFormatDate(episode.uploaded);

	return (
		<Link href={`/feed/${channelId}/${episode.id}`}>
			<a>
				<EpisodeItemWrapper>
					<DateUploaded>{days}</DateUploaded>
					<EpisodeTitle>{episode.title}</EpisodeTitle>
					<EpisodeSummary>{episode.description}</EpisodeSummary>
					<PlayWithDuration duration={time ? `${time}` : `--`} />
				</EpisodeItemWrapper>
			</a>
		</Link>
	);
};

EpisodeItem.propTypes = {
	channelId: PropTypes.string,
	episode: PropTypes.object,
};

export default EpisodeItem;
