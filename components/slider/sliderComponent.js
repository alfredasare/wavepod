import PropTypes from 'prop-types';
import { useRef } from 'react';

import { palette } from '@/utils/colors';

import {
	BarProgress,
	ProgressBarContainer,
	ProgressKnob,
	SliderWrapper,
} from './sliderComponentStyles';

const Slider = ({ onTimeUpdate, currentTime, duration }) => {
	const knobRef = useRef(null);
	const barRef = useRef(null);

	const currentPercentage = (currentTime / duration) * 100;

	const calculateClickedTime = e => {
		const clickPositionInPage = e.pageX;
		const bar = barRef.current;
		const barStart = bar.getBoundingClientRect().left + window.scrollX;
		const barWidth = bar.offsetWidth;
		const clickPositionInBar = clickPositionInPage - barStart;
		const timePerPixel = duration / barWidth;
		// console.log(barStart);
		// console.log(barWidth);
		// console.log(clickPositionInBar);
		// console.log(timePerPixel);
		return timePerPixel * clickPositionInBar;
	};

	const handleTimeDrag = e => {
		const knob = knobRef.current;
		knob.addEventListener('mousedown', () => {
			knob.style.width = '18px';
			knob.style.height = '18px';
		});

		knob.addEventListener('mouseup', () => {
			knob.style.width = '12px';
			knob.style.height = '12px';
		});

		onTimeUpdate(calculateClickedTime(e));

		const updateTimeOnMove = eMove => {
			onTimeUpdate(calculateClickedTime(eMove));
		};

		document.addEventListener('mousemove', updateTimeOnMove);

		document.addEventListener('mouseup', () => {
			document.removeEventListener('mousemove', updateTimeOnMove);
		});
	};

	return (
		<SliderWrapper>
			<ProgressBarContainer onMouseDown={e => handleTimeDrag(e)}>
				<BarProgress
					ref={barRef}
					style={{
						background: `linear-gradient(to right, ${palette.radicalRed} ${currentPercentage}%, #BEBEBE55 0)`,
					}}
				>
					<ProgressKnob
						ref={knobRef}
						style={{ left: `${currentPercentage - 0.5}%` }}
					/>
				</BarProgress>
			</ProgressBarContainer>
		</SliderWrapper>
	);
};

Slider.propTypes = {
	onTimeUpdate: PropTypes.func,
	currentTime: PropTypes.number,
	duration: PropTypes.number,
};

export default Slider;
