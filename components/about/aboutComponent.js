import {
	AboutContent,
	AboutGridDesktop,
	AboutGridMobile,
	AboutGridWrapper,
	AboutWrapper,
} from '@/components/about/aboutStyles';
import { HeaderFive, HeaderOne } from '@/components/typography/headers';

const About = () => {
	return (
		<AboutWrapper>
			<AboutContent>
				<HeaderOne>
					What <span>wavepod</span> does
				</HeaderOne>
				<HeaderFive>
					Wavepod connects podcast hosts and producers to millions of users.
					Imagine finding all the podcasts you love to listen to, all in one
					place. This is what <span>wavepod </span>gives you right out the box.
					Just chillax and enjoy
				</HeaderFive>
			</AboutContent>
			<AboutGridWrapper>
				<AboutGridDesktop>
					<img src='/images/about-desktop.png' alt='podcast grid images' />
				</AboutGridDesktop>
				<AboutGridMobile>
					<img src='/images/about-mobile.png' alt='podcast grid images' />
				</AboutGridMobile>
			</AboutGridWrapper>
		</AboutWrapper>
	);
};

export default About;
