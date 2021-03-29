import Container from '@/components/layout/container/container';
import { HeaderOne } from '@/components/typography/headers';

import {
	FirstHorizontal,
	HorizontalScrollView,
	ImagesWrapper,
	LandingText,
	LandingWrapper,
	SecondHorizontal,
	ThirdHorizontal,
} from './landingStyles';

const Landing = () => {
	return (
		<Container width='90%'>
			<LandingWrapper>
				<LandingText>
					<HeaderOne>
						Podcasts you love to listen to all in one place.
					</HeaderOne>
				</LandingText>
				<ImagesWrapper>
					<HorizontalScrollView>
						<FirstHorizontal>
							<img src='/images/aiony-haust-ZXKL4mwbSRA-unsplash.jpg' alt='' />
						</FirstHorizontal>
						<SecondHorizontal>
							<img
								src='/images/melanie-pongratz-BECWWmIuJ2k-unsplash (1).jpg'
								alt=''
							/>
						</SecondHorizontal>
						<ThirdHorizontal>
							<img src='/images/max-wolfs-yrVv6pwVp78-unsplash.jpg' alt='' />
						</ThirdHorizontal>
					</HorizontalScrollView>
				</ImagesWrapper>
			</LandingWrapper>
		</Container>
	);
};

export default Landing;
