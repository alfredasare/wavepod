import { useRouter } from 'next/router';

import PodcastDetailsContent from '@/components/podcast-details/podcastDetailsComponent';

const PodcastDetails = () => {
	const router = useRouter();
	const { channelId } = router.query;

	return (
		<>
			<PodcastDetailsContent channelId={channelId} />
		</>
	);
};

export default PodcastDetails;
