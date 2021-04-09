import styled from 'styled-components';

export const EpisodeSearchItemWrapper = styled.div`
	padding-bottom: 10px;
	margin-bottom: 40px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	color: black;

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
	}
`;

export const ImageColumn = styled.div`
	height: 100%;
	width: 120px;

	img {
		border-radius: 10px;
		width: 100%;
		height: 120px;
	}
	@media screen and (max-width: 767px) {
		display: none;
	}

	@media screen and (min-width: 768px) {
		width: 120px;
	}
`;

export const TextColumn = styled.div`
	@media screen and (min-width: 768px) {
		width: 73%;
		margin-left: 8%;
	}
`;

export const ImageShowDateWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const PhoneImage = styled.div`
	height: 60px;
	width: 60px;
	margin-right: 30px;
	border-radius: 10px;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 10px;
	}
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export const TextColumnShow = styled.div`
	font-size: 0.85rem;
	font-weight: 400;
	margin-bottom: 8px;
`;

export const TextColumnDate = styled.div`
	font-size: 0.8rem;
	font-weight: 400;
`;

export const TextColumnTitle = styled.h3`
	font-weight: 600 !important;
	margin-top: 20px !important;
	font-size: 1.02rem;
`;

export const TextColumnSummary = styled.p`
	font-size: 0.9rem;
	font-weight: 400;
	max-height: 40px;
	margin-top: -18px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: pre-line;
	line-height: 1.25rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	letter-spacing: 0.01428571em;
`;
