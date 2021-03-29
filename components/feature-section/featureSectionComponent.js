import Link from 'next/link';

import {
	FeatureImageWrapper,
	FeatureSectionWrapper,
	FeatureTextWrapper,
} from './featureSectionStyles';

const FeatureSection = ({ img, heading, text }) => {
	return (
		<FeatureSectionWrapper>
			<FeatureImageWrapper>
				<img src={img} alt='woman enjoying podcast' />
			</FeatureImageWrapper>

			<FeatureTextWrapper>
				<h4>{heading}</h4>
				<h3>{text}</h3>
				<Link href='/podcasts'>
					<a>START LISTENING</a>
				</Link>
			</FeatureTextWrapper>
		</FeatureSectionWrapper>
	);
};

export default FeatureSection;
