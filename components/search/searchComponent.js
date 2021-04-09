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

const Search = () => {
	return (
		<SearchWrapper>
			<MainSearchContent>
				<MainHeader>laudrr</MainHeader>
				<MainContent>
					<p>Unlimited number of podcasts to listen to</p>
					<p>Powered by channels and authors all over the world</p>
				</MainContent>
				<SearchForm>
					<SearchButton>
						<ButtonIcon className='fas fa-search' />
					</SearchButton>
					<SearchInputContainer>
						<SearchInput type='search' />
					</SearchInputContainer>
				</SearchForm>
			</MainSearchContent>
		</SearchWrapper>
	);
};

export default Search;
