import { render, screen } from '@testing-library/react';
import React from 'react';

import Home from '../index';

describe('HomePage', () => {
	it('should render the heading', () => {
		render(<Home />);

		const heading = screen.getByText(/Is it working/i);

		expect(heading).toBeInTheDocument();
	});
});
