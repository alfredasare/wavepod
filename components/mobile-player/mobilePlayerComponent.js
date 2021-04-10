import dynamic from 'next/dynamic';
import { useState } from 'react';

import Audio from '@/components/audio/audioComponent';
import FastForward from '@/components/svg/fastForward';
import Info from '@/components/svg/info';
import LargePlay from '@/components/svg/largePlay';
import Loop from '@/components/svg/loop';
import Pause from '@/components/svg/pause';
import Rewind from '@/components/svg/rewind';
import usePlayer from '@/hooks/usePlayer';
import { palette } from '@/utils/colors';

import {
	Caret,
	ControlsRow,
	DetailsIcon,
	DetailsImg,
	DetailsRow,
	DetailsText,
	DurationRow,
	MiscRow,
	MobileControlIcon,
	MobilePlayer,
	MobilePlayerContainer,
	MobilePlayerOverlay,
	RangeSlider,
	SeekerRow,
	Subtitle,
	Title,
} from './mobilePlayerStyles';

const Slider = dynamic(() => import('../slider/sliderComponent'));

const MobilePlayerComponent = () => {
	const [expanded, setExpanded] = useState(false);
	const {
		playing,
		setPlaying,
		forwardByTen,
		reverseByTen,
		duration,
		currentTime,
		setClickedTime,
		toggleLoop,
		toggled,
		formatDuration,
	} = usePlayer();

	return (
		<MobilePlayerContainer>
			<MobilePlayerOverlay
				expanded={expanded}
				onClick={() => setExpanded(!expanded)}
			/>
			<MobilePlayer id='mobile-player' expanded={expanded}>
				<DetailsRow>
					<DetailsImg onClick={() => setExpanded(!expanded)}>
						<img src='/images/images.jpg' alt='mkbhd' />
					</DetailsImg>

					<DetailsText onClick={() => setExpanded(!expanded)}>
						<Title>
							TWiT 792: Get Out of My Grocery Aisle - iPhone 12 Preview -
							Congress vs Big Tech - Oracle vs Google.
						</Title>
						<Subtitle>This Week in Tech (Audio)</Subtitle>
					</DetailsText>

					<DetailsIcon role='button'>
						{expanded ? (
							<Caret>&rsaquo;</Caret>
						) : playing ? (
							<Pause
								width='15px'
								height='15px'
								fill='#0000008A'
								onClick={() => setPlaying(false)}
							/>
						) : (
							<LargePlay
								width='15px'
								height='15px'
								fill='#0000008A'
								onClick={() => setPlaying(true)}
							/>
						)}
					</DetailsIcon>
				</DetailsRow>

				<SeekerRow>
					<RangeSlider>
						<Slider
							onTimeUpdate={time => setClickedTime(time)}
							currentTime={currentTime}
							duration={duration}
						/>
					</RangeSlider>
					<DurationRow>
						<span>{formatDuration(currentTime)}</span>
						<span>{formatDuration(duration)}</span>
					</DurationRow>
				</SeekerRow>

				<ControlsRow>
					<MobileControlIcon onClick={reverseByTen}>
						<Rewind fill='#0000008A' width='30' height='30' />
					</MobileControlIcon>
					{!playing ? (
						<MobileControlIcon onClick={() => setPlaying(true)}>
							<LargePlay fill='#0000008A' height='30px' width='30px' />
						</MobileControlIcon>
					) : (
						<MobileControlIcon onClick={() => setPlaying(false)}>
							<Pause fill='#0000008A' height='30px' width='30px' />
						</MobileControlIcon>
					)}
					<MobileControlIcon onClick={forwardByTen}>
						<FastForward fill='#0000008A' width='30' height='30' />
					</MobileControlIcon>
				</ControlsRow>

				<MiscRow>
					<div onClick={() => toggleLoop()} aria-hidden='true'>
						<Loop fill={toggled ? palette.radicalRed : '#0000008A'} />
					</div>
					<Info />
				</MiscRow>
			</MobilePlayer>
			<Audio src='/audio/for_KING_COUNTRY_-_Heavenly_Hosts.mp3' />
		</MobilePlayerContainer>
	);
};

export default MobilePlayerComponent;
