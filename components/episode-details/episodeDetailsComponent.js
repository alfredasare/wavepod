import Link from 'next/link';

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

const EpisodeDetailsContent = () => {
	return (
		<EpisodeDetailsContentWrapper>
			<EpisodeDetailsHeader>
				<Link href='/feed'>
					<ShowLink>The Daily Show With Trevor Noah: Ears Edition</ShowLink>
				</Link>
				<EpisodeHeaderTitle>
					Coronavirus Updates - The White House Becomes a Hot Spot &
					Trump&apos;s Post-Infection P.R. Blitz
				</EpisodeHeaderTitle>
				<EpisodeDateAndDuration>2 hours ago · 10 min</EpisodeDateAndDuration>

				<PlayEpisodeButton role='button'>
					<PlayEpisodeButtonProgress width='0%' />
					<PlayIcon>
						<Play />
					</PlayIcon>
					<PlayText>Play Episode</PlayText>
				</PlayEpisodeButton>

				<EpisodeHeaderSummary>
					People around the world are demanding clean air -- and cities are
					starting to respond, says electrification advocate Monica Araya. She
					takes us on a world tour of urban areas that are working to fully
					electrify their transportation systems over the next decade, shifting
					to emission-free motorcycles, cars, buses, ferries and beyond. See
					what a future without the internal combustion engine could look like
					-- and what it will take to get there.
				</EpisodeHeaderSummary>
			</EpisodeDetailsHeader>

			<AvailableEpisodesWrapper>
				<h3>
					More episodes from The Daily Show With Trevor Noah: Ears Edition
				</h3>
				<EpisodeList items={[11, 12, 13, 14, 15, 16, 17]} />
			</AvailableEpisodesWrapper>
		</EpisodeDetailsContentWrapper>
	);
};

export default EpisodeDetailsContent;
