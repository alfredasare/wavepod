import styled, { css } from 'styled-components';
import { typography } from '@/utils/typography';

export const Container = styled.div`
	width: 90%;
	margin: 0 auto;
	flex-grow: 1;
	height: 100%;
	align-items: center;
	justify-content: center;

	${({ fluid }) =>
		fluid &&
		css`
			padding: 0;
			margin: 0;
			width: 100% !important;
		`};

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		width: 70%;
	}

	@media screen and (min-width: 1025px) and (max-width: 1440px) {
		width: 50%;
	}

	@media screen and (min-width: 1441px) {
		width: 33%;
	}
`;

export const HeaderOne = styled.h1`
	font-size: ${typography.headerTwo};
	display: block;
	line-height: 120%;
	font-weight: bold;
	@media only screen and (min-width: 600px) {
		font-size: ${typography.headerOne};
	}
`;

export const HeaderTwo = styled.h2`
	font-size: ${typography.headerThree};
	display: block;
	line-height: 120%;
	font-weight: bold;
	@media only screen and (min-width: 600px) {
		font-size: ${typography.headerTwo};
	}
`;

export const HeaderThree = styled.h3`
	font-size: ${typography.headerFour};
	text-align: left;
	display: block;
	line-height: 140%;
	font-weight: bold;
	@media only screen and (min-width: 600px) {
		font-size: ${typography.headerThree};
	}
`;

export const HeaderFour = styled.h4`
	font-size: ${typography.headerFive};
	text-align: left;
	display: block;
	line-height: 140%;
	font-weight: 600;
	@media only screen and (min-width: 600px) {
		font-size: ${typography.headerFour};
	}
`;

export const HeaderFive = styled.h5`
	font-size: ${typography.paragraph};
	text-align: left;
	display: block;
	line-height: 150%;
	font-weight: 600;
	@media only screen and (min-width: 600px) {
		font-size: ${typography.headerFive};
	}
`;

export const Paragraph = styled.p`
	font-size: ${typography.paragraph};
	display: block;
	line-height: 180%;
	${props =>
		props.right &&
		css`
			text-align: right;
		`}
`;

export const Small = styled.small`
	font-size: ${typography.small};
	display: block;
	line-height: 150%;
`;
