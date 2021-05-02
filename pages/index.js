import Head from 'next/head';

import About from '@/components/about/aboutComponent';
import FeatureSection from '@/components/feature-section/featureSectionComponent';
import FollowChannel from '@/components/follow-channel/followChannelComponent';
import Footer from '@/components/footer/footerComponent';
import Landing from '@/components/landing/landingComponent';

export default function Home() {
	return (
		<>
			<Head>
				<title>Welcome to Wavepod</title>
			</Head>
			<Landing />
			<About />
			<FeatureSection
				img='/images/pexels-ekaterina-bolovtsova-4050214 (1).jpg'
				heading='LISTEN'
				text='Just sit back, relax and keep yourself updated '
			/>
			<FollowChannel />
			<FeatureSection
				img='/images/pexels-sound-on-3756858.jpg'
				heading='LISTEN'
				text='Drown yourself in the most engaging content ever'
			/>
			<Footer />
		</>
	);
}

/* eslint-disable no-unused-vars */
export const getStaticProps = async context => {
	return {
		props: {},
	};
};
