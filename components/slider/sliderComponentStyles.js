import styled from 'styled-components';

import { palette } from '@/utils/colors';

export const SliderWrapper = styled.div`
	user-select: none;
	width: 100%;
	display: flex;
	align-items: center;
`;

export const ProgressBarContainer = styled.div`
	padding: 25px 0;
	width: 100%;
	cursor: pointer;
`;

export const BarProgress = styled.div`
	flex: 1;
	border-radius: 5px;
	margin: 0 20px;
	height: 2px;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: 0.1s all ease-out;

	@media screen and (min-width: 768px) {
		margin: 0;
	}
`;

export const ProgressKnob = styled.span`
	position: relative;
	height: 12px;
	width: 12px;
	border-radius: 50%;
	background-color: ${palette.radicalRed};
	transition: 0.1s all ease-out;
`;
