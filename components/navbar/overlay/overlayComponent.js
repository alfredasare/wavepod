import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import {
	MenuContent,
	Overlay,
	OverlayMenu,
} from '@/components/navbar/overlay/overlayStyles';

const OverlayComponent = ({ open, setOpen }) => {
	const isHidden = !!open;

	useEffect(() => {
		if (open) {
			document.querySelector('html').classList.add('hide-overflow');
		} else {
			document.querySelector('html').classList.remove('hide-overflow');
		}
	});

	return (
		<Overlay open={open} onClick={() => setOpen(!open)}>
			<OverlayMenu open={open} aria-hidden={!isHidden}>
				<Link href='/'>
					<a>
						<MenuContent
							open={open}
							aria-hidden={!isHidden}
							onClick={() => setOpen(!open)}
						>
							Home
						</MenuContent>
					</a>
				</Link>

				<Link href='/podcasts'>
					<a>
						<MenuContent
							open={open}
							aria-hidden={!isHidden}
							onClick={() => setOpen(!open)}
						>
							Podcasts
						</MenuContent>
					</a>
				</Link>
			</OverlayMenu>
		</Overlay>
	);
};

OverlayComponent.propTypes = {
	open: PropTypes.bool,
	setOpen: PropTypes.func,
};

export default OverlayComponent;
