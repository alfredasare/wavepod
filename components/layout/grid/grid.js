import PropTypes from 'prop-types';

import { GridStyles } from '@/components/layout/grid/gridStyles';

const Grid = props => {
	return <GridStyles {...props}>{props.children}</GridStyles>;
};

Grid.propTypes = {
	display: PropTypes.string,
	gridGap: PropTypes.string,
	gridTemplateColumns: PropTypes.string,
	gridTemplateRows: PropTypes.string,
	gridAutoFlow: PropTypes.string,
	alignItems: PropTypes.string,
	alignContent: PropTypes.string,
	justifyItems: PropTypes.string,
	justifyContent: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	position: PropTypes.string,
};

export default Grid;
