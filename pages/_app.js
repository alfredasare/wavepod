import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import NavBar from '@/components/navbar/navbarComponent';
import { GlobalStyle } from '@/global/Global';

import { persistor, store } from '../lib/redux/store';

const MobilePlayerComponent = dynamic(
	() => import('../components/mobile-player/mobilePlayerComponent'),
	{ ssr: false },
);

const DesktopPlayerComponent = dynamic(
	() => import('../components/desktop-player/desktopPlayerComponent'),
	{ ssr: false },
);

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<GlobalStyle />
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'
					/>
					<script
						src='https://code.jquery.com/jquery-3.4.1.slim.min.js'
						integrity='sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n'
						crossOrigin='anonymous'
					/>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='manifest' href='/site.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
					<meta name='msapplication-TileColor' content='#da532c' />
					<meta name='theme-color' content='#ffffff' />
				</Head>
				<NavBar />
				{router.pathname === '/' ? (
					<></>
				) : (
					<>
						<MobilePlayerComponent />
						<DesktopPlayerComponent />
					</>
				)}
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
