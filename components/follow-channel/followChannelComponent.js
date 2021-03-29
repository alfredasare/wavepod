import Link from 'next/link';

import { HeaderFour, HeaderThree } from '@/components/typography/headers';

import {
	FollowChannelImageWrapper,
	FollowChannelText,
	FollowChannelWrapper,
} from './followChannelStyles';

const FollowChannel = () => {
	return (
		<FollowChannelWrapper>
			<FollowChannelText>
				<HeaderFour>FOLLOW YOUR FAVOURITE CHANNELS</HeaderFour>
				<HeaderThree>
					Subscribe to your favourite channels so you never miss the latest
					episodes of your favourite shows
				</HeaderThree>
				<Link href='/'>
					<a>VIEW CHANNELS</a>
				</Link>
			</FollowChannelText>

			<FollowChannelImageWrapper>
				<img
					src='/images/nadine-shaabana-U_z9Y0rEIJc-unsplash (1).jpg'
					alt=''
				/>
			</FollowChannelImageWrapper>
		</FollowChannelWrapper>
	);
};

export default FollowChannel;
