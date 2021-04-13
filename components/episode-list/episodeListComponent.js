import PropTypes from 'prop-types';

import EpisodeItem from '@/components/episode-item/episodeItemComponent';

const EpisodeList = ({ items, channelId, channelName, channelImg }) => {
	return (
		<div>
			{items?.map(episode => (
				<EpisodeItem
					key={episode.id}
					episode={episode}
					channelId={channelId}
					channelName={channelName}
					channelImg={channelImg}
				/>
			))}
		</div>
	);
};

EpisodeList.propTypes = {
	items: PropTypes.array,
	channelId: PropTypes.string,
	channelName: PropTypes.string,
	channelImg: PropTypes.string,
};

export default EpisodeList;
