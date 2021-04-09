import styled from 'styled-components';

import { palette } from '@/utils/colors';
import { typography } from '@/utils/typography';

export const SearchWrapper = styled.header`
	margin-top: 70px;
	height: 60vh;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		height: 40vh;
	}

	@media screen and (min-width: 1025px) {
		height: 50vh;
	}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/images/juja-han-HU-uL54pfQI-unsplash.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		filter: brightness(40%);
	}
`;

export const MainSearchContent = styled.div`
	position: relative;
	width: 80%;
	text-align: left;
	color: ${palette.white};

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		width: 65%;
	}

	@media screen and (min-width: 1025px) {
		width: 50%;
	}
`;

export const MainHeader = styled.h1`
	font-weight: bold;
`;

export const MainContent = styled.div`
	font-size: 1.2rem;
	line-height: 0.8rem;
	font-weight: 600;

	p {
		line-height: 1em;
	}
	@media screen and (min-width: 768px) {
		font-size: ${typography.headerFive};
	}
`;

export const SearchForm = styled.form`
	margin-top: 40px;
	margin-bottom: 30px;
	border-radius: 4px;
	background-color: #f5f5f5;
	height: 54px;
	display: flex;
	position: relative;
	transition: all 0.1s ease-in-out;
`;

export const SearchButton = styled.button`
	display: flex;
	align-items: center;
	box-shadow: none;
	border: none;
	padding: 0;
	background-color: transparent;
	text-align: inherit;

	&:hover {
		box-shadow: none;
	}
`;

export const ButtonIcon = styled.i`
	width: 20px;
	height: 20px;
	padding-left: 14px;
	box-sizing: content-box;
	color: #767676;
	transition: fill 0.1s ease-in-out;

	&:before {
		line-height: 20px;
	}
`;

export const SearchInputContainer = styled.div`
	flex-grow: 1;
	display: flex;
`;

export const SearchInput = styled.input`
	box-shadow: none;
	padding-left: 14px;
	padding-right: 14px;
	flex-grow: 1;
	width: 100%;
	background: none;
	border: none;
	color: #111;
	font-size: 0.9rem;

	&:focus {
		outline: none;
	}
`;
