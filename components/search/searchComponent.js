import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';

import { searchStart } from '../../lib/redux/search/search.actions';
import {
	ButtonIcon,
	MainContent,
	MainHeader,
	MainSearchContent,
	SearchButton,
	SearchForm,
	SearchInput,
	SearchInputContainer,
	SearchWrapper,
} from './searchStyles';

const Search = ({ search }) => {
	const router = useRouter();
	const [query, setQuery] = useState('');

	const handleChange = e => {
		setQuery(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		await router.push(`/search/q=${query.split(' ').join('+')}`);
		search(query);
	};

	return (
		<SearchWrapper>
			<MainSearchContent>
				<MainHeader>Wavepod</MainHeader>
				<MainContent>
					<p>Unlimited number of podcasts to listen to</p>
					<p>Powered by channels and authors all over the world</p>
				</MainContent>
				<SearchForm onSubmit={handleSubmit}>
					<SearchButton>
						<ButtonIcon className='fas fa-search' />
					</SearchButton>
					<SearchInputContainer>
						<SearchInput type='search' value={query} onChange={handleChange} />
					</SearchInputContainer>
				</SearchForm>
			</MainSearchContent>
		</SearchWrapper>
	);
};

Search.propTypes = {
	search: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
	search: query => dispatch(searchStart(query)),
});

export default connect(null, mapDispatchToProps)(Search);
