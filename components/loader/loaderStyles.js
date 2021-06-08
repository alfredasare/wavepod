import styled from 'styled-components';

export const LoaderWrapper = styled.div`
	height: ${({ height }) => (height ? height : '100vh')};
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@keyframes pulse {
		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(1.2);
		}

		100% {
			transform: scale(1);
		}
	}

	svg {
		width: 130px;
		animation-duration: 2.5s;
		animation-name: pulse;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}
`;
