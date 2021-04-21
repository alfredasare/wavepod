import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { v4 } from 'uuid';

import PodcastRow from '@/components/podcast-row/podcastRowComponent';

import { selectAllChannels } from '../../lib/redux/channel/channel.selectors';
import { ProductListRowWrapper } from './podcastRowListStyles';

const PodcastRowList = ({ allChannels }) => {
	useEffect(() => {}, [allChannels]);

	if (allChannels.length === 0) {
		return <h1>Loading</h1>;
	}

	return (
		<ProductListRowWrapper>
			{['Business', 'News', 'Society and Culture', 'Science', 'Tech'].map(
				category => {
					const filteredChannels = allChannels.filter(channel =>
						channel.category.includes(category),
					);
					return (
						<PodcastRow
							key={v4()}
							title={category}
							channels={filteredChannels}
						/>
					);
				},
			)}
		</ProductListRowWrapper>
	);
};

PodcastRowList.propTypes = {
	allChannels: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
	allChannels: selectAllChannels,
});

export default connect(mapStateToProps)(PodcastRowList);
