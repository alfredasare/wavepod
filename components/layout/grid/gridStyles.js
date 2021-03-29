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
			display: grid;
		`;
	} else {
		return css`
			display: ${display};
		`;
	}
};

const gridGap = gap => {
	return css`
		grid-gap: ${gap};
	`;
};

const gridTemplateColumns = template => {
	return css`
		grid-template-columns: ${template};
	`;
};

const gridTemplateRows = template => {
	return css`
		grid-template-rows: ${template};
	`;
};

const gridAutoFlow = flow => {
	return css`
		grid-auto-flow: ${flow};
	`;
};

const alignItems = alignment => {
	return css`
		align-items: ${alignment};
	`;
};

const alignContent = alignment => {
	return css`
		align-content: ${alignment};
	`;
};

const justifyItems = justify => {
	return css`
		justify-items: ${justify};
	`;
};

const justifyContent = justify => {
	return css`
		justify-content: ${justify};
	`;
};

const position = position => {
	return css`
		position: ${position};
	`;
};

export const GridStyles = styled.div`
	${({ width, height }) => (width || height) && size(width, height)};
	${props => applyRules(props, 'display', display)};
	${props => applyRules(props, 'gridGap', gridGap)};
	${props => applyRules(props, 'gridTemplateColumns', gridTemplateColumns)};
	${props => applyRules(props, 'gridTemplateRows', gridTemplateRows)};
	${props => applyRules(props, 'gridAutoFlow', gridAutoFlow)};
	${props => applyRules(props, 'alignItems', alignItems)};
	${props => applyRules(props, 'alignContent', alignContent)};
	${props => applyRules(props, 'justifyItems', justifyItems)};
	${props => applyRules(props, 'justifyContent', justifyContent)};
	${props => applyRules(props, 'position', position)};
`;
