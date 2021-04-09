import styled from 'styled-components';

export const PodcastDetailsContentWrapper = styled.div`
	width: 90%;
	margin: 100px auto;
	height: 100vh;

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

export const PodcastDetailsHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const PodcastDetailsHeaderLeftColumn = styled.div``;

export const PodcastDetailsTitle = styled.h2`
	font-size: 1.2rem;
	font-weight: bold;
`;

export const PodcastDetailsChannelName = styled.h5`
	font-weight: bold;
	font-size: 0.8rem;
	margin-top: 10px;
	color: rgba(0, 0, 0, 0.8);
`;

export const PodcastDetailsButtonRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-top: 20px;
`;

export const PodcastDetailsButton = styled.a`
	font-size: 0.875rem;
	color: black;
	font-weight: 400;
	padding: 4px 10px;
	border: 2px solid rgba(0, 0, 0, 0.3);
	border-radius: 30px;
	cursor: pointer;

	&:nth-child(2) {
		margin-left: 20px;
	}
`;

export const PodcastDetailsChannelImage = styled.div`
	width: 100px;
	height: 100px;
	min-width: 100px;
	border-radius: 8px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		border-radius: inherit;
	}
`;

export const PodcastDetailsSummary = styled.div`
	margin-top: 30px;
	p {
		font-size: 0.875rem;
		font-weight: 400;
	}
`;

export const AvailableEpisodesWrapper = styled.div`
	margin-top: 40px;
	h3 {
		font-weight: 400;
	}
`;
