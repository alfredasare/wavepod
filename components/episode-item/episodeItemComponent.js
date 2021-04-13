import Link from 'next/link';
import PropTypes from 'prop-types';

import PlayWithDuration from '@/components/buttons/play-with-duration/playWithDurationComponent';

import {
	DateUploaded,
	EpisodeItemWrapper,
	EpisodeSummary,
	EpisodeTitle,
} from './episodeItemStyles';

const EpisodeItem = ({ channelId, episode }) => {
	return (
		<Link href={`/feed/${channelId}/${episode.id}`}>
			<a>
				<EpisodeItemWrapper>
					<DateUploaded>{episode.uploaded}</DateUploaded>
					<EpisodeTitle>{episode.title}</EpisodeTitle>
					<EpisodeSummary>{episode.description}</EpisodeSummary>
					<PlayWithDuration duration='10' />
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
