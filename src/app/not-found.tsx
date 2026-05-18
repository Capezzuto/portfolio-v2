import Link from 'next/link';
import LayoutPage from './(static)/layout';
import React from 'react';

interface NotFoundPageProps {}

const NotFoundPage = (props: NotFoundPageProps) => {
	return (
		<div className='dynamic-background overflow-x-hidden'>
			<div className='max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl min-h-screen mx-auto px-4 md:px-0  flex flex-col flex-start'>
				<main className='flex flex-col flex-1 pt-17 pb-17 md:pt-20 md:pb-20'>
					<section className='flex justify-center items-center flex-1 not-found-page relative size-full'>
						<div className='absolute place-self-center inset-0 '>
							<h1 className='font-(family-name:--font-fira-code) text-center'>
								<span className='block text-(length:--ultra-large-text) text-slate-300 blur-sm md:blur-md'>404</span>
								<span className='block text-2xl text-slate-400'>Page Not Found</span>
							</h1>
						</div>
						<div className='flex-1 z-1 relative fit-content text-center text-base md:text-xl'>
							<p className='font-(family-name:--font-roboto-condensed) text-slate-600'>
								The page you are looking for is not here.
							</p>
							<p className='font-(family-name:--font-roboto-condensed) text-slate-600'>
								Check the URL and try again, or try the{' '}
								<Link href='/' className='underline text-sky-600'>
									Home&nbsp;page
								</Link>
								.
							</p>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default NotFoundPage;
