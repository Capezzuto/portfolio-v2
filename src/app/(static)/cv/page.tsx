'use client';
import { useCallback, useState } from 'react';
import AnimatedLine from '@/app/_components/AnimatedLine';
import Headline from '../_components/Headline';

const CVPage = () => {
	const [currentStage, setCurrentStage] = useState(1);
	const animationEndHandler = useCallback((evt: AnimationEvent) => {
		setCurrentStage((stage) => stage + 1);
	}, []);

	return (
		<section className='cv-page'>
			<Headline text='C.V.' />
			<AnimatedLine
				color='#171717'
				viewBox='0 0 20 400'
				width={20}
				height={400}
				length={400}
				weight={2}
				orientation='vertical'
				shouldAnimate={currentStage >= 1}
				animateType='forward'
				path='M 10 0 v 10 400'
				duration='1000ms'
				delay='200ms'
				onAnimationEnd={animationEndHandler}
			/>
			<AnimatedLine
				height={20}
				width={20}
				color='oklch(55.6% 0 0)'
				length={200}
				weight={2}
				shouldAnimate={currentStage >= 2}
				viewBox='0 0 20 20'
				path='M 10 1 a 9 9 0 1 1 0 18 a 9 9 0 1 1 0 -18'
				animateType='outside-in'
				duration='400ms'
				onAnimationEnd={animationEndHandler}
			/>
		</section>
	);
};

export default CVPage;
