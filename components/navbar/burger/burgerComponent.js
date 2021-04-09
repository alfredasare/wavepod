import PropTypes from 'prop-types';

import { StyledBurger } from '@/components/navbar/burger/burgerStyles';

const Burger = ({ open, setOpen }) => {
	return (
		<StyledBurger
			aria-label='Toggle menu'
			aria-expanded={open}
			open={open}
			onClick={() => setOpen(!open)}
		>
			<span />
			<span />
			<span />
		</StyledBurger>
	);
};

Burger.propTypes = {
	open: PropTypes.bool,
	setOpen: PropTypes.func,
};

export default Burger;
