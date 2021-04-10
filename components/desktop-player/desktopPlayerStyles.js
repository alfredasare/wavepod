import styled from 'styled-components';

export const DesktopPlayerContainer = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		display: block;
	}
`;

export const DesktopPlayer = styled.div`
	height: 88px;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 100;
	background-color: #f8f9fa;
	box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
		0 3px 5px -1px rgba(0, 0, 0, 0.2);
`;

export const SliderContainer = styled.div`
	width: 100%;
	height: 48px;
	margin: -26px 0 0 0;
	position: absolute;
`;

export const MainContainer = styled.div`
	display: flex;
	align-items: center;
	-webkit-box-align: center;
	height: 100%;
`;

export const TitleColumn = styled.div`
	display: flex;
	flex-grow: 1;
	flex-basis: 200px;
	width: 200px;
	height: 100%;
`;

export const TitleImage = styled.div`
	flex: 0;
	height: 50px;
	min-width: 50px;
	margin-top: 19px;
	margin-bottom: 19px;
	margin-left: 19px;
	cursor: pointer;

	img {
		object-position: center;
		object-fit: cover;
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
`;

export const TitleContent = styled.div`
	width: 100%;
	margin-left: 21px;
	margin-top: 15px;
	overflow: hidden;
	flex: 1;
	min-width: 0;
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
	font-weight: 600;
	margin-top: 5px;
`;

export const MainControlsColumn = styled.div`
	height: 100%;
	flex-grow: 1;
`;

export const MainControls = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	width: 210px;
	margin: auto;

	svg {
		cursor: pointer;
	}
`;

export const OtherControlsColumn = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-grow: 1;
	flex-basis: 200px;
	width: 200px;
	height: 100%;
`;

export const OtherControlsVolume = styled.div``;

export const OtherControlsDuration = styled.div`
	font-size: 0.75rem;
	font-weight: 400;
	margin: 0 25px;
`;
