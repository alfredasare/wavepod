import styled from 'styled-components';

export const SearchResultsWrapper = styled.div`
	width: 90%;
	margin: 80px auto;

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		width: 70%;
	}

	@media screen and (min-width: 1025px) and (max-width: 1440px) {
		width: 50%;
	}

	@media screen and (min-width: 1441px) {
		width: 45%;
	}

	h3 {
		font-weight: 400;
		margin-bottom: 30px;
		margin-top: 40px;
	}
`;

export const ShowWrapper = styled.div`
	padding-bottom: 60px;
`;
