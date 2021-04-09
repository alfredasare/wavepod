import Link from 'next/link';
import PropTypes from 'prop-types';

import PlayWithDuration from '@/components/buttons/play-with-duration/playWithDurationComponent';

import {
	DateUploaded,
	EpisodeItemWrapper,
	EpisodeSummary,
	EpisodeTitle,
} from './episodeItemStyles';

const EpisodeItem = ({ id, channelId }) => {
	return (
		<Link href={`/feed/${channelId}/${id}`}>
			<a>
				<EpisodeItemWrapper>
					<DateUploaded>3 days ago</DateUploaded>
					<EpisodeTitle>
						Microsoft Surface Duo, Samsung &apos;Nope&apos; 20, & an Airpower
						Competitor
					</EpisodeTitle>
					<EpisodeSummary>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
						doloremque dolores enim explicabo ipsam iusto, minima nihil officia
						perspiciatis placeat praesentium qui quis reiciendis similique
						temporibus vero vitae, voluptatem voluptates.
					</EpisodeSummary>
					<PlayWithDuration duration='10' />
				</EpisodeItemWrapper>
			</a>
		</Link>
	);
};

EpisodeItem.propTypes = {
	id: PropTypes.string,
	channelId: PropTypes.string,
};

export default EpisodeItem;
