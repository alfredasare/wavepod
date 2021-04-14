import dynamic from 'next/dynamic';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Audio from '@/components/audio/audioComponent';
import FastForward from '@/components/svg/fastForward';
import Info from '@/components/svg/info';
import LargePlay from '@/components/svg/largePlay';
import Loop from '@/components/svg/loop';
import Pause from '@/components/svg/pause';
import Rewind from '@/components/svg/rewind';
import usePlayer from '@/hooks/usePlayer';
import { palette } from '@/utils/colors';

import { toggleIsPlaying } from '../../lib/redux/player/player.actions';
import {
	selectCurrentPodcast,
	selectIsPlaying,
} from '../../lib/redux/player/player.selectors';
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

const MobilePlayerComponent = ({
	currentPodcast,
	isPlaying,
	togglePlaying,
}) => {
	const [expanded, setExpanded] = useState(false);
	const {
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
		<MobilePlayerContainer hasVisited={!!currentPodcast.title}>
			<MobilePlayerOverlay
				expanded={expanded}
				onClick={() => setExpanded(!expanded)}
			/>
			<MobilePlayer id='mobile-player' expanded={expanded}>
				<DetailsRow>
					<DetailsImg onClick={() => setExpanded(!expanded)}>
						<img
							src={currentPodcast.channelImg}
							alt={`${currentPodcast.channelName} podcast`}
						/>
					</DetailsImg>

					<DetailsText onClick={() => setExpanded(!expanded)}>
						<Title>{currentPodcast.title}</Title>
						<Subtitle>{currentPodcast.channelName}</Subtitle>
					</DetailsText>

					<DetailsIcon role='button'>
						{expanded ? (
							<Caret>&rsaquo;</Caret>
						) : isPlaying ? (
							<Pause
								width='15px'
								height='15px'
								fill='#0000008A'
								onClick={() => {
									setPlaying(false);
									togglePlaying(false);
								}}
							/>
						) : (
							<LargePlay
								width='15px'
								height='15px'
								fill='#0000008A'
								onClick={() => {
									setPlaying(true);
									togglePlaying(true);
								}}
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
					{!isPlaying ? (
						<MobileControlIcon
							onClick={() => {
								setPlaying(true);
								togglePlaying(true);
							}}
						>
							<LargePlay fill='#0000008A' height='30px' width='30px' />
						</MobileControlIcon>
					) : (
						<MobileControlIcon
							onClick={() => {
								setPlaying(false);
								togglePlaying(false);
							}}
						>
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
					<div
						role='button'
						onClick={() => setExpanded(false)}
						aria-hidden='true'
					>
						<Link href={`/feed/${currentPodcast.channel}/${currentPodcast.id}`}>
							<a>
								<Info />
							</a>
						</Link>
					</div>
				</MiscRow>
			</MobilePlayer>
			<Audio src={currentPodcast.url} />
		</MobilePlayerContainer>
	);
};

MobilePlayerComponent.propTypes = {
	currentPodcast: PropTypes.object,
	isPlaying: PropTypes.bool,
	togglePlaying: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
	currentPodcast: selectCurrentPodcast,
	isPlaying: selectIsPlaying,
});

const mapDispatchToProps = dispatch => ({
	togglePlaying: playing => dispatch(toggleIsPlaying(playing)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MobilePlayerComponent);
