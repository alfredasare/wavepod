import 'moment-duration-format';

import moment from 'moment';
import { useState } from 'react';

const useFormatTime = url => {
	const [time, setTime] = useState('');

	const formatDuration = duration => {
		return moment.duration(duration, 'seconds').format('mm', { trim: false });
	};

	const audio = new Audio(url);
	audio.preload = 'metadata';
	audio.addEventListener('loadedmetadata', () => {
		setTime(formatDuration(audio.duration));
	});

	return {
		time,
	};
};

export default useFormatTime;
