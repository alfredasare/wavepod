import Link from 'next/link';
import PropTypes from 'prop-types';

import {
	PodcastImageWrapper,
	PodcastItemWrapper,
	PodcastTitleContainer,
} from './podcastItemStyles';

const PodcastItem = ({ id }) => {
	return (
		<PodcastItemWrapper>
			<PodcastImageWrapper>
				<Link href={`/feed/${id}`}>
					<a>
						<img src='/images/images.jpg' alt='' />
					</a>
				</Link>
			</PodcastImageWrapper>

			<PodcastTitleContainer>
				<Link href={`/feed/${id}`}>
					<a>
						<p>Episode Title</p>
						<p>Channel Name</p>
					</a>
				</Link>
			</PodcastTitleContainer>
		</PodcastItemWrapper>
	);
};

PodcastItem.propTypes = {
	id: PropTypes.string,
};

export default PodcastItem;
