import styled from 'styled-components';

export const MobilePlayerContainer = styled.div`
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export const MobilePlayerOverlay = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.6);
	left: 0;
	top: 0;
	z-index: 4;
	display: ${({ expanded }) => (expanded ? 'block' : 'none')};
`;

export const MobilePlayer = styled.div`
	height: 258px;
	width: 100%;
	position: fixed;
	bottom: 0;
	transform: ${({ expanded }) =>
		expanded ? 'translateY(0)' : 'translateY(201px)'};
	transition: transform 0.4s ease 0s;
	z-index: 100;
	background-color: #f8f9fa;
	box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
		0 3px 5px -1px rgba(0, 0, 0, 0.2);
`;

export const DetailsRow = styled.div`
	height: 57px;
	width: 100%;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const DetailsImg = styled.div`
	width: 17.5%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 44px;
		height: 44px;
		object-fit: cover;
		object-position: center;
		border-radius: 8px;
	}
`;

export const DetailsText = styled.div`
	width: 65%;
	height: 100%;
	overflow: hidden;
`;

export const Title = styled.div`
	font-size: 0.875rem;
	letter-spacing: 0.01785714em;
	font-weight: 600;
	line-height: 1.25rem;
	color: #202124;
	display: inline-block;
	overflow: hidden;
	margin-top: 8px;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
`;

export const Subtitle = styled.div`
	font-size: 0.75rem;
	font-weight: 400;
	margin-top: 5px;
`;

export const DetailsIcon = styled.div`
	width: 17.5%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Caret = styled.div`
	font-size: 27px;
	font-weight: 400;
	transform: rotate(90deg);
`;

export const SeekerRow = styled.div`
	width: 80%;
	margin: 11px auto 0 auto;
	height: 81px;
`;

export const RangeSlider = styled.div`
	height: 52px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const DurationRow = styled.div`
	height: 14px;
	padding: 4px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		font-size: 0.7rem;
		font-weight: 400;
	}
`;

export const ControlsRow = styled.div`
	width: 100%;
	height: 64px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

export const MobileControlIcon = styled.span`
	width: 48px;
	height: 48px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const MiscRow = styled.div`
	width: 100%;
	height: 56px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
`;
