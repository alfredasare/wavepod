import PropTypes from 'prop-types';

import { ContainerStyles } from '@/components/layout/container/containerStyles';

const Container = props => {
	return <ContainerStyles {...props}>{props.children}</ContainerStyles>;
};

Container.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	fluid: PropTypes.bool,
	margin: PropTypes.string,
	padding: PropTypes.string,
	centerContent: PropTypes.bool,
};

export default Container;
