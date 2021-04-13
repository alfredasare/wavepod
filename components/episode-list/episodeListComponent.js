import PropTypes from 'prop-types';

import EpisodeItem from '@/components/episode-item/episodeItemComponent';

const EpisodeList = ({ items, channelId }) => {
	return (
		<div>
			{items?.map(episode => (
				<EpisodeItem key={episode.id} episode={episode} channelId={channelId} />
			))}
		</div>
	);
};

EpisodeList.propTypes = {
	items: PropTypes.array,
	channelId: PropTypes.string,
};

export default EpisodeList;
