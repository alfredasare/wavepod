import styled from 'styled-components';

import { palette } from '@/utils/colors';

export const PlayButtonWithTime = styled.div`
	width: 95px;
	height: 35px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 20px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 20px;
	padding-left: 10px;

	span {
		font-size: 0.8rem;
		color: ${palette.black};
		font-weight: 400;
		margin-left: 8px;
	}
`;
