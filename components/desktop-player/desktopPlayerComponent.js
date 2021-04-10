import dynamic from 'next/dynamic';

import Audio from '@/components/audio/audioComponent';
import FastForward from '@/components/svg/fastForward';
import LargePlay from '@/components/svg/largePlay';
import Pause from '@/components/svg/pause';
import Rewind from '@/components/svg/rewind';
import usePlayer from '@/hooks/usePlayer';

import {
	DesktopPlayer,
	DesktopPlayerContainer,
	MainContainer,
	MainControls,
	MainControlsColumn,
	OtherControlsColumn,
	OtherControlsDuration,
	SliderContainer,
	Subtitle,
	Title,
	TitleColumn,
	TitleContent,
	TitleImage,
} from './desktopPlayerStyles';

const Slider = dynamic(() => import('../slider/sliderComponent'));

const DesktopPlayerComponent = () => {
	const {
		playing,
		setPlaying,
		forwardByTen,
		reverseByTen,
		duration,
		currentTime,
		setClickedTime,
		formatDuration,
	} = usePlayer();

	return (
		<DesktopPlayerContainer>
			<DesktopPlayer id='desktop-player'>
				<SliderContainer>
					<Slider
						onTimeUpdate={time => setClickedTime(time)}
						currentTime={currentTime}
						duration={duration}
					/>
				</SliderContainer>
				<MainContainer>
					<TitleColumn>
						<TitleImage>
							<img src='/images/images.jpg' alt='channel pic' />
						</TitleImage>
						<TitleContent>
							<Title>
								TWiT 792: Get Out of My Grocery Aisle - iPhone 12 Preview -
								Congress vs Big Tech - Oracle vs Google. Lorem
							</Title>
							<Subtitle>30 mins left</Subtitle>
						</TitleContent>
					</TitleColumn>

					<MainControlsColumn>
						<MainControls>
							<Rewind
								fill='#0000008A'
								width='26'
								height='26'
								onClick={reverseByTen}
							/>

							{!playing ? (
								<LargePlay
									fill='#0000008A'
									height='23px'
									width='23px'
									onClick={() => setPlaying(true)}
								/>
							) : (
								<Pause
									fill='#0000008A'
									height='30px'
									width='30px'
									onClick={() => setPlaying(false)}
								/>
							)}

							<FastForward
								fill='#0000008A'
								width='26'
								height='26'
								onClick={forwardByTen}
							/>
						</MainControls>
					</MainControlsColumn>

					<OtherControlsColumn>
						<OtherControlsDuration>
							{formatDuration(currentTime)} / {formatDuration(duration)}
						</OtherControlsDuration>
					</OtherControlsColumn>
				</MainContainer>
			</DesktopPlayer>
			<Audio src='/audio/for_KING_COUNTRY_-_Heavenly_Hosts.mp3' />
		</DesktopPlayerContainer>
	);
};

export default DesktopPlayerComponent;
