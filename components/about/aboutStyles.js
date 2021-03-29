import styled from 'styled-components';

export const AboutWrapper = styled.section`
	//margin-top: 200px;
	width: 80%;
	margin: 60px auto 60px auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 769px) and (max-width: 1100px) {
		margin: 0 auto 60px auto;
	}

	@media screen and (min-width: 1101px) {
		margin: 280px auto 60px auto;
	}
`;

export const AboutContent = styled.div`
	width: 90%;
	margin: 0 auto;
	text-align: center;

	@media screen and (min-width: 769px) and (max-width: 1100px) {
		width: 85%;
	}

	@media screen and (min-width: 1101px) {
		width: 80%;
	}
`;

export const AboutSvg = styled.div`
	width: 90%;
	margin: 80px auto;

	@media screen and (min-width: 769px) and (max-width: 1100px) {
		width: 55%;
	}

	@media screen and (min-width: 1101px) {
		width: 50%;
	}
`;
