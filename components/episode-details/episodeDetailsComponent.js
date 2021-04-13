import Link from 'next/link';
import PropTypes from 'prop-types';

import EpisodeList from '@/components/episode-list/episodeListComponent';
import { AvailableEpisodesWrapper } from '@/components/podcast-details/podcastDetailsStyles';
import Play from '@/components/svg/play';
import useFormatDate from '@/hooks/useFormatDate';
import useFormatTime from '@/hooks/useFormatTime';

import {
	EpisodeDateAndDuration,
	EpisodeDetailsContentWrapper,
	EpisodeDetailsHeader,
	EpisodeHeaderSummary,
	EpisodeHeaderTitle,
	PlayEpisodeButton,
	PlayEpisodeButtonProgress,
	PlayIcon,
	PlayText,
	ShowLink,
} from './episodeDetailsStyles';

const EpisodeDetailsContent = ({ episode, isLoading }) => {
	const { time } = useFormatTime(episode?.url);
	const { days } = useFormatDate(episode?.uploaded);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	return (
		<EpisodeDetailsContentWrapper>
			<EpisodeDetailsHeader>
				<Link href={`/feed/${episode?.channel.id}`}>
					<ShowLink>{episode?.channel.owner}</ShowLink>
				</Link>
				<EpisodeHeaderTitle>{episode?.title}</EpisodeHeaderTitle>
				<EpisodeDateAndDuration>
					{days} · {time ? time.toString() : '--'} mins
				</EpisodeDateAndDuration>

				<PlayEpisodeButton role='button'>
					<PlayEpisodeButtonProgress width='0%' />
					<PlayIcon>
						<Play />
					</PlayIcon>
					<PlayText>Play Episode</PlayText>
				</PlayEpisodeButton>

				<EpisodeHeaderSummary>{episode?.description}</EpisodeHeaderSummary>
			</EpisodeDetailsHeader>

			<AvailableEpisodesWrapper>
				<h3>More episodes from {episode?.channel.name}</h3>
				<EpisodeList
					items={episode?.channel.episodes.filter(
						item => item.id !== episode?.id,
					)}
					channelId={episode?.channel.id}
					channelName={episode?.channel.name}
					channelImg={episode?.channel.img}
				/>
			</AvailableEpisodesWrapper>
		</EpisodeDetailsContentWrapper>
	);
};

EpisodeDetailsContent.propTypes = {
	episode: PropTypes.object,
};

export default EpisodeDetailsContent;
