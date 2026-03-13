import Image from 'next/image';
import React from 'react';
import Headline from '../_components/Headline';

const AboutPage = () => {
	return (
		<section className='about-page'>
			<Headline text='About (me)' />
			<div className='flex flex-col md:flex-row-reverse gap-6 md:gap-4 lg:gap-6'>
				<div className='image-column flex-1'>
					<Image
						alt='It’s me'
						width={640}
						height={480}
						// sizes='(max-width:768px) 640px, 480px'
						src='/56-640x480.jpg'
					/>
				</div>
				<div className='text-column flex-1'>
					<p className='font-(family-name:--font-roboto) text-base mb-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur.
					</p>
					<p className='font-(family-name:--font-roboto) text-base mb-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
					<p className='font-(family-name:--font-roboto) text-base mb-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
