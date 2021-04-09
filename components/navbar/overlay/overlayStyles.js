import styled from 'styled-components';

import { palette } from '@/utils/colors';
import { typography } from '@/utils/typography';

export const Overlay = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
	position: fixed;
	top: 0;
	display: ${({ open }) => (open ? 'flex' : 'none')};
`;

export const OverlayMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${palette.black};
	height: 100vh;
	width: 50%;
	padding: 2rem;
	position: absolute;
	top: 0;
	right: 0;
	left: 50%;
	z-index: 5;
	transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
	transition: transform 0.3s ease-in-out;
	animation: ${({ open }) =>
		open ? 'fade-in 0.6s ease-in-out' : 'fade-out 0.6s ease-in-out'};
	& > :nth-child(even) > * {
		animation: ${({ open }) =>
			open
				? 'fade-in 1.0s ease-in-out 0.3s both,' +
				  'color-change 0.5s ease-out 1.3s both'
				: 'none'};
	}
	& > :nth-child(odd) > * {
		animation: ${({ open }) =>
			open
				? 'fade-in 1.0s ease-in-out 0.3s both,' +
				  'color-change 0.5s ease-out 1.3s both'
				: 'none'};
	}

	@media screen and (max-width: 600px) {
		left: 0;
		width: 100%;
	}
`;

export const MenuContent = styled.h4`
	color: ${palette.white};
	font-size: ${typography.headerFive};
	margin-bottom: 10vh;
	cursor: pointer;

	@media only screen and (min-width: 600px) {
		font-size: ${typography.headerTwo};
	}
`;
