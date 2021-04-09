import dynamic from 'next/dynamic';

import EpisodeSearchItem from '@/components/episode-search-item/episodeSearchItemComponent';
import PodcastItem from '@/components/podcast-item/podcastItemComponent';

import { SearchResultsWrapper, ShowWrapper } from './searchResultsListStyles';

const Carousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const SearchResultsList = () => {
	const shows = [1, 2, 3];
	const episodes = [1, 2, 3, 4, 5, 6];

	const options = {
		loop: false,
		responsive: {
			0: {
				items: 2,
				margin: 20,
				autoWidth: true,
				dots: false,
			},
			540: {
				items: 4,
				margin: 40,
			},
			768: {
				items: 5,
				margin: 100,
			},
			1000: {
				items: 5,
				margin: 20,
			},
			1280: {
				items: 5,
				margin: 80,
			},
			1440: {
				items: 5,
				margin: 10,
			},
			2000: {
				items: 6,
			},
		},
	};

	return (
		<SearchResultsWrapper>
			<h3>Episode results</h3>
			{episodes.map(episode => (
				<EpisodeSearchItem key={episode * 1000} />
			))}

			<h3>Show results</h3>
			<ShowWrapper>
				<Carousel className='owl-theme' {...options}>
					{shows.map(show => (
						<PodcastItem key={show * 110} />
					))}
				</Carousel>
			</ShowWrapper>
		</SearchResultsWrapper>
	);
};

export default SearchResultsList;
