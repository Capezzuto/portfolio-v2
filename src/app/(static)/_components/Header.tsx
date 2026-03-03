import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='flex justify-between items-center'>
			<div>
				<Link href='/'>
					<h2 className='font-(family-name:--font-fira-code) text-4xl'>Joe Capezzuto</h2>
					<h3 className='font-(family-name:--font-roboto-condensed) text-2xl'>Full Stack Developer</h3>
				</Link>
			</div>
			<div>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
