import Link from 'next/link';
import React from 'react';

const tabs = [
	{ text: 'Home', href: '/' },
	{ text: 'About', href: '/about' },
	{ text: 'CV', href: '/cv' },
	{ text: 'Projects', href: '/projects' },
];

const Navbar = () => {
	return (
		<nav className=''>
			<ul className='flex gap-6 lg:gap-8'>
				{tabs.map((tab) => (
					<li key={tab.href} className='font-(family-name:--font-roboto-condensed)'>
						<Link href={tab.href}>{tab.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
