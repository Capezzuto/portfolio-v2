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

const Navbar = () => {
	const currentPath = usePathname();
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
		<nav className={`Navbar group`}>
			<div className='Navbar-desktop group hidden md:block -mr-4'>
				<div className='dot-container pointer-events-none'>
					<span className='dot inline-block rounded-full w-2 h-2 bg-neutral-900 ml-8 mr-8 pointer-events-none'></span>
				</div>
				<ul className='flex justify-between'>
					{tabs.map((tab, i, tabs) => (
						<li key={tab.href} className='font-(family-name:--font-roboto-condensed)'>
							<Link
								id={tab.id}
								href={tab.href}
								className={`pb-4 pt-6 px-4 ${currentPath === tab.href ? ' active' : ''}`}
							>
								{tab.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className='Navbar-mobile group block md:hidden relative -mr-4'>
				<button className='cursor-pointer px-4 py-2' onClick={toggleMenu}>
					<span aria-hidden='true' className='block rounded-full w-1 h-1 bg-neutral-900 mb-1'></span>
					<span aria-hidden='true' className='block rounded-full w-1 h-1 bg-neutral-900 mb-1'></span>
					<span aria-hidden='true' className='block rounded-full w-1 h-1 bg-neutral-900'></span>
				</button>
				{showMenu && (
					<ul className='flex-col absolute text-right right-0 pl-4 backdrop-blur-md rounded-lg border border-neutral-500'>
						{tabs.map((tab, i, tabs) => (
							<li key={tab.href + 'mobile'} className='font-(family-name:--font-roboto-condensed)'>
								<Link
									id={tab.id + ' mobile'}
									href={tab.href}
									onClick={(evt) => evt.stopPropagation()}
									className={`Navbar-mobileOption block relative pl-5 pr-4 py-1.5 ${currentPath === tab.href ? ' active' : ''} after:bg-neutral-900 after:w-1.5 after:h-1.5 after:absolute after:rounded-full`}
								>
									{tab.text}
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
