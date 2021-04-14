import { palette } from '@/utils/colors';

const Equalizer = () => {
	return (
		<svg height='24px' strokeWidth='4' viewBox='-12 -12 24 24' width='24px'>
			<g>
				<line
					stroke={palette.radicalRed}
					x1='-6'
					x2='-6'
					y1='8'
					y2='-8'
					className='line1'
				/>
				<line
					stroke={palette.radicalRed}
					x1='0'
					x2='0'
					y1='8'
					y2='-8'
					className='line2'
				/>
				<line
					stroke={palette.radicalRed}
					x1='6'
					x2='6'
					y1='8'
					y2='-8'
					className='line3'
				/>
			</g>
		</svg>
	);
};

export default Equalizer;
