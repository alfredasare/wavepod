import styled from 'styled-components';

import { palette } from '@/utils/colors';

export const PodcastRowWrapper = styled.div`
	width: 90%;
	margin: 0 auto 50px auto;

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		width: 60%;
	}

	@media screen and (min-width: 1025px) and (max-width: 1440px) {
		width: 100%;
	}

	//@media screen and (min-width: 1440px) {
	//  width: 65%;
	//}

	@media screen and (min-width: 1441px) {
		width: 65%;
	}
`;

export const PodcastRowHeading = styled.h1`
	font-size: 1.4rem;
	color: ${palette.black};
	font-weight: 400;
	margin-left: 0.5%;
`;
