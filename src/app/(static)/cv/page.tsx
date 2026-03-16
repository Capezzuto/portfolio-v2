'use client';
import { useCallback, useState } from 'react';
import AnimatedLine from '@/app/_components/AnimatedLine';
import Headline from '../_components/Headline';
import StructuredJob from './StructuredJob';
import workHistory from '@/app/_data/work-history.json';
import SubHeadline from './SubHeadline';
import TimelineItem from './TimelineItem';

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
					<TimelineItem
						key={job.id}
						animationEndHandler={animationEndHandler}
						shouldAnimateCircle={currentStage >= 2 * i + 1}
						shouldAnimateLine={currentStage >= 2 * i + 2}
						shouldShowLine={i + 1 < arr.length}
					>
						<StructuredJob jobData={job} />
					</TimelineItem>
				))}
			</section>
			<section>
				<SubHeadline text='Education' />
			</section>
		</section>
	);
};

export default CVPage;
