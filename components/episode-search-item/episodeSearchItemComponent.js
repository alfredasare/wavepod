import Link from 'next/link';

import PlayWithDuration from '@/components/buttons/play-with-duration/playWithDurationComponent';

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

const EpisodeSearchItem = () => {
	return (
		<Link href='/feed/[episode-details]' as={`/feed/675218326183`}>
			<a>
				<EpisodeSearchItemWrapper>
					<ImageColumn>
						<img src='/images/images.jpg' alt='search-results' />
					</ImageColumn>
					<TextColumn>
						<ImageShowDateWrapper>
							<PhoneImage>
								<img src='/images/images.jpg' alt='search-results' />
							</PhoneImage>
							<div>
								<TextColumnShow>Techmeme Ride Home</TextColumnShow>
								<TextColumnDate>5 days ago</TextColumnDate>
							</div>
						</ImageShowDateWrapper>
						<TextColumnTitle>
							Wed 10/07 – The House Antitrust Report
						</TextColumnTitle>
						<TextColumnSummary>
							Today’s episode is a conversation about four big trends in the
							tech world. Any one of these trends would be notable on its own,
							but we cover all four in this hallway-style chat, as a16z General
							Partner Chris Dixon talks with Sep Kamvar (professor of Media Arts
							and Sciences at MIT and now cofounder of cryptocurrency platform
							Celo); and Elad Gil (investor and the cofounder of health
							technology company Color Genomics, and formerly at Twitter and
							Google). This is a wide-ranging survey of some of the major shifts
							in technology right now, but it’s really a meta-story of how
							innovation happens, which is most definitely not in a straight
							line. So here are the trends they cover: *crypto; *AI and machine
							learning (including GPT-3); *full stack startups (which Chris
							first wrote about in 2014); *and collaborative web/collaborative
							enterprise/social (including RTC or real-time communication within
							the browser), which is where the conversation begins.
						</TextColumnSummary>
						<PlayWithDuration duration='10' />
					</TextColumn>
				</EpisodeSearchItemWrapper>
			</a>
		</Link>
	);
};

export default EpisodeSearchItem;
