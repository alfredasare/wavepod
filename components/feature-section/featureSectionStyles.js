import styled from 'styled-components';

import { palette } from '../../utils';

export const FeatureSectionWrapper = styled.section`
	width: 90%;
	margin: 80px auto;
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	justify-items: center;
	grid-gap: 30px;

	@media screen and (min-width: 768px) and (max-width: 999px) {
		width: 100%;
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (min-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export const FeatureImageWrapper = styled.div`
	img {
		width: 80%;
		height: 440px;
		object-fit: cover;
		object-position: center;
		margin-left: 10%;
		border-radius: 30px;
		@media screen and (min-width: 768px) and (max-width: 999px) {
			width: 70%;
			margin-left: 20%;
		}
		@media screen and (min-width: 1000px) {
			width: 60%;
			margin-left: 30%;
			min-width: 280px;
			height: 600px;
		}
	}
`;

export const FeatureTextWrapper = styled.div`
	justify-self: left;
	margin-left: 10%;

	h3 {
		font-weight: 400;
		@media screen and (min-width: 768px) {
			font-size: 2rem;
			width: 80%;
		}
	}

	h4 {
		font-weight: bold;
		margin-bottom: 20px;
		color: ${palette.radicalRed};

		@media screen and (min-width: 768px) {
		}
	}

	a {
		margin-top: 35px;
		display: inline-block;
		font-weight: bold;
		font-size: 1.05rem;
		color: ${palette.richBlack};
		border-radius: 30px;
		padding: 12px 30px;
		border: 2px solid ${palette.richBlack};
		transition: all 0.2s ease-in;

		&:hover {
			color: ${palette.radicalRed};
			border: 2px solid ${palette.radicalRed};
		}
	}
`;
