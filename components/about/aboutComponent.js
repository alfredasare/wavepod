import {
	AboutContent,
	AboutSvg,
	AboutWrapper,
} from '@/components/about/aboutStyles';
import Logo from '@/components/svg/logo';
import { HeaderFive, HeaderOne } from '@/components/typography/headers';

const About = () => {
	return (
		<AboutWrapper>
			<AboutContent>
				<HeaderOne>
					About <span>wavepod</span>
				</HeaderOne>
				<HeaderFive>
					Imagine finding all the podcasts you love to listen to, all in one
					place. This is what <span>wavepod </span>gives you right out the box.
					Just chillax and enjoy
				</HeaderFive>
				<AboutSvg>
					<Logo />
				</AboutSvg>
			</AboutContent>
		</AboutWrapper>
	);
};

export default About;
