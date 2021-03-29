import styled, { css } from 'styled-components';

import applyRules from '@/utils/applyRules';

const size = (width, height) => {
	if (width && !height) {
		return css`
			width: ${width};
		`;
	} else if (!width && height) {
		return css`
			height: ${height};
		`;
	} else {
		return css`
			width: ${width};
			height: ${height};
		`;
	}
};

const backGroundColor = color => {
	return css`
		background-color: ${color};
	`;
};

const borderWidth = width => {
	return css`
		border-width: ${width};
	`;
};

const borderStyle = style => {
	return css`
		border-style: ${style};
	`;
};

const borderColor = color => {
	return css`
		border-color: ${color};
	`;
};

const borderRadius = radius => {
	return css`
		border-radius: ${radius};
	`;
};

const margin = values => {
	return css`
		margin: ${values};
	`;
};

const padding = values => {
	return css`
		padding: ${values};
	`;
};

const color = color => {
	return css`
		color: ${color};
	`;
};

const boxShadow = values => {
	return css`
		box-shadow: ${values};
	`;
};

const centerContent = isCentered => {
	if (isCentered) {
		return css`
			display: flex;
			align-items: center;
			justify-content: center;
		`;
	}
};

export const BoxStyles = styled.div`
	${({ width, height }) => (width || height) && size(width, height)};
	${props => applyRules(props, 'backGroundColor', backGroundColor)};
	${props => applyRules(props, 'borderWidth', borderWidth)};
	${props => applyRules(props, 'borderStyle', borderStyle)};
	${props => applyRules(props, 'borderRadius', borderRadius)};
	${props => applyRules(props, 'borderColor', borderColor)};
	${props => applyRules(props, 'margin', margin)};
	${props => applyRules(props, 'padding', padding)};
	${props => applyRules(props, 'color', color)};
	${props => applyRules(props, 'boxShadow', boxShadow)};
	${props => applyRules(props, 'centerContent', centerContent)};
`;
