import styled, { css } from 'styled-components';

import applyRules from '@/utils/applyRules';

const size = (width, height) => {
	if (width && !height) {
		return css`
			width: ${width};
			height: auto;
		`;
	} else if (!width && height) {
		return css`
			width: 100%;
			height: ${height};
		`;
	} else if (!width && !height) {
		return css`
			width: 100%;
			height: auto;
		`;
	} else {
		return css`
			width: ${width};
			height: ${height};
		`;
	}
};

const margin = values => {
	console.log(values);
	if (!values) {
		return css`
			margin: 0 auto;
		`;
	} else {
		return css`
			margin: ${values};
		`;
	}
};

const padding = values => {
	return css`
		padding: ${values};
	`;
};

const isFluid = fluid => {
	if (fluid) {
		return css`
			padding: 0;
			margin: 0;
			width: 100% !important;
		`;
	}
};

const centerContent = isCentered => {
	if (isCentered) {
		return css`
			display: flex;
			align-items: center;
			flex-direction: column;
		`;
	}
};

export const ContainerStyles = styled.div`
	margin: 0 auto;

	${({ width, height }) => (width || height) && size(width, height)};
	${props => applyRules(props, 'margin', margin)};
	${props => applyRules(props, 'padding', padding)};
	${props => applyRules(props, 'fluid', isFluid)};
	${props => applyRules(props, 'centerContent', centerContent)};

	@media screen and (min-width: 768px) and (max-width: 1024px) {
		//width: 70%;
	}

	@media screen and (min-width: 1025px) and (max-width: 1440px) {
		//width: 50%;
	}

	@media screen and (min-width: 1441px) {
		width: 90%;
	}
`;
