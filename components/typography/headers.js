import styled from 'styled-components';

import { palette } from '@/utils/colors';
import { typography } from '@/utils/typography';

export const HeaderOne = styled.h1`
	font-size: ${typography.headerTwo};
	display: block;
	line-height: 120%;
	font-weight: bold;
	@media only screen and (min-width: 600px) {
		font-size: ${typography.headerOne};
	}

	span {
		color: ${palette.radicalRed};
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

	span {
		color: ${palette.radicalRed};
	}
`;
