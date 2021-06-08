import styled from 'styled-components';

export const AboutWrapper = styled.section`
	width: 100%;
	margin: 60px auto 60px auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-items: center;

	@media screen and (max-width: 767px) {
		grid-template-columns: 1fr;
	}

	@media screen and (min-width: 768px) and (max-width: 1200px) {
		margin: 0 auto 60px auto;
		grid-template-columns: 1fr;
	}

	@media screen and (min-width: 1101px) and (max-width: 1999px) {
		margin: 320px auto 90px auto;
	}

	@media screen and (min-width: 2000px) {
		margin: 90px auto 90px auto;
		width: 82%;
	}
`;

export const AboutContent = styled.div`
	width: 80%;
	margin: 0 auto;
	//text-align: center;

	@media screen and (min-width: 769px) and (max-width: 1100px) {
		width: 85%;
	}

	@media screen and (min-width: 1101px) {
		width: 80%;
	}
`;

export const AboutGridWrapper = styled.div`
	//width: 80%;
`;

export const AboutGridDesktop = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		display: block;
	}
`;

export const AboutGridMobile = styled.div`
	display: none;

	@media screen and (max-width: 767px) {
		display: block;
	}

	img {
		@media screen and (max-width: 767px) {
			width: 100vw;
		}
	}
`;
