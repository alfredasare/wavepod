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

const display = display => {
	if (!display) {
		return css`
			display: flex;
		`;
	} else {
		return css`
			display: ${display};
		`;
	}
};

const alignItems = alignment => {
	return css`
		align-items: ${alignment};
	`;
};

const position = position => {
	return css`
		position: ${position};
	`;
};

const flexDirection = direction => {
	return css`
		flex-direction: ${direction};
	`;
};

const flexWrap = wrap => {
	return css`
		flex-wrap: ${wrap};
	`;
};

const flexBasis = basis => {
	return css`
		flex-basis: ${basis};
	`;
};

const flexGrow = grow => {
	return css`
		flex-grow: ${grow};
	`;
};

const flexShrink = shrink => {
	return css`
		flex-shrink: ${shrink};
	`;
};

const justifyContent = content => {
	return css`
		justify-content: ${content};
	`;
};

export const FlexStyles = styled.div`
	${({ width, height }) => (width || height) && size(width, height)};
	${props => applyRules(props, 'display', display)};
	${props => applyRules(props, 'alignItems', alignItems)};
	${props => applyRules(props, 'position', position)};
	${props => applyRules(props, 'flexDirection', flexDirection)};
	${props => applyRules(props, 'flexWrap', flexWrap)};
	${props => applyRules(props, 'flexBasis', flexBasis)};
	${props => applyRules(props, 'flexGrow', flexGrow)};
	${props => applyRules(props, 'flexShrink', flexShrink)};
	${props => applyRules(props, 'justifyContent', justifyContent)};
`;
