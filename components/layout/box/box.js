import PropTypes from 'prop-types';

import { BoxStyles } from '@/components/layout/box/boxStyles';

const Box = props => {
	return <BoxStyles {...props}>{props.children}</BoxStyles>;
};

Box.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	backgroundColor: PropTypes.string,
	borderWidth: PropTypes.string,
	borderStyle: PropTypes.string,
	borderColor: PropTypes.string,
	borderRadius: PropTypes.string,
	margin: PropTypes.string,
	padding: PropTypes.string,
	color: PropTypes.string,
	boxShadow: PropTypes.string,
	centerContent: PropTypes.bool,
};

export default Box;
