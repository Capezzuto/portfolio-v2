'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import './navbar.css';

const tabs = [
	{
		id: 'home',
		text: 'Home',
		href: '/',
	},
	{
		id: 'about',
		text: 'About',
		href: '/about',
	},
	{
		id: 'cv',
		text: 'CV',
		href: '/cv',
	},
	{
		id: 'projects',
		text: 'Projects',
		href: '/projects',
	},
];

const Navbar = () => {
	const currentPath = usePathname();

	return (
		<nav className={`Navbar group`}>
			<div className='group hidden md:block'>
				<div className='dot-container pointer-events-none'>
					<span className='dot inline-block rounded-full w-2 h-2 bg-neutral-900 ml-4 mr-4 pointer-events-none'></span>
				</div>
				<ul className='flex justify-between'>
					{tabs.map((tab, i, tabs) => (
						<li key={tab.href} className='font-(family-name:--font-roboto-condensed)'>
							<Link
								id={tab.id}
								href={tab.href}
								className={`pb-4 pt-6 px-4 ${!i ? 'pl-0 ' : ''}${i === tabs.length - 1 ? 'pr-0 ' : ''}${currentPath === tab.href ? ' active' : ''}`}
							>
								{tab.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
