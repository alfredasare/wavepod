import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import EpisodeItem from '@/components/episode-item/episodeItemComponent';

const EpisodeList = ({ items, channelId }) => {
	return (
		<div>
			{items.map(() => (
				<EpisodeItem key={v4()} id={v4()} channelId={channelId} />
			))}
		</div>
	);
};

EpisodeList.propTypes = {
	items: PropTypes.array,
	channelId: PropTypes.string,
};

export default EpisodeList;
