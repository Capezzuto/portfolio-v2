import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='flex justify-between items-stretch pt-5'>
			<div>
				<Link href='/'>
					<h2 className='font-(family-name:--font-fira-code) text-2xl md:text-3xl'>Joe Capezzuto</h2>
					<h3 className='font-(family-name:--font-roboto-condensed) hidden md:block md:text-xl font-light'>
						Full Stack Developer
					</h3>
				</Link>
			</div>
			<div>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
