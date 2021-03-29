import styled from 'styled-components';

import { palette } from '@/utils/index';

export const FooterWrapper = styled.footer`
	height: 100%;
	padding-bottom: 60px;
	background: ${palette.richBlack};
	color: ${palette.white};
`;

export const FirstRow = styled.div`
	width: 90%;
	margin: 0 auto;
	padding-top: 50px;
	padding-bottom: 30px;

	div {
		width: 100px;
	}
`;

export const SecondRow = styled.div`
	margin-top: 40px;
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column-reverse;
	padding-top: 40px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		padding-top: 40px;
	}
`;

export const CopyrightColumn = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
	padding-top: 50px;

	span {
		flex-basis: 100%;
	}

	a {
		color: white;
		margin-right: 18px;
		margin-top: 25px;
	}

	@media screen and (min-width: 768px) {
		padding-top: unset;
	}
`;

export const Contact = styled.div`
	h2 {
		font-size: 1.3rem;
		font-weight: 400;
	}

	h4 {
		font-size: 1.1rem;
		margin-top: 10px;
	}

	h4 + h4 {
		display: inline;
	}

	a {
		color: white;
		font-weight: bold;

		&:hover {
			text-decoration: dotted;
		}
	}
`;
