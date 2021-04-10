import PropTypes from 'prop-types';

const Pause = ({ fill, width, height, onClick }) => {
	return (
		<svg
			version='1.1'
			id='Capa_1'
			xmlns='http://www.w3.org/2000/svg'
			fill={fill}
			width={width}
			height={height}
			viewBox='0 0 477.867 477.867'
			x='0px'
			y='0px'
			onClick={onClick}
		>
			<path
				d='M187.733,0H51.2c-9.426,0-17.067,7.641-17.067,17.067V460.8c0,9.426,7.641,17.067,17.067,17.067h136.533
			c9.426,0,17.067-7.641,17.067-17.067V17.067C204.8,7.641,197.159,0,187.733,0z'
			/>
			<path
				d='M426.667,0H290.133c-9.426,0-17.067,7.641-17.067,17.067V460.8c0,9.426,7.641,17.067,17.067,17.067h136.533
			c9.426,0,17.067-7.641,17.067-17.067V17.067C443.733,7.641,436.092,0,426.667,0z'
			/>
		</svg>
	);
};

Pause.propTypes = {
	fill: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	onClick: PropTypes.func,
};

export default Pause;
