import Link from 'next/link';
import PropTypes from 'prop-types';

import {
	PodcastImageWrapper,
	PodcastItemWrapper,
	PodcastTitleContainer,
} from './podcastItemStyles';

const PodcastItem = ({ channel }) => {
	return (
		<PodcastItemWrapper>
			<PodcastImageWrapper>
				<Link href={`/feed/${channel?.id}`}>
					<a>
						<img src={channel?.img} alt={`${channel?.name} channel`} />
					</a>
				</Link>
			</PodcastImageWrapper>

			<PodcastTitleContainer>
				<Link href={`/feed/${channel?.id}`}>
					<a>
						<p>{channel?.name}</p>
						<p>{channel?.owner}</p>
					</a>
				</Link>
			</PodcastTitleContainer>
		</PodcastItemWrapper>
	);
};

PodcastItem.propTypes = {
	channel: PropTypes.object,
};

export default PodcastItem;
