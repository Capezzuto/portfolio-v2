import React from 'react';

interface FooterProps {}

const Footer = (props: FooterProps) => {
	return (
		<footer className='flex justify-end'>
			<p className='font-(family-name:--font-roboto) text-sm pl-8 pt-1.5 pb-2 font-light border-t border-t-foreground/40'>
				&copy; {new Date().getFullYear()} Joe Capezzuto
			</p>
		</footer>
	);
};

export default Footer;
