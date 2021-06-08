import styled from 'styled-components';

import { palette } from '@/utils/colors';

export const FollowChannelWrapper = styled.section`
	//height: 100vh;
	background-color: #262626;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	padding: 5px;

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		height: 50vh;
		align-items: center;
	}

	@media screen and (min-width: 1025px) {
		grid-template-columns: 1fr 1fr;
		height: 80vh;
		align-items: center;
	}

	@media screen and (min-width: 2000px) {
		height: auto;
	}
`;

export const FollowChannelText = styled.div`
	color: ${palette.white};
	padding: 40px 15px 40px 15px;
	order: 2;

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		order: 1;
		padding-left: 50px;
	}

	@media screen and (min-width: 1025px) {
		padding-left: 150px;
	}

	h4 {
		font-weight: bold;
		margin-bottom: 15px;

		@media screen and (min-width: 768px) and (max-width: 1024px) {
			margin-bottom: 30px;
		}

		@media screen and (min-width: 1025px) {
			font-size: 1.5rem;
			margin-bottom: 40px;
		}
	}

	h3 {
		font-weight: 400;

		@media screen and (min-width: 768px) and (max-width: 1024px) {
			font-size: 1.7rem;
		}

		@media screen and (min-width: 1025px) {
			font-size: 1.6rem;
		}
	}

	a {
		margin-top: 35px;
		display: inline-block;
		font-weight: bold;
		font-size: 1.05rem;
		color: ${palette.white};
		border-radius: 30px;
		padding: 12px 30px;
		border: 2px solid ${palette.white};

		@media screen and (min-width: 768px) and (max-width: 1024px) {
		}
	}
`;

export const FollowChannelImageWrapper = styled.div`
	order: 1;
	height: 100%;

	@media screen and (min-width: 768px) {
		order: 2;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;
