import Head from 'next/head';
import React from 'react';

class ErrorBoundaryMain extends React.Component {
	constructor() {
		super();

		this.state = {
			hasErrored: false,
		};
	}

	//  eslint-disable-next-line
	static getDerivedStateFromError(error) {
		return {
			hasErrored: true,
		};
	}

	//  eslint-disable-next-line
	componentDidCatch(error, errorInfo) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<>
					<Head>
						<title>Something went wrong</title>
					</Head>
					<h1>ERROR!!!</h1>
				</>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundaryMain;
