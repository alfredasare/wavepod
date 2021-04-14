import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Audio from '@/components/audio/audioComponent';
import FastForward from '@/components/svg/fastForward';
import LargePlay from '@/components/svg/largePlay';
import Pause from '@/components/svg/pause';
import Rewind from '@/components/svg/rewind';
import usePlayer from '@/hooks/usePlayer';

import { selectCurrentPodcast } from '../../lib/redux/player/player.selectors';
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
// import {toggleIsPlaying} from "../../lib/redux/player/player.actions";

const Slider = dynamic(() => import('../slider/sliderComponent'));

const DesktopPlayerComponent = ({ currentPodcast }) => {
	const {
		setPlaying,
		forwardByTen,
		reverseByTen,
		duration,
		currentTime,
		setClickedTime,
		formatDuration,
		playing,
	} = usePlayer();

	return (
		<DesktopPlayerContainer hasVisited={!!currentPodcast.title}>
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
							<img
								src={currentPodcast.channelImg}
								alt={`${currentPodcast.channelName} podcast`}
							/>
						</TitleImage>
						<TitleContent>
							<Title>{currentPodcast.title}</Title>
							<Subtitle>{currentPodcast.channelName}</Subtitle>
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
			<Audio src={currentPodcast.url} />
		</DesktopPlayerContainer>
	);
};

DesktopPlayerComponent.propTypes = {
	currentPodcast: PropTypes.object,
	isPlaying: PropTypes.bool,
	// togglePlaying: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
	currentPodcast: selectCurrentPodcast,
	// isPlaying: selectIsPlaying
});

const mapDispatchToProps = () => ({
	// togglePlaying: id => dispatch(toggleIsPlaying(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(DesktopPlayerComponent);
