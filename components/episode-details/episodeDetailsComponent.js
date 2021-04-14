import Link from 'next/link';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import EpisodeList from '@/components/episode-list/episodeListComponent';
import { AvailableEpisodesWrapper } from '@/components/podcast-details/podcastDetailsStyles';
import Pause from '@/components/svg/pause';
import Play from '@/components/svg/play';
import useFormatDate from '@/hooks/useFormatDate';
import useFormatTime from '@/hooks/useFormatTime';

import {
	setCurrentPodcast,
	toggleIsPlaying,
} from '../../lib/redux/player/player.actions';
import {
	selectCurrentPodcast,
	selectIsPlaying,
} from '../../lib/redux/player/player.selectors';
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

const EpisodeDetailsContent = ({
	episode,
	isLoading,
	setPodcastEpisode,
	togglePlaying,
	isPlaying,
	currentPodcast,
}) => {
	const { time } = useFormatTime(episode?.url);
	const { days } = useFormatDate(episode?.uploaded);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	const audio = document.querySelector('#wavepod-audio');

	const handlePlay = () => {
		setPodcastEpisode({
			...episode,
			channelName: episode?.channel.name,
			channelImg: episode?.channel.img,
		});

		if (isPlaying === false && episode.id === currentPodcast.id) {
			audio.play();
			togglePlaying(true);
		} else if (episode.id !== currentPodcast.id) {
			audio.addEventListener('loadedmetadata', () => {
				audio.play();
				togglePlaying(true);
			});
		} else {
			audio.pause();
			togglePlaying(false);
		}
	};

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

				<PlayEpisodeButton role='button' onClick={handlePlay}>
					<PlayEpisodeButtonProgress width='0%' />
					<PlayIcon>
						{isPlaying && episode?.id === currentPodcast.id ? (
							<Pause fill='#ffffff' height='10px' width='10px' />
						) : (
							<Play />
						)}
					</PlayIcon>
					<PlayText>
						{isPlaying && episode?.id === currentPodcast.id
							? 'Pause Episode'
							: 'Play Episode'}
					</PlayText>
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
	setPodcastEpisode: PropTypes.func,
	togglePlaying: PropTypes.func,
	isPlaying: PropTypes.bool,
	currentPodcast: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
	currentPodcast: selectCurrentPodcast,
	isPlaying: selectIsPlaying,
});

const mapDispatchToProps = dispatch => ({
	setPodcastEpisode: episode => dispatch(setCurrentPodcast(episode)),
	togglePlaying: playing => dispatch(toggleIsPlaying(playing)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(EpisodeDetailsContent);
