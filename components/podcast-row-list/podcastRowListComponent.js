import { v4 } from 'uuid';

import PodcastRow from '@/components/podcast-row/podcastRowComponent';

import { ProductListRowWrapper } from './podcastRowListStyles';

const PodcastRowList = () => {
	return (
		<ProductListRowWrapper>
			{[
				'Top podcasts',
				'Trending podcasts',
				'Top podcasts in Society & Culture',
				'Top podcasts in Arts',
				'Top podcasts in Tech',
			].map(item => (
				<PodcastRow key={v4()} title={item} />
			))}
		</ProductListRowWrapper>
	);
};

export default PodcastRowList;
