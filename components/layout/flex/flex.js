import PropTypes from 'prop-types';

import { FlexStyles } from '@/components/layout/flex/flexStyles';

const Flex = props => {
	return <FlexStyles {...props}>{props.children}</FlexStyles>;
};

Flex.propTypes = {
	display: PropTypes.string,
	alignItems: PropTypes.string,
	position: PropTypes.string,
	flexDirection: PropTypes.string,
	flexWrap: PropTypes.string,
	flexBasis: PropTypes.string,
	flexGrow: PropTypes.string,
	flexShrink: PropTypes.string,
	justifyContent: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
};

export default Flex;
