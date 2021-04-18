import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import EpisodeSearchItem from '@/components/episode-search-item/episodeSearchItemComponent';
import PodcastItem from '@/components/podcast-item/podcastItemComponent';

import { searchStart } from '../../lib/redux/search/search.actions';
import {
	selectSearchError,
	selectSearchIsLoading,
	selectSearchResults,
} from '../../lib/redux/search/search.selectors';
import { SearchResultsWrapper, ShowWrapper } from './searchResultsListStyles';

const Carousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const SearchResultsList = ({ error, isLoading, results }) => {
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

	if (isLoading) {
		return <h1>Loading..........</h1>;
	}

	if (error) {
		return <h1>An error occurred</h1>;
	}

	return (
		<SearchResultsWrapper>
			<h3>Episode results</h3>
			{results?.episodes?.map(episode => (
				<EpisodeSearchItem key={episode.item.id} episode={episode.item} />
			))}

			<h3>Show results</h3>
			<ShowWrapper>
				<Carousel className='owl-theme' {...options}>
					{results?.channels?.map(channel => (
						<PodcastItem key={channel.item.id} channel={channel.item} />
					))}
				</Carousel>
			</ShowWrapper>
		</SearchResultsWrapper>
	);
};

SearchResultsList.propTypes = {
	search: PropTypes.func,
	isLoading: PropTypes.bool,
	error: PropTypes.string,
	results: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectSearchIsLoading,
	error: selectSearchError,
	results: selectSearchResults,
});

const mapDispatchToProps = dispatch => ({
	search: query => dispatch(searchStart(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsList);
