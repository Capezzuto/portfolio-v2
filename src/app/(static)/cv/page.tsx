'use client';
import { useCallback, useState } from 'react';
import AnimatedLine from '@/app/_components/AnimatedLine';
import Headline from '../_components/Headline';
import StructuredJob from './StructuredJob';
import StructuredEducation from './StructuredEducation';
import workHistory from '@/app/_data/work-history.json';
import SubHeadline from './SubHeadline';
import TimelineItem from './TimelineItem';

const CVPage = () => {
	const [currentStage, setCurrentStage] = useState(1);
	const [currentEduStage, setCurrentEduStage] = useState(1);
	const jobAnimationEndHandler = useCallback((evt: AnimationEvent) => {
		setCurrentStage((stage) => stage + 1);
	}, []);
	const eduAnimationEndHandler = useCallback((evt: AnimationEvent) => {
		setCurrentEduStage((stage) => stage + 1);
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
						animationEndHandler={jobAnimationEndHandler}
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
				{workHistory.education.map((school, i, arr) => (
					<TimelineItem
						key={school.id}
						shouldAnimateCircle={currentEduStage >= 2 * i + 1}
						shouldAnimateLine={currentEduStage >= 2 * i + 2}
						animationEndHandler={eduAnimationEndHandler}
						shouldShowLine={i + 1 < arr.length}
						lineDuration='400ms'
					>
						<div>
							<StructuredEducation
								school={school.school}
								degree={school.degree}
								location={school.location}
								startDate={school.startDate}
								endDate={school.endDate}
							/>
						</div>
					</TimelineItem>
				))}
			</section>
		</section>
	);
};

export default CVPage;
