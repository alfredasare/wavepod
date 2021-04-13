import PropTypes from 'prop-types';

import EpisodeList from '@/components/episode-list/episodeListComponent';

import {
	AvailableEpisodesWrapper,
	PodcastDetailsButton,
	PodcastDetailsButtonRow,
	PodcastDetailsChannelImage,
	PodcastDetailsChannelName,
	PodcastDetailsContentWrapper,
	PodcastDetailsHeader,
	PodcastDetailsHeaderLeftColumn,
	PodcastDetailsSummary,
	PodcastDetailsTitle,
} from './podcastDetailsStyles';

const PodcastDetailsContent = ({ channelId, channelDetails }) => {
	return (
		<PodcastDetailsContentWrapper>
			<PodcastDetailsHeader>
				<PodcastDetailsHeaderLeftColumn>
					<PodcastDetailsTitle>{channelDetails?.name}</PodcastDetailsTitle>
					<PodcastDetailsChannelName>
						{channelDetails?.owner}
					</PodcastDetailsChannelName>
				</PodcastDetailsHeaderLeftColumn>

				<PodcastDetailsChannelImage>
					<img
						src={channelDetails?.img}
						alt={`${channelDetails?.name} podcast`}
					/>
				</PodcastDetailsChannelImage>
			</PodcastDetailsHeader>

			<PodcastDetailsButtonRow>
				{/*<Link href='/'>*/}
				{/*	<PodcastDetailsButton>Subscribe</PodcastDetailsButton>*/}
				{/*</Link>*/}
				{channelDetails?.websiteUrl && (
					<PodcastDetailsButton
						target='_blank'
						href={channelDetails?.websiteUrl}
					>
						Visit website
					</PodcastDetailsButton>
				)}
			</PodcastDetailsButtonRow>

			<PodcastDetailsSummary>
				<p>{channelDetails?.description}</p>
			</PodcastDetailsSummary>

			<AvailableEpisodesWrapper>
				<h3>Available Episodes</h3>
				<EpisodeList items={channelDetails?.episodes} channelId={channelId} />
			</AvailableEpisodesWrapper>
		</PodcastDetailsContentWrapper>
	);
};

PodcastDetailsContent.propTypes = {
	channelId: PropTypes.string,
	channelDetails: PropTypes.object,
};

export default PodcastDetailsContent;
