import styled from 'styled-components';

import { palette } from '@/utils/colors';

export const PodcastItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	//align-items: center;
`;

export const PodcastImageWrapper = styled.div`
	height: 110px;
	width: 110px;
	margin-bottom: 10px;

	img {
		height: 100%;
		width: 100%;
		border-radius: 8px;
		object-fit: cover;
		object-position: center;
	}
`;

export const PodcastTitleContainer = styled.div`
	width: 110px;
	p {
		color: ${palette.black};
		margin: 0;
		font-weight: 400;
		font-size: 0.9rem;
		display: inline-block;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;

		&:nth-child(2) {
			color: rgba(0, 0, 0, 0.5);
			margin-bottom: 20px;
		}
	}
`;
