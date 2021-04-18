import 'moment-duration-format';

import moment from 'moment';
import { useEffect, useState } from 'react';

const usePlayer = () => {
	const [duration, setDuration] = useState();
	const [currentTime, setCurrentTime] = useState();
	const [playing, setIsPlaying] = useState(false);
	const [clickedTime, setClickedTime] = useState();
	const [toggled, setToggled] = useState(false);

	const audio = document.querySelector('#wavepod-audio');

	useEffect(() => {
		const audio = document.querySelector('#wavepod-audio');

		const setAudioData = () => {
			setDuration(audio.duration);
			setCurrentTime(audio.currentTime);
		};

		const setAudioTime = () => setCurrentTime(audio.currentTime);

		audio?.addEventListener('loadeddata', setAudioData);
		audio?.addEventListener('timeupdate', () => {
			setAudioTime();
			if (audio.currentTime === audio.duration) {
				setIsPlaying(false);
				setCurrentTime(0);
			}
		});

		if (clickedTime && clickedTime !== currentTime) {
			audio.currentTime = clickedTime;
			setClickedTime(null);
		}

		return () => {
			audio?.removeEventListener('loadeddata', setAudioData);
			audio?.removeEventListener('timeupdate', setAudioTime);
		};
	}, [playing, clickedTime]);

	const forwardByTen = () => {
		audio.currentTime += 10;
	};

	const reverseByTen = () => {
		audio.currentTime -= 10;
	};

	const toggleLoop = () => {
		audio.loop = !toggled;
		setToggled(!toggled);
	};

	const formatDuration = duration => {
		return moment
			.duration(duration, 'seconds')
			.format('mm:ss', { trim: false });
	};

	const setPlaying = play => {
		setIsPlaying(play);
		if (play) audio.play();
		else audio.pause();
	};

	return {
		currentTime,
		duration,
		playing,
		setPlaying,
		setClickedTime,
		forwardByTen,
		reverseByTen,
		toggleLoop,
		toggled,
		formatDuration,
	};
};

export default usePlayer;
