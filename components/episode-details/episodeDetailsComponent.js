import Link from 'next/link';
import PropTypes from 'prop-types';

import EpisodeList from '@/components/episode-list/episodeListComponent';
import { AvailableEpisodesWrapper } from '@/components/podcast-details/podcastDetailsStyles';
import Play from '@/components/svg/play';

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
					{episode?.uploaded} · 10 min
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
				<h3>
					More episodes from The Daily Show With Trevor Noah: Ears Edition
				</h3>
				<EpisodeList
					items={episode?.channel.episodes.filter(
						item => item.id !== episode?.id,
					)}
					channelId={episode?.channel.id}
				/>
			</AvailableEpisodesWrapper>
		</EpisodeDetailsContentWrapper>
	);
};

EpisodeDetailsContent.propTypes = {
	episode: PropTypes.object,
};

export default EpisodeDetailsContent;
