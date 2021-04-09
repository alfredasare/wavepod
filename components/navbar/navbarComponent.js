import Link from 'next/link';
import { useState } from 'react';

import Burger from '@/components/navbar/burger/burgerComponent';
import {
	NavBarBrand,
	NavBarContainer,
	NavBarRow,
	NavMenuContainer,
	NavMenuIcon,
	NavMenuText,
} from '@/components/navbar/navbarStyles';
import OverlayComponent from '@/components/navbar/overlay/overlayComponent';
import Logo from '@/components/svg/logo';

const NavBar = () => {
	const [open, setOpen] = useState(false);

	return (
		<NavBarContainer>
			<OverlayComponent open={open} setOpen={setOpen} />
			<NavBarRow>
				<Link href='/'>
					<a>
						<NavBarBrand>
							<Logo />
						</NavBarBrand>
					</a>
				</Link>

				<NavMenuContainer>
					<NavMenuText open={open} onClick={() => setOpen(!open)}>
						{open ? 'close' : 'menu'}
					</NavMenuText>
					<NavMenuIcon>
						<Burger open={open} setOpen={setOpen} />
					</NavMenuIcon>
				</NavMenuContainer>
			</NavBarRow>
		</NavBarContainer>
	);
};

export default NavBar;
