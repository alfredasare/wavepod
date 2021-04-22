import Link from 'next/link';
import PropTypes from 'prop-types';

import PlayWithDuration from '@/components/buttons/play-with-duration/playWithDurationComponent';
import useFormatDate from '@/hooks/useFormatDate';
import useFormatTime from '@/hooks/useFormatTime';

import {
	EpisodeSearchItemWrapper,
	ImageColumn,
	ImageShowDateWrapper,
	PhoneImage,
	TextColumn,
	TextColumnDate,
	TextColumnShow,
	TextColumnSummary,
	TextColumnTitle,
} from './episodeSearchItemStyles';

const EpisodeSearchItem = ({ episode }) => {
	const { time } = useFormatTime(episode.url);
	const { days } = useFormatDate(episode.uploaded);

	return (
		<Link href={`/feed/${episode.channel.id}/${episode.id}`}>
			<a>
				<EpisodeSearchItemWrapper>
					<ImageColumn>
						<img src={episode.channel.img} alt={`${episode.channel.name}`} />
					</ImageColumn>
					<TextColumn>
						<ImageShowDateWrapper>
							<PhoneImage>
								<img
									src={episode.channel.img}
									alt={`${episode.channel.name}`}
								/>
							</PhoneImage>
							<div>
								<TextColumnShow>{episode.channel.name}</TextColumnShow>
								<TextColumnDate>{days}</TextColumnDate>
							</div>
						</ImageShowDateWrapper>
						<TextColumnTitle>{episode.title}</TextColumnTitle>
						<TextColumnSummary>{episode.description}</TextColumnSummary>
						<PlayWithDuration
							duration={time ? `${time}` : `--`}
							episode={episode}
							channelName={episode.channel.name}
							channelImg={episode.channel.img}
						/>
					</TextColumn>
				</EpisodeSearchItemWrapper>
			</a>
		</Link>
	);
};

EpisodeSearchItem.propTypes = {
	episode: PropTypes.object,
};

export default EpisodeSearchItem;
