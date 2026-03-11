import React from 'react';
import AnimatedLine from '@/app/_components/AnimatedLine';

const CVPage = () => {
	return (
		<section className='cv-page'>
			<h1>C.V.</h1>
			<AnimatedLine
				color='#171717'
				viewBox='0 0 20 400'
				width={20}
				height={400}
				length={400}
				weight={2}
				orientation='vertical'
				shouldAnimate={true}
				animateType='forward'
				path='M 10 0 v 10 400'
				duration='1500ms'
				delay='200ms'
			/>
			<AnimatedLine
				height={20}
				width={20}
				color='#171717'
				length={200}
				weight={2}
				shouldAnimate={true}
				viewBox='0 0 20 20'
				path='M 10 0 l 10 10 l -10 10 l -10 -10 l 10 -10 z'
				animateType='outside-in'
				duration='500ms'
				delay='1700ms'
			/>
		</section>
	);
};

export default CVPage;
