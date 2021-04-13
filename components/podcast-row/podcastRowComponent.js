import PropTypes from 'prop-types';

import PodcastList from '@/components/podcast-list/podcastListComponent';

import { PodcastRowHeading, PodcastRowWrapper } from './podcastRowStyles';

const PodcastRow = ({ title, channels }) => {
	return (
		<PodcastRowWrapper>
			<PodcastRowHeading>{title}</PodcastRowHeading>

			<PodcastList items={channels} />
		</PodcastRowWrapper>
	);
};

PodcastRow.propTypes = {
	title: PropTypes.string,
	channels: PropTypes.array,
};

export default PodcastRow;
