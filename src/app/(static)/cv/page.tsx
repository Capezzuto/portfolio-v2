'use client';
import { useCallback, useState } from 'react';
import AnimatedLine from '@/app/_components/AnimatedLine';
import Headline from '../_components/Headline';
import StructuredJob from './StructuredJob';
import workHistory from '@/app/_data/work-history.json';
import SubHeadline from './SubHeadline';

const CVPage = () => {
	const [currentStage, setCurrentStage] = useState(1);
	const animationEndHandler = useCallback((evt: AnimationEvent) => {
		setCurrentStage((stage) => stage + 1);
	}, []);

	return (
		<section className='cv-page'>
			<Headline text='C.V.' />
			<section>
				<SubHeadline text='Skills' />
			</section>
			<section>
				<SubHeadline text='Experience' />
				{workHistory.experience.map((job, i, arr) => (
					<div key={job.id} className='flex'>
						<div className=''>
							<AnimatedLine
								height={20}
								width={20}
								color='#62748e'
								length={200}
								weight={2}
								shouldAnimate={currentStage >= 2 * i + 1}
								viewBox='0 0 20 20'
								path='M 10 1 a 9 9 0 1 1 0 18 a 9 9 0 1 1 0 -18'
								animateType='outside-in'
								duration='400ms'
								onAnimationEnd={animationEndHandler}
							/>
							{i + 1 < arr.length ? (
								<AnimatedLine
									color='#62748e'
									viewBox='0 0 20 400'
									width={20}
									height={400}
									length={400}
									weight={2}
									orientation='vertical'
									shouldAnimate={currentStage >= 2 * i + 2}
									animateType='forward'
									path='M 10 0 v 10 400'
									duration='1000ms'
									delay='200ms'
									onAnimationEnd={animationEndHandler}
								/>
							) : null}
						</div>
						<div className='flex-1'>
							<StructuredJob jobData={job} />
						</div>
					</div>
				))}
			</section>
			<section>
				<SubHeadline text='Education' />
			</section>
		</section>
	);
};

export default CVPage;
