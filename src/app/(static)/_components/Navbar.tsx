'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type MouseEvent, useState, useEffect } from 'react';
import './Navbar.css';
import debounce from '@/app/_utils/debounce';

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

const MenuOptions = () => {
	const currentPath = usePathname();

	return (
		<>
			<div className='dot-container pb-0.5 pointer-events-none'>
				<span className='dot inline-block rounded-full w-2 h-2 bg-neutral-900 ml-8 mr-8 pointer-events-none'></span>
			</div>
			<ul className='flex justify-between'>
				{tabs.map((tab) => (
					<li key={tab.href} className='font-(family-name:--font-roboto-condensed) pb-1'>
						<Link
							id={tab.id}
							href={tab.href}
							className={`pb-0 pt-8 px-4 md:px-4 ${currentPath === tab.href ? ' active' : ''}`}
						>
							{tab.text}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = (evt: MouseEvent) => {
		evt.stopPropagation();
		setShowMenu((show) => !show);
	};

	useEffect(() => {
		const hideMenu = (evt: Event) => {
			setShowMenu(false);
		};

		const hideMenuOnResize = debounce((evt: Event) => {
			if (window.innerWidth < 768) return;
			setShowMenu(false);
		}, 100);

		window.addEventListener('resize', hideMenuOnResize);
		window.addEventListener('click', hideMenu);

		return () => {
			window.removeEventListener('resize', hideMenuOnResize);
			window.addEventListener('click', hideMenu);
		};
	}, []);

	return (
		<nav className={`Navbar group h-full`}>
			<div className='Navbar-desktop group hidden h-full md:flex -mr-4 flex-col justify-end'>
				<MenuOptions />
			</div>
			<div className='Navbar-mobile group block md:hidden relative'>
				<button
					className='cursor-pointer px-4 py-2 rounded-lg border border-neutral-500 border-b-2'
					onClick={toggleMenu}
				>
					<span aria-hidden='true' className='block rounded-full w-1 h-1 bg-neutral-900 mb-1'></span>
					<span aria-hidden='true' className='block rounded-full w-1 h-1 bg-neutral-900 mb-1'></span>
					<span aria-hidden='true' className='block rounded-full w-1 h-1 bg-neutral-900'></span>
				</button>

				<div
					aria-hidden={showMenu ? false : true}
					className={`${showMenu ? 'blur-none mask-[0%] pointer-events-auto' : 'blur-md mask-[100%] pointer-events-none'} absolute mt-1 right-0 px-0 py-0 backdrop-blur-md rounded-lg border border-neutral-500 border-b-2 mask-(--mobile-mask) mask-size-[300%] transition-property-(--mobile-transition) ease-out duration-(--mobile-duration) delay-(--mobile-delay)`}
				>
					<MenuOptions />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
