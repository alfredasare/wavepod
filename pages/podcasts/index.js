import dynamic from 'next/dynamic';

import PodcastRowList from '@/components/podcast-row-list/podcastRowListComponent';
import Search from '@/components/search/searchComponent';

const MobilePlayerComponent = dynamic(
	() => import('../../components/mobile-player/mobilePlayerComponent'),
	{ ssr: false },
);

const DesktopPlayerComponent = dynamic(
	() => import('../../components/desktop-player/desktopPlayerComponent'),
	{ ssr: false },
);

const Podcasts = () => {
	return (
		<>
			<Search />
			<PodcastRowList />
			<MobilePlayerComponent />
			<DesktopPlayerComponent />
		</>
	);
};

export default Podcasts;
