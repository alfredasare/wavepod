import Head from 'next/head';

import { Container } from '@/global/appGlobal';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>
				<Container>Is it working???</Container>
			</h1>
		</div>
	);
}
