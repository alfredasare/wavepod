import styled, { css } from 'styled-components';

import { typography } from '@/utils/typography';

export const Paragraph = styled.p`
	font-size: ${typography.paragraph};
	display: block;
	line-height: 180%;
	${props =>
		props.right &&
		css`
			text-align: right;
		`}
`;
