import React from 'react';
import Header from './_components/Header';

const StaticLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='dynamic-background'>
			<div className='max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl min-h-screen mx-auto px-6 md:px-4 lg:px-0 flex flex-col flex-start'>
				<Header />
				<main className='flex-1 flex pt-16 pb-16 md:pt-20 md:pb-20'>{children}</main>
			</div>
		</div>
	);
};

export default StaticLayout;
