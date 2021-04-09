import styled from 'styled-components';

import { palette } from '@/utils/colors';

export const EpisodeDetailsContentWrapper = styled.div`
	width: 90%;
	margin: 100px auto;

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

export const EpisodeDetailsHeader = styled.div`
	margin-bottom: 70px;
`;

export const ShowLink = styled.a`
	font-size: 0.8rem;
	font-weight: 400;
	color: ${palette.radicalRed};
	cursor: pointer;
`;

export const EpisodeHeaderTitle = styled.h3`
	font-weight: 600;
	margin-top: 15px;
`;

export const EpisodeDateAndDuration = styled.div`
	font-weight: 400;
	font-size: 0.875rem;
	margin-top: 10px;
`;

export const PlayEpisodeButton = styled.div`
	width: 250px;
	margin-top: 25px;
	margin-bottom: 25px;
	background-color: ${palette.radicalRed};
	color: ${palette.white};
	font-weight: 600;
	height: 35px;
	border-radius: 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 0.8rem;
	cursor: pointer;
	position: relative;
`;

export const PlayEpisodeButtonProgress = styled.div`
	width: ${({ width }) => width};
	height: 35px;
	border-radius: 20px;
	background-color: rgb(152, 3, 70);
	position: absolute;
	left: 0;
`;

export const PlayIcon = styled.span`
	z-index: 10;
`;

export const PlayText = styled.span`
	margin-left: 8px;
	z-index: 10;
`;

export const EpisodeHeaderSummary = styled.p`
	font-weight: 400;
	font-size: 0.875rem;
	margin-top: 20px;
`;
