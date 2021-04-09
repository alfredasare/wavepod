import styled from 'styled-components';

import { palette } from '@/utils/colors';

export const EpisodeItemWrapper = styled.div`
	padding-top: 20px;

	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const DateUploaded = styled.h5`
	color: rgba(0, 0, 0, 0.9);
`;

export const EpisodeTitle = styled.h3`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-height: 22px;
	font-size: 0.875rem;
	letter-spacing: 0.01785714em;
	color: ${palette.black};
	font-weight: 700 !important;
`;

export const EpisodeSummary = styled.p`
	color: ${palette.black};
	font-size: 0.9rem;
	font-weight: 400;
	max-height: 40px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
	line-height: 1.25rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`;
