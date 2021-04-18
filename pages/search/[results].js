import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';

import {
	ButtonIcon,
	SearchButton,
	SearchForm,
	SearchInput,
	SearchInputContainer,
} from '@/components/search/searchStyles';
import SearchResultsList from '@/components/search-results-list/searchResultsListComponent';
import { SearchResultsWrapper } from '@/components/search-results-list/searchResultsListStyles';

import { searchStart } from '../../lib/redux/search/search.actions';

const SearchResults = ({ search }) => {
	const [query, setQuery] = useState('');

	const handleChange = e => {
		setQuery(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		search(query);
	};

	return (
		<SearchResultsWrapper>
			<SearchForm onSubmit={handleSubmit}>
				<SearchButton bgColor='#f1f3f4'>
					<ButtonIcon className='fas fa-search' />
				</SearchButton>
				<SearchInputContainer>
					<SearchInput
						type='search'
						placeholder='Search for podcasts'
						value={query}
						onChange={handleChange}
						color='#111'
						bgColor='#f1f3f4'
					/>
				</SearchInputContainer>
			</SearchForm>
			<SearchResultsList />
		</SearchResultsWrapper>
	);
};

SearchResults.propTypes = {
	search: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
	search: query => dispatch(searchStart(query)),
});

export default connect(null, mapDispatchToProps)(SearchResults);
