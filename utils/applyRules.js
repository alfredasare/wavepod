import { css } from 'styled-components';

const applyRules = (props, rule, cb) => {
	if (rule in props) {
		return cb(props[rule]);
	} else {
		return css``;
	}
};

export default applyRules;
