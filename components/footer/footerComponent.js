import Link from 'next/link';

import {
	Contact,
	CopyrightColumn,
	FirstRow,
	FooterWrapper,
	SecondRow,
} from '@/components/footer/footerStyles';
import Container from '@/components/layout/container/container';
import Logo from '@/components/svg/logo';
import { HeaderFive } from '@/components/typography/headers';

const Footer = () => {
	return (
		<Container fluid>
			<FooterWrapper>
				<FirstRow>
					<div>
						<Logo />
					</div>
					<HeaderFive>Connecting you to your favourite channels</HeaderFive>
				</FirstRow>

				<SecondRow>
					<CopyrightColumn>
						<Link href='/'>
							<a>Terms of service</a>
						</Link>
						<Link href='/'>
							<a>Privacy</a>
						</Link>
						<Link href='/'>
							<a>Site credits</a>
						</Link>
						<span>© wavepod {new Date().getFullYear()}</span>
					</CopyrightColumn>

					<Contact>
						<h2>Get in touch</h2>
						<h4>Send me an email</h4>
						<h4>Contact me on </h4>{' '}
						<a href='mailto:alfredasare101@gmail.com?subject=Contact%alfred'>
							alfredasare101@gmail.com
						</a>
					</Contact>
				</SecondRow>
			</FooterWrapper>
		</Container>
	);
};

export default Footer;
