import PropTypes from 'prop-types';

import PodcastList from '@/components/podcast-list/podcastListComponent';

import { PodcastRowHeading, PodcastRowWrapper } from './podcastRowStyles';

const PodcastRow = ({ title }) => {
	return (
		<PodcastRowWrapper>
			<PodcastRowHeading>{title}</PodcastRowHeading>

			<PodcastList items={[1, 2, 3, 4, 5, 7, 8, 9, 10]} />
		</PodcastRowWrapper>
	);
};

PodcastRow.propTypes = {
	title: PropTypes.string,
};

export default PodcastRow;
