import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import PodcastItem from '@/components/podcast-item/podcastItemComponent';

import { PodcastListWrapper } from './podcastListStyles';

const Carousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const PodcastList = ({ items }) => {
	const options = {
		loop: false,
		responsive: {
			0: {
				items: 3,
				margin: 120,
			},
			281: {
				items: 3,
				margin: 70,
			},
			321: {
				items: 3,
				margin: 40,
			},
			500: {
				items: 4,
				margin: 30,
			},
			768: {
				items: 4,
				margin: 30,
			},
			1024: {
				items: 5,
				margin: 30,
			},
			1200: {
				items: 5,
				margin: 50,
			},
			1440: {
				items: 5,
				margin: 10,
			},
			2000: {
				items: 5,
				margin: -150,
			},
		},
	};

	return (
		<PodcastListWrapper>
			<Carousel className='owl-theme' {...options}>
				{items.map(() => {
					return (
						<div key={v4()} className='item'>
							<PodcastItem id={v4()} />
						</div>
					);
				})}
			</Carousel>
		</PodcastListWrapper>
	);
};

PodcastList.propTypes = {
	items: PropTypes.array,
};

export default PodcastList;
