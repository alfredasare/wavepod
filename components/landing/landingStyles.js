import styled, { css } from 'styled-components';

export const LandingWrapper = styled.header`
	height: 80vh;
	position: relative;
	margin: 70px auto;

	@media screen and (max-width: 600px) {
		height: 100%;
	}

	@media screen and (min-width: 769px) and (max-width: 1100px) {
		height: 80vh;
	}

	@media screen and (min-width: 1101px) {
		height: 100vh;
		margin-bottom: 0;
	}

	@media screen and (min-width: 2000px) {
		height: 120vh;
	}
`;

export const LandingText = styled.div`
	position: relative;
	left: 7.142vw;
	padding-bottom: 64px;
	padding-top: 160px;
	width: 85.714vw;

	@media screen and (min-width: 769px) and (max-width: 1100px) {
		padding-top: calc(21.428vw + 96px);
		left: 14.285vw;
		max-width: 571.424px;
		padding-bottom: 96px;
		width: 35.714vw;
	}

	@media screen and (min-width: 1101px) {
		left: 14.285vw;
		max-width: 571.424px;
		padding-bottom: 96px;
		padding-top: calc(21.428vw + 40px);
		width: 35.714vw;
	}
`;

export const ImagesWrapper = styled.div`
	overflow-y: hidden;
	height: calc(1.25 * 71.428vw);

	@media screen and (min-width: 769px) {
		height: auto;
	}
`;

export const HorizontalScrollView = styled.div`
	display: flex;
	height: calc(1.25 * 71.428vw + 40px);
	overflow-x: scroll;

	@media screen and (min-width: 769px) {
		height: auto;
		display: block;
		overflow-x: hidden;
	}
`;

const horizontalImageWrapper = css`
	min-width: 71.428vw;
	overflow: hidden;

	@media screen and (min-width: 769px) {
		min-width: unset;
	}

	img {
		height: 400px;
		max-width: none;
		object-fit: cover;
		object-position: center;
		width: 100%;
	}
`;

export const FirstHorizontal = styled.div`
	${horizontalImageWrapper};
	padding-right: 7.142vw;

	@media screen and (min-width: 769px) {
		position: absolute;
		top: 0;
		left: 14.285vw;
		width: 30vw;
		height: 290px;
	}
`;

export const SecondHorizontal = styled.div`
	${horizontalImageWrapper};
	padding-right: 7.142vw;

	@media screen and (min-width: 769px) and (max-width: 1100px) {
		position: absolute;
		top: 120px;
		right: 0;
		width: 35vw;
		padding-right: 0;

		img {
			height: 60vh;
		}
	}

	@media screen and (min-width: 1101px) {
		position: absolute;
		top: 120px;
		right: 0;
		width: 30vw;
		padding-right: 0;

		img {
			height: 70vh;
		}
	}
`;

export const ThirdHorizontal = styled.div`
	${horizontalImageWrapper};

	@media screen and (min-width: 769px) {
		position: absolute;
		left: 7.142vw;
		width: 30vw;
		height: 400px;
	}
`;
