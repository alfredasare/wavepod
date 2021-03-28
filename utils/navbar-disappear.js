export const NavbarDisappear = () => {
	let previousScrollPosition = window.pageYOffset;
	window.onscroll = () => {
		let currentScrollPosition = window.pageYOffset;
		const navbar = document.querySelector('nav');

		if (currentScrollPosition === 0) {
			navbar.style.padding = '20px 0';
			navbar.style.backgroundColor = 'white';
		} else {
			navbar.style.backgroundColor = 'white';
		}

		if (
			previousScrollPosition > currentScrollPosition ||
			currentScrollPosition < 100
		) {
			navbar.style.top = '0';
		} else {
			navbar.style.top = '-70px';
		}
		previousScrollPosition = currentScrollPosition;
	};
};
